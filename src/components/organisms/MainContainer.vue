<template>
  <MainHeader />
  <div class="min-h-screen py-10 lg:py-16 px-10 md:px-20 lg:px-40 xl:px-60">
    <slot></slot>
  </div>
  <MainFooter />
</template>

<script>
import { MainHeader, MainFooter } from '@/components/organisms'

export default {
  components: {
    MainHeader,
    MainFooter
  },
}
</script>
