import { Meta, StoryFn } from '@storybook/react';
import Dropdown from '../../packages/react/src/Dropdown';

// Define metadata for the component story
const meta: Meta<typeof Dropdown> = {
  title: 'Dollhouse Designs/React/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options to display in the dropdown.',
    },
    label: {
      control: 'text',
      description: 'Label to display when no option is selected.',
    },
    onOptionSelected: {
      action: 'option-selected',
      description: 'Event triggered when an option is selected.',
    },
  },
};

export default meta;

// Template function for the dropdown component
const Template: StoryFn<{
  options: string[];
  label?: string;
  onOptionSelected: (option: string) => void;
}> = (args) => {
  const handleOptionSelected = (option: string) => {
    console.log('Selected option:', option); // Handle the selected option
    args.onOptionSelected(option); // Call the action to update Storybook
  };

  return <Dropdown {...args} onOptionSelected={handleOptionSelected} />;
};

// Default dropdown story
export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  label: 'Select an option',
  onOptionSelected: () => {}, // Default to a no-op function
};

// Dropdown with a custom label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  options: ['Apple', 'Banana', 'Cherry'],
  label: 'Select a fruit',
  onOptionSelected: () => {}, // Default to a no-op function
};

// Dropdown with no options
export const NoOptions = Template.bind({});
NoOptions.args = {
  options: [],
  label: 'No options available',
  onOptionSelected: () => {}, // Default to a no-op function
};

// Dropdown with a selected option
export const WithSelectedOption = Template.bind({});
WithSelectedOption.args = {
  options: ['Red', 'Green', 'Blue'],
  label: 'Select a color',
  onOptionSelected: () => {}, // Default to a no-op function
};
