<template>
  <div class="flex w-full justify-center gap-4 xl:gap-36 text-sm text-gray-500">
    <div class="flex items-center gap-2">
      <CalendarIcon class="w-6 h-6 text-gray-500" />
      <span>{{ formattedDate }}</span>
    </div>
    <div v-if="author" class="flex items-center gap-2">
      <UserIcon class="w-6 h-6 text-gray-500" />
      <span>{{ author }}</span>
    </div>
    <div class="flex items-center gap-2">
      <NewspaperIcon class="w-6 h-6 text-gray-500" />
      <span>{{ source }}</span>
    </div>
  </div>
</template>

<script>
import { NewspaperIcon, UserIcon, CalendarIcon } from '@heroicons/vue/24/outline'
import { formatDate } from '@/helpers/dateHelper'

export default {
  components: {
    NewspaperIcon,
    UserIcon,
    CalendarIcon,
  },
  props: {
    date: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: '',
    },
  },
  computed: {
    formattedDate() {
      return formatDate(this.date)
    },
  },
}
</script>
