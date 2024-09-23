<template>
  <ArticleListSkeleton v-if="isLoading" />
  <ArticleList
    v-else
    :articles="formatArticles"
    @article-clicked="handleArticleClick"
    @favorite-clicked="handleFavoriteClick"
    :cardsSize="cardsSize"
  />
</template>

<script>
import { getUnixTime } from 'date-fns'
import apiClient from '@/api/axios'
import { formatArticleList } from '@/helpers/articleHelper'
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
      const result = article.isFavorite
        ? await apiClient.removeFavoriteArticle(article)
        : await apiClient.addFavoriteArticle(article)
      if (!result.success) {
        console.log('error favorite')
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
