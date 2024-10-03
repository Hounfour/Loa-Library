import hf_checkbox from '../Checkbox.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

// Define the types for the component's props
interface CheckboxProps {
  checked: boolean;
  value?: string;
}

// Define the Storybook meta configuration
const meta: Meta<CheckboxProps> = {
  title: 'Components/Vue/HF_Checkbox', // The title of the story in the sidebar
  component: hf_checkbox, // The component to be documented
  argTypes: {
    checked: { control: 'boolean' },
    value: { control: 'text' },
  },
};

export default meta;

// Change StoryFn to Story
const Template: StoryFn<CheckboxProps> = (args) => ({
  components: { hf_checkbox },
  setup() {
    const onUpdateChecked = (val: boolean) => {
      console.log('Checkbox updated:', val);
      action('update:checked')(val); // Move the action call here for better clarity
    };

    return { args, onUpdateChecked };
  },
  template: '<hf_checkbox v-bind="args" @update:checked="onUpdateChecked" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  checked: false,
  value: 'Checkbox Label', // Adjust the default label as needed
};

// More variations can be created if necessary
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  value: 'Checked Checkbox',
};
