const preview: import('@storybook/react').Preview = {
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
