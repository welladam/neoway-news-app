<template>
  <div class="relative">
    <input type="text" :placeholder="placeholder" v-model="inputValue" @input="debouncedInput"
      class="w-full p-4 pr-10 text-sm bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-base" />
    <component v-if="icon" :is="icon" class="absolute right-3 top-4 w-5 h-5 text-gray-500" />
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search...',
    },
    icon: {
      type: [Object, Function],
      default: null,
    },
  },
  data() {
    return {
      inputValue: this.value,
    }
  },
  created() {
    this.debouncedInput = debounce(this.handleInput, 500)
  },
  methods: {
    handleInput() {
      this.$emit('input-changed', this.inputValue)
    },
  },
}
</script>
