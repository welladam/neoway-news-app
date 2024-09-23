<template>
  <header class="flex justify-between items-center py-5 border-b-2 px-10 md:px-20 lg:px-40 xl:px-60">
    <span class="text-xl font-heading text-primary">
      <router-link to="/" class="hover:text-primary transition duration-300">NEOWAY.news</router-link>
    </span>
    <DynamicButton label="Favorite News" :icon="BookOpenIcon" iconPosition="right" @click="handleFavoritesClick" />
  </header>
</template>

<script setup>
import { BookOpenIcon } from '@heroicons/vue/24/solid'
</script>

<script>
import { DynamicButton } from '@/components/atoms'

export default {
  components: {
    DynamicButton,
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    handleFavoritesClick() {
      this.$router.push('/favorites')
    },
  },
}
</script>
