import { shallowMount } from '@vue/test-utils';
import InputError from '@hf-vue/InputError.vue';

describe('InputError.vue', () => {
  it('renders an error message when passed', () => {
    const message = 'This field is required';
    const wrapper = shallowMount(InputError, {
      props: { message },
    });

    expect(wrapper.text()).toContain(message);
  });

  it('does not render the error message when no message is passed', () => {
    const wrapper = shallowMount(InputError, {
      props: { message: null },
    });

    // Check that no text content is rendered
    expect(wrapper.text()).toBe('');
  });
});
