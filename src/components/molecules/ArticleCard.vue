<template>
  <div :class="[
    cardClasses,
    'relative flex flex-col w-full rounded-lg overflow-hidden shadow-lg',
    'cursor-pointer transition-transform duration-300 ease-out hover:scale-105',
  ]" @click="handleClick">
    <img :class="[imageClasses, 'h-1/2 2xl:p-2 2xl:rounded-2xl object-cover']"
      :src="article.urlToImage || ImagePlaceholder" />
    <div class="p-4 flex flex-col justify-between flex-grow bg-white gap-4">
      <div>
        <h2 class="line-clamp-2 leading-6 font-bold mb-4">{{ article.title }}</h2>
        <p class="line-clamp-3 leading-6">{{ article.description }}</p>
      </div>
      <div class="flex items-center justify-between overflow-hidden bg-gray-100 py-2 px-4 gap-5 rounded-lg">
        <div>
          <p class="max-w-80 overflow-hidden text-ellipsis font-bold line-clamp-1">
            {{ article.author || article.source.name }}
          </p>
          <p class="text-gray-500 line-clamp-1">{{ formattedDate }}</p>
        </div>
        <button @click.stop="handleFavoriteClick" class="text-gray-500 hover:text-primary transition duration-300">
          <BookmarkIcon v-if="!isFavorite" class="h-7" />
          <BookmarkFilledIcon v-else class="h-7 text-primary" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImagePlaceholder from '@/assets/placeholder-image.webp'
</script>

<script>
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as BookmarkFilledIcon } from '@heroicons/vue/24/solid'
import { formatDate } from '@/helpers/dateHelper'

export default {
  components: {
    BookmarkIcon,
    BookmarkFilledIcon,
  },
  data() {
    return {
      isFavorite: this.article.isFavorite,
    }
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value) => ['small', 'normal'].includes(value),
    },
  },
  methods: {
    handleClick() {
      this.$emit('article-clicked', this.article)
    },
    handleFavoriteClick() {
      this.isFavorite = !this.isFavorite
      this.$emit('favorite-clicked')
    },
  },
  computed: {
    formattedDate() {
      return formatDate(this.article.publishedAt)
    },
    cardClasses() {
      return this.size === 'small' ? '2xl:flex-col' : '2xl:max-h-96 2xl:flex-row'
    },
    imageClasses() {
      return this.size === 'small' ? '2xl:h-60 2xl:w-auto' : '2xl:h-80 2xl:w-80'
    },
  },
}
</script>
