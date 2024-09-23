import { shallowMount } from '@vue/test-utils'
import { ArticleList } from '@/components/organisms'
import { ArticleCard } from '@/components/molecules'

jest.mock('@/assets/placeholder-image.webp', () => 'mocked-image-path')
jest.mock('@/assets/github-icon.png', () => 'mocked-image-path')

describe('Organism - ArticleList', () => {
    let wrapper
    const articles = [
        {
            title: 'Test Article 1',
            description: 'Description for article 1',
            author: 'Author 1',
            source: { name: 'Source 1' },
            urlToImage: null,
            publishedAt: '2024-01-01',
            isFavorite: false,
        },
        {
            title: 'Test Article 2',
            description: 'Description for article 2',
            author: 'Author 2',
            source: { name: 'Source 2' },
            urlToImage: null,
            publishedAt: '2024-02-01',
            isFavorite: true,
        },
    ]

    beforeEach(() => {
        wrapper = shallowMount(ArticleList, {
            props: {
                articles,
                cardsSize: 'normal',
            },
        })
    })

    it('renders the correct number of ArticleCard components', () => {
        const articleCards = wrapper.findAllComponents(ArticleCard)
        expect(articleCards).toHaveLength(articles.length)
    })

    it('passes the correct props to ArticleCard components', () => {
        const articleCards = wrapper.findAllComponents(ArticleCard)
        expect(articleCards.length).toBe(articles.length)

        articleCards.forEach((articleCard, index) => {
            expect(articleCard.props('article')).toEqual(articles[index])
            expect(articleCard.props('size')).toBe('normal')
        })
    })

    it('applies the correct class based on cardsSize prop', async () => {
        expect(wrapper.classes()).toContain('md:grid-cols-2')
        await wrapper.setProps({ cardsSize: 'small' })
        expect(wrapper.classes()).toContain('lg:grid-cols-3')
    })

    it('emits "article-clicked" when an ArticleCard is clicked', async () => {
        const articleCard = wrapper.findComponent(ArticleCard)
        await articleCard.vm.$emit('article-clicked', articles[0])
        expect(wrapper.emitted('article-clicked')).toBeTruthy()
        expect(wrapper.emitted('article-clicked')[0]).toEqual([articles[0]])
    })

    it('emits "favorite-clicked" when an ArticleCard favorite button is clicked', async () => {
        const articleCard = wrapper.findComponent(ArticleCard)
        await articleCard.vm.$emit('favorite-clicked', articles[0])
        expect(wrapper.emitted('favorite-clicked')).toBeTruthy()
        expect(wrapper.emitted('favorite-clicked')[0]).toEqual([articles[0]])
    })
})
