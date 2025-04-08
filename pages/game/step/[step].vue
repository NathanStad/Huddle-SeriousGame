<template>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
definePageMeta({
  layout: "step",
  customImage: "intro-game.jpg",
  link: "/game",
});
const route = useRoute()
const router = useRouter()

// Convertit le paramètre de l'URL en entier
const step = computed(() => parseInt(route.params.step))
</script>

<style scopeds>
    @import url("/assets/css/main.css");

</style>