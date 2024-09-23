import { shallowMount } from '@vue/test-utils'
import { DynamicButton } from '@/components/atoms'
import { ArchiveBoxIcon } from '@heroicons/vue/24/outline'

describe('Atom - DynamicButton', () => {
    it('renders the label correctly', () => {
        const label = 'Click Me'
        const wrapper = shallowMount(DynamicButton, {
            props: { label },
        })

        expect(wrapper.text()).toContain(label)
    })

    it('renders the icon when passed', () => {
        const icon = ArchiveBoxIcon
        const wrapper = shallowMount(DynamicButton, {
            props: { label: 'Button', icon },
        })

        const iconComponent = wrapper.findComponent(icon)
        expect(iconComponent.exists()).toBe(true)
    })

    it('applies the correct class for left icon position', () => {
        const wrapper = shallowMount(DynamicButton, {
            props: { label: 'Button', iconPosition: 'left' },
        })

        expect(wrapper.classes()).toContain('flex-row')
    })

    it('applies the correct class for right icon position', () => {
        const wrapper = shallowMount(DynamicButton, {
            props: { label: 'Button', iconPosition: 'right' },
        })

        expect(wrapper.classes()).toContain('flex-row-reverse')
    })

    it('renders without an icon if not provided', () => {
        const wrapper = shallowMount(DynamicButton, {
            props: { label: 'Button' },
        })

        const iconComponent = wrapper.find('svg')
        expect(iconComponent.exists()).toBe(false)
    })
})
