import { shallowMount } from '@vue/test-utils';
import InputLabel from '../src/components/InputLabel.vue';

describe('InputLabel.vue', () => {
  it('renders the label text correctly', () => {
    const label = 'Username';
    const forId = 'username';
    const wrapper = shallowMount(InputLabel, {
      props: { value: label, forId },
    });

    expect(wrapper.text()).toContain(label);
  });

  it('sets the "for" attribute correctly', () => {
    const forId = 'email';
    const wrapper = shallowMount(InputLabel, {
      props: { value: 'Email', forId },
    });

    const labelElement = wrapper.find('label');
    expect(labelElement.attributes('for')).toBe(forId);
  });

  it('renders slot content if provided', () => {
    const wrapper = shallowMount(InputLabel, {
      props: { value: 'Label', forId: 'input-id' },
      slots: {
        default: '<span class="required">*</span>',
      },
    });

    expect(wrapper.html()).toContain('<span class="required">*</span>');
  });
});
