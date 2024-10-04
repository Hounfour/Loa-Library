import type { Meta, StoryFn } from '@storybook/vue3';
import Button from '../Button.vue';

interface Props {
  label: string;
  type: 'primary' | 'secondary' | 'danger' | 'toggle';
  size: 'small' | 'medium' | 'large';
  icon?: string;
  isLoading: boolean;
  disabled: boolean;
  fullWidth: boolean;
  onClick: (event: MouseEvent) => void;
}

const meta: Meta<typeof Button> = {
  title: 'Dollhouse Designs/Vue/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: {
      control: {
        type: 'text',
        options: ['primary', 'secondary', 'danger', 'toggle'],
      },
    },
    size: {
      control: { type: 'text', options: ['small', 'medium', 'large'] },
    },
    icon: { control: 'text' },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'Button', // Default label
    type: 'primary', // Default type
    size: 'medium', // Default size
    isLoading: false,
    disabled: false,
    fullWidth: false,
  },
};

export default meta;

// Template for the button story
const Template: StoryFn<Props> = (args) => ({
  components: { Button },
  setup() {
    const handleClick = (event: MouseEvent) => {
      if (!args.disabled && !args.isLoading) {
        args.onClick(event);
      }
    };
    return { args, handleClick };
  },
  template: '<Button v-bind="args" @click="handleClick" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  label: 'Submit',
  type: 'primary',
  size: 'medium',
  isLoading: false,
  disabled: false,
  fullWidth: false,
  icon: '',
};

// Other stories
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  type: 'primary',
  size: 'medium',
  isLoading: false,
  disabled: false,
  fullWidth: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
  size: 'medium',
  isLoading: false,
  disabled: false,
  fullWidth: false,
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  type: 'danger',
  size: 'medium',
  isLoading: false,
  disabled: false,
  fullWidth: false,
};

export const Toggle = Template.bind({});
Toggle.args = {
  label: 'Toggle Button',
  type: 'toggle',
  size: 'medium',
  isLoading: false,
  disabled: false,
  fullWidth: false,
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  type: 'primary',
  size: 'large',
  isLoading: false,
  disabled: false,
  fullWidth: false,
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  type: 'primary',
  size: 'small',
  isLoading: false,
  disabled: false,
  fullWidth: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Next',
  type: 'primary',
  size: 'medium',
  isLoading: false,
  disabled: false,
  fullWidth: false,
  icon: 'icon-left-arrow', // Example icon class
};
