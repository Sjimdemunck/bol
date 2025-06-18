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

  const orderedOptions = useMemo(() => {
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
        <div
          className="border rounded-xl p-4"
          role="group"
          aria-labelledby="filter-title"
        >
          {title && (
            <h3 id="filter-title" className="mb-2 text-sm font-semibold">
              {title}
            </h3>
          )}
          <Command shouldFilter={false}>
            <CommandInput
              value={search}
              onValueChange={setSearch}
              placeholder={searchPlaceholder}
              className="h-9"
              aria-label="Zoek in filteropties"
            />
            <CommandList
              role="listbox"
              aria-label="Filteropties"
              className="focus:outline"
            >
              <CommandEmpty>Geen resultaten gevonden</CommandEmpty>
              <CommandGroup>
                {orderedOptions.map((option) => {
                  const isSelected = selected.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleValue(option.value)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div
                        className={cn(
                          'mr-2 flex size-4 items-center justify-center rounded border',
                          isSelected ? 'bg-primary text-white' : 'opacity-30'
                        )}
                        aria-hidden
                      >
                        <CheckIcon
                          className={cn('size-4', isSelected && 'text-white')}
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
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              {placeholder}
              {selected.length > 0 && (
                <>
                  <Badge
                    aria-label={`${selected.length} filter${
                      selected.length === 1 ? '' : 's'
                    } geselecteerd`}
                    variant="secondary"
                  >
                    {selected.length}
                  </Badge>
                  <Button
                    aria-label="Verwijder alle filters"
                    size="icon"
                    variant="ghost"
                    onClick={clearAll}
                    className="size-4 p-0"
                  >
                    <X className="size-3" aria-hidden />
                  </Button>
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="p-0"
            role="dialog"
            aria-label="Filterselectie"
          >
            <Command shouldFilter={false}>
              <CommandInput
                value={search}
                onValueChange={setSearch}
                placeholder={searchPlaceholder}
                className="h-9"
                aria-label="Zoek in filteropties"
              />
              <CommandList role="listbox" aria-label="Filteropties">
                <CommandEmpty>Geen resultaten gevonden</CommandEmpty>
                <CommandGroup>
                  {orderedOptions.map((option) => {
                    const isSelected = selected.includes(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => toggleValue(option.value)}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div
                          className={cn(
                            'mr-2 flex size-4 items-center justify-center rounded border',
                            isSelected ? 'bg-primary text-white' : 'opacity-30'
                          )}
                          aria-hidden
                        >
                          <CheckIcon className="size-4" aria-hidden />
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
