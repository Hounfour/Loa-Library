import { fn } from '@storybook/test';
import type { Meta } from '@storybook/vue3';
import hf_button from '../../packages/dollhouse-designs/src/components/vue/Button.vue';

const meta: Meta<typeof hf_button> = {
  title: 'Components/Vue/HF_Button',
  component: hf_button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'fullscreen',
  },
  args: { onClick: fn() },
};

export default meta;

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    secondary: true,
    label: 'Button',
  },
};

export const Danger = {
  args: {
    danger: true,
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
