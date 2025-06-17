import type { Meta, StoryObj } from '@storybook/react';
import { CategoryFilter } from '@/components/category/category-filter';

const meta: Meta<typeof CategoryFilter> = {
  title: 'Components/CategoryFilter',
  component: CategoryFilter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CategoryFilter>;

export const Popover: Story = {
  args: {
    variant: 'popover',
  },
};

export const Inline: Story = {
  args: {
    variant: 'inline',
  },
};
