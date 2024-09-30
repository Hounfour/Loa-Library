import { mount } from '@vue/test-utils';
import HF_Button from '../src/components/HFButton.vue';

describe('HF_Button.vue', () => {
  it('renders a button', () => {
    const wrapper = mount(HF_Button, {
      global: {
        plugins: [],
      },
    });

    expect(wrapper.exists()).toBe(true); // Check if the component exists
  });

  it('renders with the primary variant class', () => {
    const wrapper = mount(HF_Button, {
      props: {
        variant: 'primary',
      },
      global: {
        plugins: [],
      },
    });

    expect(wrapper.classes()).toContain('primary'); // Check if the primary class is applied
  });

  it('renders with the secondary variant class', () => {
    const wrapper = mount(HF_Button, {
      props: {
        variant: 'secondary',
      },
      global: {
        plugins: [],
      },
    });

    expect(wrapper.classes()).toContain('secondary'); // Check if the secondary class is applied
  });

  it('renders with the danger variant class', () => {
    const wrapper = mount(HF_Button, {
      props: {
        variant: 'danger',
      },
      global: {
        plugins: [],
      },
    });

    expect(wrapper.classes()).toContain('danger'); // Check if the danger class is applied
  });

  it('emits a click event when clicked', async () => {
    const wrapper = mount(HF_Button, {
      global: {
        plugins: [],
      },
    });

    await wrapper.trigger('click'); // Simulate a click event

    expect(wrapper.emitted('click')).toBeTruthy(); // Check if the click event was emitted
  });
});
