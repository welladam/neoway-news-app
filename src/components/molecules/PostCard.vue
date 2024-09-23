<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-col w-full justify-between rounded-lg p-6 lg:py-8 lg:px-10 bg-gray-100 gap-5">
      <SectionTitle :title="article.title" tag="h1" />
      <img
        :src="article.urlToImage || ImagePlaceholder"
        :alt="article.title"
        class="w-full max-h-[40rem] rounded-lg object-cover object-top"
      />
    </div>
    <PostInfo :date="article.publishedAt" :author="article.author" :source="article.source?.name" />
  </div>
</template>

<script setup>
import ImagePlaceholder from '@/assets/placeholder-image.webp'
</script>

<script>
import { SectionTitle } from '@/components/atoms'
import { PostInfo } from '@/components/molecules'

export default {
  components: {
    PostInfo,
    SectionTitle,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
