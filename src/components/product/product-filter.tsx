import { useState } from 'react';
import { MultiSelectFilter } from '@/components/ui/multi-select-filter';

const options = [
  { label: 'Fruits', value: 'fruits' },
  { label: 'Vegetables', value: 'vegetables' },
  { label: 'Dairy', value: 'dairy' },
];

export default function ProductFilter() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="p-4">
      <MultiSelectFilter
        options={options}
        selected={selected}
        onChange={setSelected}
        placeholder="Producten filter"
        searchPlaceholder="Zoek op ..."
      />
    </div>
  );
}
