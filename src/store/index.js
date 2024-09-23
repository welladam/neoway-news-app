import { createStore } from 'vuex'

export default createStore({
  state: {
    favorites: [],
  },
  getters: {
    getFavorites(state) {
      return state.favorites
    },
    isFavorite: (state) => (article) => {
      return state.favorites.some(
        (favorite) => favorite.source.id === article.source.id && favorite.publishedAt === article.publishedAt
      )
    },
  },
  mutations: {
    ADD_TO_FAVORITES(state, article) {
      if (
        !state.favorites.some(
          (favorite) => favorite.source.id === article.source.id && favorite.publishedAt === article.publishedAt
        )
      ) {
        state.favorites.push(article)
      }
    },
    REMOVE_FROM_FAVORITES(state, article) {
      state.favorites = state.favorites.filter(
        (favorite) => !(favorite.source.id === article.source.id && favorite.publishedAt === article.publishedAt)
      )
    },
  },
  actions: {
    addToFavorites({ commit }, article) {
      commit('ADD_TO_FAVORITES', article)
    },
    removeFromFavorites({ commit }, articleId) {
      commit('REMOVE_FROM_FAVORITES', articleId)
    },
  },
})
