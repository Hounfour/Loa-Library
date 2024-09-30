import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import NavLink from '../src/components/NavLink.vue';

// Create mock components for testing
const MockComponent = {
  template: '<div></div>',
};

const routes = [
  { path: '/', name: 'Home', component: MockComponent },
  { path: '/about', name: 'About', component: MockComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('NavLink.vue', () => {
  beforeEach(async () => {
    router.push('/'); // Set initial route to '/'
    await router.isReady(); // Wait for the router to be ready
  });

  it('renders the link text correctly', () => {
    const wrapper = mount(NavLink, {
      props: { to: '/about' },
      global: {
        plugins: [router],
      },
      slots: {
        default: '<span>About Us</span>',
      },
    });

    // Check that the text is rendered
    expect(wrapper.text()).toContain('About Us');
  });

  it('applies the active class when the link is active', async () => {
    const wrapper = mount(NavLink, {
      props: { to: '/' }, // Test for the home link
      global: {
        plugins: [router],
      },
      slots: {
        default: '<span :class="{ active: isActive }">Home</span>',
      },
    });

    // Check if the active class is applied
    expect(wrapper.find('span').classes()).toContain('active');
  });

  it('does not apply the active class when the link is inactive', async () => {
    const wrapper = mount(NavLink, {
      props: { to: '/about' }, // Test for the about link
      global: {
        plugins: [router],
      },
      slots: {
        default: '<span :class="{ active: isActive }">About</span>',
      },
    });

    // Check if the active class is not applied
    expect(wrapper.find('span').classes()).not.toContain('active');
  });
});
