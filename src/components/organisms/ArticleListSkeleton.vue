<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ArticleCardSkeleton />
    <ArticleCardSkeleton />
    <ArticleCardSkeleton />
    <ArticleCardSkeleton />
    <ArticleCardSkeleton />
    <ArticleCardSkeleton />
  </div>
</template>

<script>
import { ArticleCardSkeleton } from '@/components/molecules'

export default {
  components: {
    ArticleCardSkeleton,
  },
}
</script>
