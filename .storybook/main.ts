import { join, dirname } from 'path';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { StorybookConfig } */
const config: StorybookConfig = {
  framework: {
    // name: '@storybook/vue3-vite',
    name: '@storybook/react-vite',
    options: {
      // Additional options can be specified here if needed
    },
  },
  stories: [
    '../stories/**/*.mdx',
    '../stories/react-components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/vue-components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, options) {
    // You can modify the Vite configuration here if needed
    return mergeConfig(config, {
      plugins: [vue(), react()],
    });
  },
};

export default config;
