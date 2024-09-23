import { shallowMount } from '@vue/test-utils'
import { InputText } from '@/components/atoms'
import { ArchiveBoxIcon } from '@heroicons/vue/24/outline'

jest.mock('lodash/debounce', () => jest.fn((fn) => fn))

describe('Atom - InputText', () => {
  it('renders the input with the correct placeholder', () => {
    const placeholder = 'Enter text'
    const wrapper = shallowMount(InputText, {
      props: { placeholder },
    })

    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe(placeholder)
  })

  it('renders the icon from Heroicons when passed', () => {
    const wrapper = shallowMount(InputText, {
      props: { icon: ArchiveBoxIcon },
    })

    const iconComponent = wrapper.findComponent(ArchiveBoxIcon)
    expect(iconComponent.exists()).toBe(true)
  })

  it('does not render the icon if not provided', () => {
    const wrapper = shallowMount(InputText)

    const iconComponent = wrapper.findComponent(ArchiveBoxIcon)
    expect(iconComponent.exists()).toBe(false)
  })

  it('emits "input-changed" event with debounced input value', async () => {
    const wrapper = shallowMount(InputText)

    const input = wrapper.find('input')
    await input.setValue('Test input')

    expect(wrapper.emitted('input-changed')).toBeTruthy()
    expect(wrapper.emitted('input-changed')[0]).toEqual(['Test input'])
  })

  it('updates v-model value correctly', async () => {
    const wrapper = shallowMount(InputText, {
      data() {
        return {
          inputValue: '',
        }
      },
    })

    const input = wrapper.find('input')
    await input.setValue('New value')

    expect(wrapper.vm.inputValue).toBe('New value')
  })
})
