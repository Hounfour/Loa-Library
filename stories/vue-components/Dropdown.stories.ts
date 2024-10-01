import { Meta, StoryFn } from '@storybook/vue3'; // Ensure you are using vue3
import hf_dropdown from '../../packages/dollhouse-designs/src/components/vue/Dropdown.vue';

// Define metadata for the component story
const meta: Meta<typeof hf_dropdown> = {
  title: 'Components/Vue/Dropdown',
  component: hf_dropdown,
};

export default meta;

// Template function for the dropdown component
const Template: StoryFn<typeof hf_dropdown> = (args) => ({
  components: { hf_dropdown },
  setup() {
    return { args };
  },
  template: '<hf_dropdown v-bind="args" @option-selected="onOptionSelected" />',
  methods: {
    onOptionSelected(option: string) {
      console.log('Selected option:', option); // Handle the selected option
    },
  },
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
