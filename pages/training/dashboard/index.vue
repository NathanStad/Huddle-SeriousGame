<template>

    <DataBox :style="{ position:'absolute', top: '20px', right: '20px' }" />
  
    <Point numero="Intro" locked="true" link="training/intro" :style="{ position:'absolute', top: '35%', left: '10%' }" />
    <Point numero="1" locked="false" link="" :style="{ position:'absolute', top: '20%', left: '31%' }" />
    <Point numero="2" locked="false" link="" :style="{ position:'absolute', bottom: '55%', left: '50%' }"/>
    <Point numero="3" locked="false" link="" :style="{ position:'absolute', top: '10%', right: '40%' }" />
    <Point numero="4" locked="false" link="" :style="{ position:'absolute', bottom: '35%', right: '20%' }" />
  
  </template>
  
  <script setup>
  
  definePageMeta({
    layout: "dashboard",
    customTitle: "Coach in the Making",
    customImage: "dashboard-training.png",
    link: "/training",
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