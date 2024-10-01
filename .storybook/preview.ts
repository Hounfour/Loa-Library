import { Preview } from '@storybook/vue3';

const preview: Preview = {
  decorators: [
    (_, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;
      switch (pageLayout) {
        case 'page':
          // Your page layout is probably a little more complex than this ;)
          return { template: '<div class="page-layout"><story/></div>' };
        case 'page-mobile':
          return { template: '<div class="page-mobile-layout"><story/></div>' };
        default:
          // In the default case, don't apply a layout
          return { template: '<story/>' };
      }
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      docs: { autodocs: true },
    },
  },
};

export default preview;
