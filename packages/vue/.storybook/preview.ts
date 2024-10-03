const preview: import('@storybook/vue3').Preview = {
  decorators: [
    // Add global decorators here if needed
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
