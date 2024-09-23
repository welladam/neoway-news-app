<template>
  <div class="flex items-center gap-2">
    <div class="w-1 h-4 bg-red-500 rounded-full"></div>
    <component :is="tag" class="text-gray-800 font-bold">{{ title }}</component>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    tag: {
      type: String,
      default: 'h2',
    },
  },
}
</script>
