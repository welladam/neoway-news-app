<template>
  <nav class="text-sm text-gray-500">
    <ul class="flex">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <span v-if="crumb.link">
          <router-link :to="crumb.link" class="hover:text-primary transition duration-300">
            {{ crumb.name }}
          </router-link>
        </span>
        <span v-else class="font-semibold text-text line-clamp-2">
          {{ crumb.name }}
        </span>

        <span v-if="index < breadcrumbs.length - 1" class="mx-2">></span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
      validator(value) {
        return value.every((item) => item.name && (item.link || item.link === null))
      },
    },
  },
}
</script>
