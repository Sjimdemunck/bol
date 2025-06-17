import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/api/graphql/queries/category';
import type { Option } from '@/types';

export function useCategoryQuery() {
  return useQuery<Option[]>({
    queryKey: ['categoryData'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
