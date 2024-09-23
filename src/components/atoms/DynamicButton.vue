<template>
  <button
    :class="[
      'flex items-center space-x-2 px-4 py-2 gap-1 bg-secondary text-gray-700 rounded-lg hover:bg-gray-200 transition duration-300',
      buttonClasses,
    ]"
  >
    <component :is="icon" class="w-5 h-5" />
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: [Object, Function],
      default: null,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value),
    },
  },
  computed: {
    buttonClasses() {
      return this.iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
    },
  },
}
</script>
