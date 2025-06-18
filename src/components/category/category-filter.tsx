import { MultiSelectFilter } from '@/components/ui/multi-select-filter';
import { useCategoryFilterStore } from '@/store/useCategoryFilterStore';
import { useCategoryQuery } from '@/hooks/useCategoryQuery';
import { CategoryFilterSkeleton } from './category-filter-skeleton';

export type CategoryFilterProps = {
  variant?: 'popover' | 'inline';
};

export function CategoryFilter({ variant }: CategoryFilterProps) {
  const selected = useCategoryFilterStore((store) => store.selected);
  const setSelected = useCategoryFilterStore((store) => store.setSelected);
  const {
    data: options = [],
    isFetching,
    isPending,
    error,
  } = useCategoryQuery();

  // Normally you would show something like a toast for the error
  if (isPending || isFetching)
    return <CategoryFilterSkeleton variant={variant} />;
  if (error)
    return (
      <p className="p-4 text-sm text-red-500">
        ❌ Error with loading data,
        <br />
        ⚠️ Dont forget the gql server!
      </p>
    );

  return (
    <div className="p-4">
      <MultiSelectFilter
        options={options ?? []}
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
