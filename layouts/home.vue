<template>
  <main>
    <img :src="pageImage" alt="" class="decoration" />
    <div id="content">
      <img src="@/public/LogoHuddleVert.png" alt="logo" />
      <h1>{{ pageTitle }}</h1>
      <a :href="link + '/start'" class="button-green button">LET’S GO</a>
      <p>Find your style, build trust, and help your team grow.</p>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();

// Accès à une meta personnalisée
const pageTitle = computed(() => route.meta?.customTitle || "Titre par défaut");
const pageImage = computed(
  () => route.meta?.customImage || "9-removebg-preview.png"
);
const link = computed(() => route.meta?.link);
</script>

<style scoped>
@import url("/assets/css/main.css");

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9d5e7;
}
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 60%;
  height: 60%;
  color: #1d6d0a;
}
#content img {
  width: 20%;
  height: auto;
}
.decoration {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
body {
  margin: 0;
}
</style>
