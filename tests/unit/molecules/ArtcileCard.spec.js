import { shallowMount } from '@vue/test-utils'
import { ArticleCard } from '@/components/molecules'
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as BookmarkFilledIcon } from '@heroicons/vue/24/solid'
import { formatDate } from '@/helpers/dateHelper'


jest.mock('@/assets/placeholder-image.webp', () => 'mocked-image-path')
jest.mock('@/helpers/dateHelper', () => ({
    formatDate: jest.fn(() => 'formatted date'),
}))

describe('Molecule - ArticleCard', () => {
    let wrapper
    const article = {
        title: 'Test Article',
        description: 'Test description',
        author: 'Author Name',
        source: { name: 'Source Name' },
        urlToImage: null,
        publishedAt: '2024-01-01',
        isFavorite: false,
    }

    beforeEach(() => {
        wrapper = shallowMount(ArticleCard, {
            props: { article },
        })
    })

    it('renders the article title and description correctly', () => {
        expect(wrapper.find('#title').text()).toBe(article.title)
        expect(wrapper.find('#description').text()).toBe(article.description)
    })

    it('renders the author or source correctly', () => {
        expect(wrapper.find('#author').text()).toBe(article.author)
    })

    it('formats and renders the date correctly', () => {
        expect(formatDate).toHaveBeenCalledWith(article.publishedAt)
        expect(wrapper.find('#date').text()).toBe('formatted date')
    })

    it('renders the placeholder image if urlToImage is null', () => {
        const img = wrapper.find('img')
        expect(img.attributes('src')).toBe('mocked-image-path')
    })

    it('renders the correct image if urlToImage is provided', async () => {
        const articleWithImage = {
            ...article,
            urlToImage: 'https://example.com/image.jpg',
        }
        await wrapper.setProps({ article: articleWithImage })
        const img = wrapper.find('img')
        expect(img.attributes('src')).toBe(articleWithImage.urlToImage)
    })

    it('emits "article-clicked" when clicked', async () => {
        await wrapper.trigger('click')
        expect(wrapper.emitted('article-clicked')).toBeTruthy()
        expect(wrapper.emitted('article-clicked')[0]).toEqual([article])
    })

    it('toggles isFavorite and emits "favorite-clicked" when favorite button is clicked', async () => {
        const favoriteButton = wrapper.find('button')
        await favoriteButton.trigger('click')
        expect(wrapper.vm.isFavorite).toBe(true)
        expect(wrapper.emitted('favorite-clicked')).toBeTruthy()
    })

    it('renders the BookmarkIcon when not favorited', () => {
        const bookmarkIcon = wrapper.findComponent(BookmarkIcon)
        expect(bookmarkIcon.exists()).toBe(true)
    })

    it('renders the BookmarkFilledIcon when favorited', async () => {
        await wrapper.setData({ isFavorite: true })
        const bookmarkFilledIcon = wrapper.findComponent(BookmarkFilledIcon)
        expect(bookmarkFilledIcon.exists()).toBe(true)
    })

    it('applies the correct class based on size prop', async () => {
        expect(wrapper.classes()).toContain('2xl:flex-row')
        await wrapper.setProps({ size: 'small' })
        expect(wrapper.classes()).toContain('2xl:flex-col')
    })
})
