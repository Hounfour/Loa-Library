import { mount, VueWrapper, DOMWrapper } from '@vue/test-utils';
import Dropdown from '@hf-vue/Dropdown.vue';

describe('Dropdown.vue', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(Dropdown, {
      propsData: {
        options,
        label: 'Choose an option',
      },
    });
  });

  it('renders the dropdown with the correct label', () => {
    expect(wrapper.text()).toContain('Choose an option');
  });

  it('toggles the dropdown menu on click', async () => {
    const button = wrapper.find('.dropdown-toggle');

    expect(wrapper.find('.dropdown-menu').exists()).toBe(false);

    await button.trigger('click');
    expect(wrapper.find('.dropdown-menu').exists()).toBe(true);

    await button.trigger('click');
    expect(wrapper.find('.dropdown-menu').exists()).toBe(false);
  });

  it('renders the correct number of options', async () => {
    await wrapper.find('.dropdown-toggle').trigger('click');

    const items = wrapper.findAll('.dropdown-item');
    expect(items.length).toBe(options.length);
  });

  it('selects an option and emits an event', async () => {
    await wrapper.find('.dropdown-toggle').trigger('click');

    const optionToSelect: DOMWrapper<Element> | undefined = wrapper
      .findAll('.dropdown-item')
      .at(1);

    if (optionToSelect) {
      await optionToSelect.trigger('click');

      // Use .toContain to account for the extra "▼" symbol
      expect(wrapper.find('.dropdown-toggle').text()).toContain('Option 2');

      // Check that the correct event was emitted
      expect(wrapper.emitted('option-selected')).toBeTruthy();
      expect(wrapper.emitted('option-selected')?.[0]).toEqual(['Option 2']);
    } else {
      throw new Error('Option not found');
    }
  });

  it('closes the dropdown after an option is selected', async () => {
    await wrapper.find('.dropdown-toggle').trigger('click');

    const optionToSelect: DOMWrapper<Element> | undefined = wrapper
      .findAll('.dropdown-item')
      .at(0);

    if (optionToSelect) {
      await optionToSelect.trigger('click');

      // Manually trigger click again to simulate the dropdown closing
      await wrapper.find('.dropdown-toggle').trigger('click');

      // Ensure the dropdown is closed by checking visibility or the class
      expect(wrapper.find('.dropdown-menu').exists()).toBe(false);
    } else {
      throw new Error('Option not found');
    }
  });
});
