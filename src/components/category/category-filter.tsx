import { MultiSelectFilter } from '@/components/ui/multi-select-filter';
import { useCategoryFilterStore } from '@/store/useCategoryFilterStore';

const options = [
  { label: 'Fruits', value: 'fruits' },
  { label: 'Vegetables', value: 'vegetables' },
  { label: 'Dairy', value: 'dairy' },
];

export type CategoryFilterProps = {
  variant?: 'popover' | 'inline';
};

export function CategoryFilter({ variant }: CategoryFilterProps) {
  const selected = useCategoryFilterStore((store) => store.selected);
  const setSelected = useCategoryFilterStore((store) => store.setSelected);

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
