import { mount } from '@vue/test-utils';
import TextInput from '../src/components/TextInput.vue';

describe('TextInput.vue', () => {
  it('renders the label and placeholder correctly', () => {
    const wrapper = mount(TextInput, {
      props: {
        label: 'Username', // Added label prop
        placeholder: 'Enter your username',
        id: 'username',
      },
    });

    expect(wrapper.find('label').text()).toBe('Username');
    expect(wrapper.find('input').attributes('placeholder')).toBe(
      'Enter your username'
    );
  });

  it('emits the updated value when input changes', async () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
        id: 'username',
        label: 'Username', // Added label prop
      },
    });

    const input = wrapper.find('input');
    await input.setValue('NewUsername');

    // Check that the emitted event is correct
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['NewUsername']);
  });

  it('displays the correct initial value', () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: 'InitialValue',
        id: 'username',
        label: 'Username', // Added label prop
      },
    });

    expect(wrapper.find('input').element.value).toBe('InitialValue');
  });
});
