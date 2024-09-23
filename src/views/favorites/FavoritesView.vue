<template>
  <MainContainer>
    <div class="flex flex-col gap-8 mb-14">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <SectionTitle title="Favorite Articles" tag="h1" />
      <ArticlesSection :articles="favoriteArticles" :is-loading="isLoading" />
    </div>
  </MainContainer>
</template>

<script>
import apiClient from '@/api/axios'
import { Breadcrumb, SectionTitle } from '@/components/atoms'
import { ArticlesSection } from '@/components/templates'
import { MainContainer } from '@/components/organisms'

export default {
  components: {
    ArticlesSection,
    Breadcrumb,
    SectionTitle,
    MainContainer,
  },
  data() {
    return {
      favoriteArticles: [],
      isLoading: false,
      breadcrumbs: [
        { name: 'Home', link: '/' },
        { name: 'Favorites', link: null },
      ],
    }
  },
  methods: {
    fetchFavoriteArticles() {
      this.isLoading = true
      this.favoriteArticles = apiClient.getAllFavoriteArticles()
      this.isLoading = false
    },
  },
  created() {
    this.fetchFavoriteArticles()
  },
}
</script>
