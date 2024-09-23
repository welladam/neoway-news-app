<template>
    <footer
        class="flex flex-col gap-2 justify-center items-center py-5 bg-gray-100 border-b-2 px-10 md:px-20 lg:px-40 xl:px-60">
        <span class="text-xl font-heading">Made by Wellington Adam</span>
        <a href="http://github.com/welladam" target="_blank">
            <img :src="GithubIcon" class="h-8 w-8" />
        </a>
    </footer>
</template>

<script setup>
import GithubIcon from '@/assets/github-icon.png'
</script>

<script>

export default {
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>