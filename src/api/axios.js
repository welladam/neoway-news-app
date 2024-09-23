import axios from 'axios'
import store from '@/store'
import { setupCache } from 'axios-cache-interceptor'

const apiClient = setupCache(
  axios.create({
    baseURL: `${process.env.VUE_APP_NEWS_API_URL}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_NEWS_API_KEY}`,
    },
  })
)

export default {
  getNewsByCategory(code = 'world') {
    return apiClient.get(`everything?language=en&sortBy=publishedAt&q=${code}&pageSize=100`)
  },
  getAllNews(searchQuery) {
    return apiClient.get(`everything?sortBy=publishedAt&language=en&q=${searchQuery}&pageSize=100`)
  },
  getNewsFromSource(source) {
    return apiClient.get(`everything?sortBy=popularity&language=en&sources=${source}&pageSize=4`)
  },
  getNewsDetails(source, timestamp) {
    const date = new Date(timestamp * 1000)
    const from = date.toISOString()

    date.setSeconds(date.getSeconds() + 1)
    const to = date.toISOString()
    return apiClient.get(`everything?language=en&sources=${source}&from=${from}&to=${to}`)
  },
  async addFavoriteArticle(article) {
    await store.dispatch('addToFavorites', article)
  },
  async removeFavoriteArticle(article) {
    await store.dispatch('removeFromFavorites', article)
  },
  isFavoriteArticle(article) {
    return store.getters.isFavorite(article)
  },
  getAllFavoriteArticles() {
    return store.getters.getFavorites
  },
}
