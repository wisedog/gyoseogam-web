import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Header from '@/views/components/Header.vue';

describe('Header.vue', () => {
  it('renders well', () => {
    const wrapper = shallowMount(Header, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.find('h1').text()).toMatch('교서감');
  });
});
