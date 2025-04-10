<template>
  <div class="stats-container background-green">
    <Gauge label="Team morale" :value="playerMorale" icon="⭐" />
    <Gauge label="Team skill level" :value="playerSkill" icon="⚡" />
  </div>
</template>

<script setup>
const playerStore = usePlayerStore();

const playerMorale = computed(() => playerStore.getPlayerMorale);
const playerSkill = computed(() => playerStore.getPlayerSkill);
</script>

<style scoped>
@import url("/assets/css/main.css");

.stats-container {
  padding: 1rem;
  border-radius: 1rem;
  width: 300px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
