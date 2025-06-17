import { gql } from 'graphql-request';
import { client } from '../client';
import { convertCategories } from '@/utils/convert-categories';
import type { Option } from '@/types';

const CATEGORIES_QUERY = gql`
  query {
    categories
  }
`;

export async function fetchCategories(): Promise<Option[]> {
  const { categories } = await client.request<{ categories: string[] }>(
    CATEGORIES_QUERY
  );
  return convertCategories(categories);
}
