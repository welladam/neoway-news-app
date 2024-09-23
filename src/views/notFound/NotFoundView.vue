<template>
  <MainContainer>
    <div class="flex flex-col gap-8 mb-14">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <div class="flex flex-col w-full items-center justify-center">
        <img alt="Not Found" :src="NotFoundImage" />
        <p>OOPS! Page you're looking for doesn't exist.</p>
      </div>
    </div>
  </MainContainer>
</template>

<script setup>
import NotFoundImage from '@/assets/404.webp'
</script>

<script>
import { Breadcrumb } from '@/components/atoms'
import { MainContainer } from '@/components/organisms'

export default {
  components: {
    Breadcrumb,
    MainContainer,
  },
  data() {
    return {
      breadcrumbs: [
        { name: 'Home', link: '/' },
        { name: 'Not Found', link: null },
      ],
    }
  },
}
</script>
