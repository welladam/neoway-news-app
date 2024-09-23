<template>
  <div
    class="flex flex-grow md:flex-grow-0 items-center justify-center px-4 relative h-12 rounded-lg w-40 overflow-hidden text-white font-semibold cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
    :style="{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }"
    @click="handleClick"
  >
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    <span class="relative text-white z-10">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('tag-clicked', this.code)
    },
  },
}
</script>
