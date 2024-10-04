import { Meta, StoryFn } from '@storybook/vue3';
import Dropdown from '../Dropdown.vue';

interface Props {
  label: string;
  options: string[];
}

// Define metadata for the component story
const meta: Meta<typeof Dropdown> = {
  title: 'Dollhouse Designs/Vue/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'array',
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
const Template: StoryFn<Props> = (args) => ({
  components: { Dropdown },
  setup() {
    const onOptionSelected = (option: string) => {
      console.log('Selected option:', option); // Handle the selected option
    };
    return { args, onOptionSelected };
  },
  template: '<Dropdown v-bind="args" @option-selected="onOptionSelected" />',
});

// Default dropdown story
export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  label: 'Select an option',
};

// Dropdown with a custom label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  options: ['Apple', 'Banana', 'Cherry'],
  label: 'Select a fruit',
};

// Dropdown with no options
export const NoOptions = Template.bind({});
NoOptions.args = {
  options: [],
  label: 'No options available',
};

// Dropdown with a selected option
export const WithSelectedOption = Template.bind({});
WithSelectedOption.args = {
  options: ['Red', 'Green', 'Blue'],
  label: 'Select a color',
};
