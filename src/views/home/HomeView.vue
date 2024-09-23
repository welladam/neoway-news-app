<template>
  <MainContainer>
    <div class="flex flex-col gap-2 mb-14">
      <SectionTitle title="World News" tag="h1" />
      <InputText class="lg:w-1/2" @input-changed="handleInputText" :icon="MagnifyingGlassIcon"
        placeholder="Search in the World" />
    </div>
    <div v-if="searchQuery" class="flex flex-col gap-6">
      <SectionTitle title="Results in the World" />
      <ArticlesSection :articles="allArticlesFiltered" :isLoading="isAllNewsLoading" />
    </div>
    <div v-else class="flex flex-col gap-6">
      <SectionTitle title="Trending Top News" />
      <TagList @tag-clicked="handleTagClicked" />
      <ArticlesSection :articles="topArticles" :isLoading="isTopNewsLoading" />
    </div>
  </MainContainer>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>

<script>
import apiClient from '@/api/axios'
import { showErrorToast } from '@/helpers/toastErrorHelper'
import { InputText, SectionTitle } from '@/components/atoms'
import { TagList } from '@/components/molecules'
import { MainContainer } from '@/components/organisms'
import { ArticlesSection } from '@/components/templates'

export default {
  components: {
    ArticlesSection,
    MainContainer,
    TagList,
    SectionTitle,
    InputText,
  },
  data() {
    return {
      allArticlesFiltered: [],
      topArticles: [],
      searchQuery: '',
      isTopNewsLoading: false,
      isAllNewsLoading: false,
    }
  },
  methods: {
    handleInputText(value) {
      this.searchQuery = value
      if (value) {
        this.fetchAllNews(value)
      }
    },
    handleTagClicked(code) {
      this.fetchTopNews(code)
    },
    fetchAllNews(searchQuery) {
      this.isAllNewsLoading = true
      apiClient
        .getAllNews(searchQuery)
        .then(async (result) => {
          this.allArticlesFiltered = result.data.articles
        })
        .catch((error) => {
          showErrorToast(error)
        })
        .finally(() => {
          this.isAllNewsLoading = false
        })
    },
    fetchTopNews(code) {
      this.isTopNewsLoading = true
      apiClient
        .getNewsByCategory(code)
        .then(async (result) => {
          this.topArticles = result.data.articles
        })
        .catch((error) => {
          showErrorToast(error)
        })
        .finally(() => {
          this.isTopNewsLoading = false
        })
    },
  },
  created() {
    this.fetchTopNews()
  },
}
</script>
