<template>

  <DataBox :style="{ position:'absolute', top: '20px', right: '20px' }" />

  <Point 
    numero="Intro" 
    locked="true" 
    link="game/intro" 
    :style="{ position:'absolute', bottom: '15%', left: '10%' }" 
  />
  <Point 
    numero="1" 
    :locked="getLockStatus(1)" 
    link="game/step/1" 
    :style="{ position:'absolute', top: '40%', left: '25%' }" 
  />
  <Point 
    numero="2" 
    :locked="getLockStatus(2)" 
    :link="`game/step/${link1}`" 
    :style="{ position:'absolute', bottom: '30%', left: '40%' }" 
  />
  <Point 
    numero="3" 
    :locked="getLockStatus(3)" 
    :link="`game/step/${link2}`" 
    :style="{ position:'absolute', top: '30%', right: '40%' }" 
  />
  <Point 
    numero="4" 
    :locked="getLockStatus(4)" 
    link="game/end/" 
    :style="{ position:'absolute', bottom: '40%', right: '25%' }" 
  />

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
const playerChoice = computed(() => playerStore.getChoices);

console.log(playerChoice.value);
const link1 = ref();
const link2 = ref();
if (playerChoice.value['choice1']) {
  link1.value = playerChoice.value['choice1'].nextStep.substring(4);
  console.log(link1.value);
  
}
if (playerChoice.value['choice2']) {
  link2.value = playerChoice.value['choice2'].nextStep.substring(4);
}

function getLockStatus(numero) {
  if (numero === playerLevel.value) {
  return "true";
  } else if (numero < playerLevel.value) {
  return "done";
  } else {
  return "false";
  }
}
</script>
<style scoped>

</style>