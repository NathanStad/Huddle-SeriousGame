<template>

  <DataBox :style="{ position:'absolute', top: '20px', right: '20px' }" />

  <Point numero="Intro" locked="true" link="intro" :style="{ position:'absolute', bottom: '15%', left: '10%' }" />
  <Point numero="1" locked="false" link="" :style="{ position:'absolute', top: '40%', left: '25%' }" />
  <Point numero="2" locked="false" link="" :style="{ position:'absolute', bottom: '30%', left: '40%' }"/>
  <Point numero="3" locked="false" link="" :style="{ position:'absolute', top: '30%', right: '40%' }" />
  <Point numero="4" locked="false" link="" :style="{ position:'absolute', bottom: '40%', right: '25%' }" />

</template>

<script setup>

definePageMeta({
  layout: "dashboard",
  customTitle: "Game Day",
  customImage: "Start-match.png",
  link: "/game",
});

const playerStore = usePlayerStore();

// Récupérer les données du joueur via les getters
const playerName = computed(() => playerStore.getPlayerName);
const playerLevel = computed(() => playerStore.getPlayerLevel);
const playerMorale = computed(() => playerStore.getPlayerMorale);
const playerSkill = computed(() => playerStore.getPlayerSkill);
</script>
<style scoped>

</style>