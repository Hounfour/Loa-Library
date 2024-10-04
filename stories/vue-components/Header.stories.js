import { fn } from '@storybook/test';

import hf_header from '../Header.vue';

export default {
  title: 'Components/Vue/HF_Header',
  component: hf_header,
  tags: ['autodocs'],
  render: (args) => ({
    components: {
      hf_header,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: '<hf_header :user="user" />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {
  args: {
    user: null,
  },
};
