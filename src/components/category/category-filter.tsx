import { useState } from 'react';
import { MultiSelectFilter } from '@/components/ui/multi-select-filter';

const options = [
  { label: 'Fruits', value: 'fruits' },
  { label: 'Vegetables', value: 'vegetables' },
  { label: 'Dairy', value: 'dairy' },
];

export type CategoryFilterProps = {
  variant?: 'popover' | 'inline';
};

export function CategoryFilter({ variant }: CategoryFilterProps) {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="p-4">
      <MultiSelectFilter
        options={options}
        selected={selected}
        onChange={setSelected}
        placeholder="Product Groep"
        searchPlaceholder="Zoek op ..."
        variant={variant}
        title="Product Groep"
      />
    </div>
  );
}
