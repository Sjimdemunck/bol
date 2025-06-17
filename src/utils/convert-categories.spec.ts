import { convertCategories } from './convert-categories';

describe('convertCategories', () => {
  it('converts and decodes categories correctly', () => {
    const input = [
      'Kinderboeken',
      'Kunst, Fotografie &amp; Architectuur',
      'Cd&#x27;s',
    ];
    const result = convertCategories(input);

    expect(result).toEqual([
      { label: 'Kinderboeken', value: 'kinderboeken' },
      {
        label: 'Kunst, Fotografie & Architectuur',
        value: 'kunst-fotografie-architectuur',
      },
      { label: "Cd's", value: 'cd-s' },
    ]);
  });

  it('handles empty input', () => {
    expect(convertCategories([])).toEqual([]);
  });

  it('strips trailing hyphens', () => {
    const result = convertCategories([' Test / Category! ']);
    expect(result[0].value).toBe('test-category');
  });
});
