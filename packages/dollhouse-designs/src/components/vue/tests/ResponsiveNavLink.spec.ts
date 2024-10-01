import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import ResponsiveNavLink from '@hf-vue/ResponsiveNavLink.vue';

// Create a mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: { template: '<div>Home</div>' },
    },
    {
      path: '/about',
      name: 'About',
      component: { template: '<div>About</div>' },
    },
  ],
});

describe('ResponsiveNavLink.vue', () => {
  beforeEach(async () => {
    // Use the router before each test
    await router.push('/home');
  });

  it('renders correctly and applies active class based on route', async () => {
    const wrapper = mount(ResponsiveNavLink, {
      props: {
        href: '/home',
      },
      global: {
        plugins: [router],
      },
      slots: {
        default: 'Home Link',
      },
    });

    // Verify the rendered output
    expect(wrapper.find('a').text()).toBe('Home Link');

    // Check if the active class is applied
    expect(wrapper.classes()).toContain('border-indigo-400');

    // Navigate to a different route
    await router.push('/about');

    // Recheck the active class
    expect(wrapper.classes()).not.toContain('border-indigo-400');
  });

  it('renders correctly when not active', async () => {
    const wrapper = mount(ResponsiveNavLink, {
      props: {
        href: '/about', // Not the current route
      },
      global: {
        plugins: [router],
      },
      slots: {
        default: 'About Link',
      },
    });

    // Verify the rendered output
    expect(wrapper.find('a').text()).toBe('About Link');

    // Check that the inactive class is applied
    expect(wrapper.classes()).toContain('border-transparent');
  });
});
