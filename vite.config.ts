/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '.storybook/vitest.setup.ts',

    // ✅ run *only* these files
    include: ['src/tests/unit/**/*.test.{ts,tsx}'],

    // ✅ never touch stories or .storybook
    exclude: [
      '**/*.stories.*',
      '**/.storybook/**',
      'src/tests/storybook/**', // where you parked story files
    ],
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
