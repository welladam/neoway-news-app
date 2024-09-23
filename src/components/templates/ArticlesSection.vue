<template>
  <ArticleListSkeleton v-if="isLoading" />
  <ArticleList v-else :articles="formatArticles" @article-clicked="handleArticleClick"
    @favorite-clicked="handleFavoriteClick" :cardsSize="cardsSize" />
</template>

<script>
import { getUnixTime } from 'date-fns'
import apiClient from '@/api/axios'
import { formatArticleList } from '@/helpers/articleHelper'
import { showErrorToast } from '@/helpers/toastErrorHelper'
import { ArticleListSkeleton, ArticleList } from '@/components/organisms'

export default {
  components: {
    ArticleListSkeleton,
    ArticleList,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    cardsSize: {
      type: String,
      default: 'normal',
      validator: (value) => ['small', 'normal'].includes(value),
    },
  },
  methods: {
    handleArticleClick(article) {
      const timestamp = getUnixTime(article.publishedAt)
      this.$router.push(`/post/${article.source.id}/${timestamp}`)
    },
    async handleFavoriteClick(article) {
      try {
        article.isFavorite
          ? await apiClient.removeFavoriteArticle(article)
          : await apiClient.addFavoriteArticle(article)
      } catch (error) {
        showErrorToast(error.message)
      }
    },
  },
  computed: {
    formatArticles() {
      return formatArticleList(this.articles)
    },
  },
}
</script>
