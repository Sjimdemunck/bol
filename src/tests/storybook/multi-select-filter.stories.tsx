import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelectFilter } from '@/components/ui/multi-select-filter';
import { useState } from 'react';

const meta: Meta<typeof MultiSelectFilter> = {
  title: 'Components/MultiSelectFilter',
  component: MultiSelectFilter,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelectFilter>;

const mockOptions = [
  { label: 'Boeken', value: 'boeken' },
  { label: 'Cd’s', value: 'cds' },
  { label: 'Kunst', value: 'kunst' },
  { label: 'Speelgoed', value: 'speelgoed' },
];

export const Popover: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['cds']);
    return (
      <MultiSelectFilter
        variant="popover"
        title="Categorieën"
        placeholder="Filter op categorie"
        searchPlaceholder="Zoek categorie..."
        options={mockOptions}
        selected={selected}
        onChange={setSelected}
      />
    );
  },
};

export const Inline: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['boeken']);
    return (
      <MultiSelectFilter
        variant="inline"
        title="Categorieën"
        placeholder="Filter op categorie"
        searchPlaceholder="Zoek categorie..."
        options={mockOptions}
        selected={selected}
        onChange={setSelected}
      />
    );
  },
};
