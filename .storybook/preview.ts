import { Preview } from '@storybook/vue3';
import { Preview as ReactPreview } from '@storybook/react';
import '../packages/dollhouse-designs/src/components/styles/button.css';
import '../packages/dollhouse-designs/src/components/styles/header.css';
import '../packages/dollhouse-designs/src/components/styles/page.css';

// Export a single preview combining both Vue and React previews
const preview: Preview & ReactPreview = {
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
