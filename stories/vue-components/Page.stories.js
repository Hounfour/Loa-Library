import { expect, userEvent, within } from '@storybook/test';

import hf_page from '../../packages/dollhouse-designs/src/components/vue/Page.vue';

export default {
  title: 'Components/Vue/HF_Page',
  component: hf_page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

export const LoggedIn = {
  render: () => ({
    components: {
      hf_page,
    },
    template: '<hf_page />',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
