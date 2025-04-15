<template>
  <main :style="{ backgroundImage: `url(../../backgorund/${pageImage})` }">
    <div>{{ pageTitle }}</div>
    <img src="@/assets/images/LogoHuddleVert.png" alt="logo" />
    <slot />
  </main>
</template>

<script setup>
const route = useRoute();
const pageTitle = computed(() => route.meta?.customTitle || "Titre par défaut");
const pageImage = computed(
  () => route.meta?.customImage || "Mots-clés par défaut"
);
useHead({
  title: 'Huddle - Serious Game',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})
</script>

<style scoped>
@import url("/assets/css/main.css");

main{
    width: 100vw;
    height: 100dvh;
    background-size: cover;
    background-position: center center;
}
div{
    position: absolute;
    top: 20px;
    left: 20px;
    min-width: 25%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #1d6d0a;
    font-family: 'Berlin Sans FB', sans-serif;
    background-color: white;
    border-radius: 30px ;
    padding: 0 20px;
}
img{
    width: 10%;
    position: absolute;
    bottom: 20px;
    left: 20px;
}
</style>
