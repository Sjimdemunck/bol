import * as he from 'he';

export type Option = {
  label: string;
  value: string;
};

/**
 * Converts a raw category array into multiselect-ready option objects. Example data set.
 * Each item will be of shape: { label: string, value: string } as typed by Option.
 *
 * @param categories - raw string array of categories (possibly with HTML entities)
 * @returns Array of Option objects
 */
export function convertCategories(categories: string[]): Option[] {
  console.log('📦 Starting category conversion...');

  const decoded = categories.map((cat) => {
    const decodedCategorie = he.decode(cat);
    console.log(`🔍 Decoded: "${cat}" → "${decodedCategorie}"`);
    return decodedCategorie;
  });

  const options = decoded.map((label) => {
    const value = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, '-')
      .replace(/(^-|-$)/g, '');

    console.log(
      `✅ Converted to option: { label: "${label}", value: "${value}" }`
    );
    return { label, value };
  });

  console.log('🎉 Conversion complete!');
  return options;
}
