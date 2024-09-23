<template>
  <MainContainer>
    <PostCardSkeleton v-if="isLoading" />
    <div v-else class="flex flex-col gap-8">
      <div class="flex justify-between items-center gap-8">
        <Breadcrumb :breadcrumbs="breadcrumbs" />
        <DynamicButton
          :class="isFavorite && 'text-primary'"
          :label="isFavorite ? 'Unfavorite' : 'Favorite'"
          :icon="isFavorite ? BookmarkSolidIcon : BookmarkIcon"
          @click="handleFavoriteClick"
        />
      </div>
      <div class="flex flex-col w-full gap-20 mb-14">
        <PostCard :article="article" />
        <p class="lg:w-2/3">{{ article.content }}</p>
      </div>
      <div class="flex flex-col gap-6">
        <SectionTitle :title="`More ${article.source?.name} Posts`" />
        <ArticlesSection :articles="sourceArticles" :isLoading="isPostsSourceLoading" cards-size="small" />
      </div>
    </div>
  </MainContainer>
</template>

<script setup>
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/vue/24/solid'
</script>

<script>
import apiClient from '@/api/axios'
import { Breadcrumb, DynamicButton, SectionTitle } from '@/components/atoms'
import { PostCard, PostCardSkeleton } from '@/components/molecules'
import { MainContainer } from '@/components/organisms'
import { ArticlesSection } from '@/components/templates'

export default {
  components: {
    ArticlesSection,
    DynamicButton,
    Breadcrumb,
    MainContainer,
    PostCard,
    PostCardSkeleton,
    SectionTitle,
  },
  data() {
    return {
      article: {},
      sourceArticles: [],
      breadcrumbs: [],
      isLoading: false,
      isPostsSourceLoading: false,
      isFavorite: false,
    }
  },
  methods: {
    handleFavoriteClick() {
      this.isFavorite = !this.isFavorite
      this.updateFavoriteArticle(this.article)
    },
    async updateFavoriteArticle(article) {
      const result = article.isFavorite
        ? await apiClient.removeFavoriteArticle(article)
        : await apiClient.addFavoriteArticle(article)
      if (!result.success) {
        console.log('error favorite')
        return
      }
    },
    fetchPostDetail() {
      this.isLoading = true
      apiClient
        .getNewsDetails(this.$route.params.source, this.$route.params.timestamp)
        .then((result) => {
          const currentArticle = result.data.articles[0]
          this.article = {
            ...currentArticle,
            isFavorite: apiClient.isFavoriteArticle(currentArticle),
          }
          this.isFavorite = this.article.isFavorite
          this.breadcrumbs = [
            { name: 'Home', link: '/' },
            { name: this.article.source.name, link: null },
            { name: this.article.title, link: null },
          ]
        })
        .catch((error) => {
          console.log('eerror', error)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    fetchPostsFromSource() {
      this.isPostsSourceLoading = true
      apiClient
        .getNewsFromSource(this.$route.params.source)
        .then((result) => {
          this.sourceArticles = result.data.articles
        })
        .catch((error) => {
          console.log('error', error)
        })
        .finally(() => {
          this.isPostsSourceLoading = false
        })
    },
  },
  created() {
    this.fetchPostDetail()
    this.fetchPostsFromSource()
  },
}
</script>
