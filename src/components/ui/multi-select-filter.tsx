'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandInput,
  CommandList,
  CommandEmpty,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckIcon, X } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import { cn } from '@/utils/utils';
import type { Option } from '@/types';

type MultiSelectFilterProps = {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  variant?: 'popover' | 'inline';
  title?: string;
  searchPlaceholder?: string;
};

export function MultiSelectFilter({
  options,
  selected,
  onChange,
  placeholder = 'Producten filter',
  variant = 'inline',
  title,
  searchPlaceholder = 'Zoek op ...',
}: MultiSelectFilterProps) {
  const [search, setSearch] = useState('');

  const filteredOptions = useMemo(() => {
    if (!search) return options;
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, options]);

  // Sort selected options to the top
  // This ensures that selected options are always displayed first
  const orderdOptions = useMemo(() => {
    const selectedSet = new Set(selected);
    return filteredOptions.slice().sort((a, b) => {
      const aSelected = selectedSet.has(a.value);
      const bSelected = selectedSet.has(b.value);
      if (aSelected === bSelected) return 0;
      return aSelected ? -1 : 1;
    });
  }, [filteredOptions, selected]);

  const toggleValue = useCallback(
    (filterValue: string) => {
      onChange(
        selected.includes(filterValue)
          ? selected.filter((value) => value !== filterValue)
          : [...selected, filterValue]
      );
    },
    [selected, onChange]
  );

  const clearAll = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      onChange([]);
    },
    [onChange]
  );

  return (
    <>
      {variant === 'inline' ? (
        <div className="border rounded-xl p-4">
          {title && <h3 className="mb-2 text-sm font-semibold">{title}</h3>}
          <Command shouldFilter={false}>
            <CommandInput
              value={search}
              onValueChange={setSearch}
              placeholder={searchPlaceholder}
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>No results found</CommandEmpty>
              <CommandGroup>
                {orderdOptions.map((option) => {
                  const isSelected = selected.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleValue(option.value)}
                    >
                      <div
                        className={cn(
                          'mr-2 flex h-4 w-4 items-center justify-center rounded border',
                          isSelected ? 'bg-primary text-white' : 'opacity-30'
                        )}
                      >
                        <CheckIcon
                          className={cn('h-4 w-4', isSelected && 'text-white')}
                        />
                      </div>
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-dashed"
            >
              {placeholder}
              {selected.length > 0 && (
                <>
                  <Badge variant="secondary">{selected.length}</Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={clearAll}
                    className="w-4 h-4 p-0"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <Command shouldFilter={false}>
              <CommandInput
                value={search}
                onValueChange={setSearch}
                placeholder={searchPlaceholder}
                className="h-9"
              />
              <CommandList>
                <CommandEmpty>No results found</CommandEmpty>
                <CommandGroup>
                  {orderdOptions.map((option) => {
                    const isSelected = selected.includes(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => toggleValue(option.value)}
                      >
                        <div
                          className={cn(
                            'mr-2 flex h-4 w-4 items-center justify-center rounded border',
                            isSelected ? 'bg-primary text-white' : 'opacity-30'
                          )}
                        >
                          <CheckIcon
                            className="h-4 w-4 text-white"
                            aria-hidden
                          />
                        </div>
                        {option.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}
