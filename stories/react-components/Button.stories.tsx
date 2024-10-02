import { Meta, StoryFn } from '@storybook/react';
import Button from '../../packages/dollhouse-designs/src/components/react/Button';
import { action } from '@storybook/addon-actions';
import React from 'react';

// Define the meta information for the Button component
const meta: Meta<typeof Button> = {
  title: 'Components/React/HF_Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }, // Logs clicks
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// Default export of meta
export default meta;

// Create a template for the Button stories
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Define the Primary story
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button', // Ensure this is a string
  primary: true,
};

// Define the Secondary story
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  secondary: true,
};

// Define the Danger story
export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  danger: true,
};

// Define the Large story
export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
};

// Define the Small story
export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small',
};
