import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/vue-index.ts'),
      name: 'DollhouseDesignsVue',
      fileName: (format) => `dd-vue-components.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'dist-vue',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
