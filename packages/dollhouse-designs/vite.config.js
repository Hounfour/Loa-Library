import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue(), react()],
  build: {
    lib: {
      entry: {
        react: resolve(__dirname, 'src/components/react-index.ts'),
        vue: resolve(__dirname, 'src/components/vue-index.ts'),
      },
      name: 'DollhouseDesigns',
      fileName: (format) => `dollhouse-designs.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // Exclude Vue from the bundle and treat it as a peer dependency
      external: ['vue', 'react', 'react-dom'],
      output: {
        globals: {
          vue: 'Vue',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
