import type { Option } from '@/types';
import * as he from 'he';

/* 
 Since the categories are fetched from the API, we need to ensure
 they are properly formatted for use in the filter component. 
 Dedupe, and sanitize them.
 */
export function convertCategories(categories: string[]): Option[] {
  // Decode, trim, and deduplicate
  const unique = new Set<string>();

  const decoded = categories
    .map((cat) => he.decode(cat.trim()))
    .filter((label) => {
      const lower = label.toLowerCase();
      if (unique.has(lower)) return false;
      unique.add(lower);
      return true;
    });

  const options = decoded.map((label) => {
    const value = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, '-')
      .replace(/(^-|-$)/g, '');
    return { label, value };
  });

  return options;
}
