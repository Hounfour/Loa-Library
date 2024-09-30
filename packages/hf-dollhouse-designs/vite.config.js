import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'HounfourComponentLibrary',
      fileName: (format) => `hounfour-component-library.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // Exclude Vue from the bundle and treat it as a peer dependency
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
