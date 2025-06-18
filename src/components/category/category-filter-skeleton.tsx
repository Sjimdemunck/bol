import { Skeleton } from '../ui/skeleton';

type CategoryFilterProps = {
  variant?: 'popover' | 'inline';
};

export function CategoryFilterSkeleton({
  variant = 'inline',
}: CategoryFilterProps) {
  if (variant === 'inline') {
    return (
      <div className="p-4 space-y-2 border rounded-xl">
        <Skeleton className="h-4 w-32" /> {/* Title */}
        <Skeleton className="h-9 w-full" /> {/* search input */}
        <Skeleton className="h-8 w-full" /> {/* Options */}
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    );
  }

  // Popover variant
  return <Skeleton className="h-9 w-48 mt-4" />;
}
