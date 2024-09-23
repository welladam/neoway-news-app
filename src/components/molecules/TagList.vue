<template>
  <div class="flex gap-3 bg-secondary p-4 rounded-lg flex-wrap">
    <TagCard
      v-for="(tag, index) in tags"
      :key="index"
      :code="tag.code"
      :label="tag.label"
      :imageUrl="tag.imageUrl"
      @tag-clicked="handleTagClicked"
    />
  </div>
</template>

<script>
import { TagCard } from '@/components/atoms'

export default {
  components: {
    TagCard,
  },
  methods: {
    handleTagClicked(code) {
      this.$emit('tag-clicked', code)
    },
  },
  data() {
    return {
      tags: [
        {
          code: 'world',
          label: '#Top News',
          imageUrl:
            'https://img.freepik.com/free-vector/earth-with-digital-network-connection-background_1017-33689.jpg',
        },
        {
          code: 'business',
          label: '#Business',
          imageUrl:
            'https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg',
        },
        {
          code: 'entertainment',
          label: '#Entertainment',
          imageUrl: 'https://aguacalientecasinos.com/wp-content/uploads/2021/09/Main-Entertainment-Hero-scaled.jpg',
        },
        {
          code: 'general',
          label: '#General',
          imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg',
        },
        {
          code: 'health',
          label: '#Health',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47VqLTEmTCqFuR9SnuWgMnHy_N0vJKQgWzA&s',
        },
        {
          code: 'science',
          label: '#Science',
          imageUrl: 'https://as2.ftcdn.net/v2/jpg/05/79/64/29/1000_F_579642932_z3CUhYjjYWcGIWJtO30pMyYVFpDyoa1W.jpg',
        },
        {
          code: 'sports',
          label: '#Sports',
          imageUrl: 'https://img.freepik.com/fotos-gratis/ferramentas-esportivas_53876-138077.jpg',
        },
        {
          code: 'technology',
          label: '#Technology',
          imageUrl:
            'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg',
        },
      ],
    }
  },
}
</script>
