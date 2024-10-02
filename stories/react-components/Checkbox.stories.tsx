import { Meta, StoryFn } from '@storybook/react';
import Checkbox from '../../packages/dollhouse-designs/src/components/react/Checkbox';
import { action } from '@storybook/addon-actions';
import React from 'react';

// Define the types for the component's props
interface CheckboxProps {
  checked: boolean;
  value?: string;
}

// Define the Storybook meta configuration
const meta: Meta<typeof Checkbox> = {
  title: 'Components/React/HF_Checkbox', // The title of the story in the sidebar
  component: Checkbox, // The component to be documented
  argTypes: {
    checked: { control: 'boolean' },
    value: { control: 'text' },
  },
};

export default meta;

// Create a template for the Checkbox stories
const Template: StoryFn<CheckboxProps> = (args) => {
  const handleChange = (checked: boolean) => {
    console.log('Checkbox updated:', checked);
    action('update:checked')(checked); // Log the checkbox update
  };

  return <Checkbox {...args} onChange={handleChange} />;
};

// Default story
export const Default = Template.bind({});
Default.args = {
  checked: false,
  value: 'Checkbox Label', // Adjust the default label as needed
};

// Checked story
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  value: 'Checked Checkbox',
};
