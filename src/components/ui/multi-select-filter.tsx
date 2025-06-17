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
import { cn } from '@/lib/utils';

type Option = { label: string; value: string };

type MultiSelectFilterProps = {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
};

export function MultiSelectFilter({
  options,
  selected,
  onChange,
  placeholder = 'Producten filter',
  searchPlaceholder = 'Zoek op ...',
}: MultiSelectFilterProps) {
  const [search, setSearch] = useState('');

  const filteredOptions = useMemo(() => {
    if (!search) return options;
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, options]);

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
      <PopoverContent className="w-64 p-0">
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
              {filteredOptions.map((option) => {
                const isSelected = selected.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => toggleValue(option.value)}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded border',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-30'
                      )}
                    >
                      <CheckIcon className="h-4 w-4" />
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
  );
}
