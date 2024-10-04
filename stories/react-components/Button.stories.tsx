import { Meta, StoryFn } from '@storybook/react';
import Button from '../../packages/react/src/Button';
import React from 'react';

// Define the meta information for the Button component
const meta: Meta<typeof Button> = {
  title: 'Dollhouse Designs/React/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'text', options: ['primary', 'secondary', 'danger'] },
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
};

export default meta;

// Template for the Button story
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

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
