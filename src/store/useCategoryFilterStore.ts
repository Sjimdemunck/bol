import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Category = string;

type CategoryFilterState = {
  selected: Category[];
  setSelected: (values: Category[]) => void;
  toggleCategory: (value: Category) => void;
  clear: () => void;
};

export const useCategoryFilterStore = create<CategoryFilterState>()(
  // Persist allows you to save the state in localStorage, with the name property as LocalStorage key
  persist(
    (set, get) => ({
      selected: [],
      setSelected: (values) => set({ selected: values }),
      toggleCategory: (value) => {
        const current = get().selected;
        const isSelected = current.includes(value);
        const next = isSelected
          ? current.filter((v) => v !== value)
          : [...current, value];
        set({ selected: next });
      },
      clear: () => set({ selected: [] }),
    }),
    {
      name: 'category-filter',
    }
  )
);
