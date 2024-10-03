import { shallowMount, VueWrapper } from '@vue/test-utils';
import Modal from '@hf-vue/Modal.vue';

describe('Modal.vue', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(Modal, {
      props: {
        title: 'Test Modal',
        isVisible: false,
      },
    });
  });

  it('renders correctly when not visible', () => {
    expect(wrapper.isVisible()).toBe(false);
  });

  it('renders correctly when visible', async () => {
    await wrapper.setProps({ isVisible: true });
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.find('h3').text()).toBe('Test Modal');
  });

  it('closes the modal when the close button is clicked', async () => {
    await wrapper.setProps({ isVisible: true });
    const closeButton = wrapper.find('.close-button');
    await closeButton.trigger('click');

    expect(wrapper.emitted('update:isVisible')).toBeTruthy();
    expect(wrapper.emitted('update:isVisible')?.[0]).toEqual([false]);
  });

  it('closes the modal when the overlay is clicked', async () => {
    await wrapper.setProps({ isVisible: true });
    await wrapper.find('.modal-overlay').trigger('click');

    expect(wrapper.emitted('update:isVisible')).toBeTruthy();
    expect(wrapper.emitted('update:isVisible')?.[0]).toEqual([false]);
  });

  it('calls the confirm event when the confirm button is clicked', async () => {
    await wrapper.setProps({ isVisible: true });
    const confirmButton = wrapper.find('.confirm-button');
    await confirmButton.trigger('click');

    // Check if the 'confirm' event was emitted
    expect(wrapper.emitted('confirm')).toBeTruthy();

    // Ensure only one 'confirm' event was emitted
    expect(wrapper.emitted('confirm')?.length).toBe(1);

    // Check the visibility update
    expect(wrapper.emitted('update:isVisible')).toBeTruthy();

    expect(wrapper.emitted('update:isVisible')?.[0]).toEqual([false]);
  });

  it('renders the slot content correctly', async () => {
    const slotContent = 'This is some slot content.';
    wrapper = shallowMount(Modal, {
      props: {
        isVisible: true,
      },
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.find('.modal-body').text()).toContain(slotContent);
  });
});
