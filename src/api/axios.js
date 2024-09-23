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
  }),
  {
    cacheTakeover: false,
  }
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
    try {
      await store.dispatch('addToFavorites', article)
      return { success: true }
    } catch (error) {
      console.error('error', error)
      throw error
    }
  },
  async removeFavoriteArticle(article) {
    try {
      await store.dispatch('removeFromFavorites', article)
      return { success: true }
    } catch (error) {
      console.error('error', error)
      throw error
    }
  },
  isFavoriteArticle(article) {
    try {
      return store.getters.isFavorite(article)
    } catch (error) {
      console.error('error', error)
      throw error
    }
  },
  getAllFavoriteArticles() {
    try {
      return store.getters.getFavorites
    } catch (error) {
      console.error('error', error)
      throw error
    }
  },
}
