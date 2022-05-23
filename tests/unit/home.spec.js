import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('HelloWorld.vue', () => {
    const wrapper = shallowMount(Home);
  it('renders Homepage', () => {
    expect(wrapper.find('[data-test="main-page"]').exists()).toBe(true);
  })
})
