import { shallowMount } from '@vue/test-utils';
import Checkbox from '../src/components/Checkbox.vue';

describe('Checkbox.vue', () => {
  it('renders correctly with initial checked state', () => {
    // Mount the component with the checked prop set to true
    const wrapper = shallowMount(Checkbox, {
      props: {
        checked: true,
        value: 'test-value',
      },
    });

    // Find the checkbox input
    const checkbox = wrapper.find('input[type="checkbox"]');

    // Check that the checkbox is checked
    expect((checkbox.element as HTMLInputElement).checked).toBe(true);

    // Check for specific classes or styles
    expect(checkbox.classes()).toContain('rounded');
    expect(checkbox.classes()).toContain('border-gray-300');

    // Remove the style check as it will return undefined
    // Optionally check if the checkbox has specific attributes
    expect(checkbox.attributes('type')).toBe('checkbox'); // Ensure it's a checkbox
  });

  it('emits update:checked when checked state changes', async () => {
    const wrapper = shallowMount(Checkbox, {
      props: {
        checked: false,
        value: 'test-value',
      },
    });

    // Find the checkbox input
    const checkbox = wrapper.find('input[type="checkbox"]');

    // Simulate checking the checkbox
    await checkbox.setValue(true);

    // Check that the event is emitted with the correct value
    const emittedCheckedEvents = wrapper.emitted('update:checked');
    expect(emittedCheckedEvents).toBeTruthy(); // Ensure events exist
    expect(emittedCheckedEvents![0]).toEqual([true]);

    // Simulate a change event to uncheck the checkbox
    await checkbox.setValue(false);

    // Check that the event is emitted with the correct value
    const emittedUncheckedEvents = wrapper.emitted('update:checked');
    expect(emittedUncheckedEvents).toBeTruthy(); // Ensure events exist
    expect(emittedUncheckedEvents![1]).toEqual([false]);
  });
});
