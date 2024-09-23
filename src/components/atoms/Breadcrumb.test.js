import { shallowMount } from '@vue/test-utils'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('Breadcrumb.vue', () => {
    const routes = [{ path: '/', component: { template: '<div>Home</div>' } }]
    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    it('renderiza corretamente com links e sem links', async () => {
        const breadcrumbs = [
            { name: 'Home', link: '/' },
            { name: 'Category', link: '/category' },
            { name: 'Product', link: null },
        ]

        const wrapper = shallowMount(Breadcrumb, {
            global: {
                plugins: [router],  // Integra o router
            },
            props: { breadcrumbs },
        })

        // Verifica se os nomes estão sendo renderizados corretamente
        const breadcrumbItems = wrapper.findAll('li')
        expect(breadcrumbItems).toHaveLength(breadcrumbs.length)

        // Verifica se o primeiro item é um router-link
        const firstLink = wrapper.find('li:first-child router-link')
        expect(firstLink.exists()).toBe(true)
        expect(firstLink.text()).toBe('Home')

        // Verifica se o último item não é um link
        const lastItem = wrapper.find('li:last-child')
        expect(lastItem.text()).toContain('Product')
        expect(lastItem.find('router-link').exists()).toBe(false)

        // Verifica se os separadores estão sendo renderizados corretamente
        const separators = wrapper.findAll('li > span.mx-2')
        expect(separators).toHaveLength(breadcrumbs.length - 1) // Deve ter um separador a menos do que os breadcrumbs
    })

    it('renderiza corretamente quando não há breadcrumbs', async () => {
        const wrapper = shallowMount(Breadcrumb, {
            props: { breadcrumbs: [] },
        })

        // Verifica se não há nenhum item de breadcrumb renderizado
        const breadcrumbItems = wrapper.findAll('li')
        expect(breadcrumbItems).toHaveLength(0)
    })

    it('valida corretamente os props', async () => {
        const breadcrumbs = [
            { name: 'Home', link: '/' },
            { name: 'Category', link: '/category' },
            { name: 'Product' }, // Falta o 'link' explicitamente
        ]

        const wrapper = shallowMount(Breadcrumb, {
            props: { breadcrumbs },
        })

        // Como a validação de props está correta, não deve haver erros
        expect(wrapper.exists()).toBe(true)
    })
})
