<template>
  <div :class="[cardClasses, 'grid grid-cols-1 gap-6']">
    <ArticleCard
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      :size="cardsSize"
      @article-clicked="handleArticleClick"
      @favorite-clicked="handleFavoriteClick(article)"
    />
  </div>
</template>

<script>
import { ArticleCard } from '@/components/molecules'

export default {
  components: {
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
    cardsSize: {
      type: String,
      default: 'normal',
      validator: (value) => ['small', 'normal'].includes(value),
    },
  },
  methods: {
    handleArticleClick(article) {
      this.$emit('article-clicked', article)
    },
    handleFavoriteClick(article) {
      this.$emit('favorite-clicked', article)
    },
  },
  computed: {
    cardClasses() {
      return this.cardsSize === 'small' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'md:grid-cols-2'
    },
  },
}
</script>
