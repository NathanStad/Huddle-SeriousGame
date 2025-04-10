<template>
  <div class="cloud">
    <h1>Welcome, <br> Coach {{ playerName }} !</h1>
    <p>
      {{ props.description }}
    </p>
    <p>
      {{ props.description2 }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  description: String,
  description2: String
});

const playerStore = usePlayerStore();
const playerName = computed(() => playerStore.getPlayerName);
</script>

<style scoped>
.cloud {
  background: #fffcde;
  padding: 2rem;
  max-width: 600px;
  position: relative;
  border-radius: 100px;
  text-align: center;
  z-index: 1;
  font-family: sans-serif;
  margin-top: 5% ;
}

.cloud::before,
.cloud::after {
  content: "";
  position: absolute;
  background: #fffcde;
  border-radius: 50%;
  z-index: -1;
}

/* Les bulles latérales */
.cloud::before {
  width: 200px;
  height: 200px;
  left: 100px;
  top: -20px;
}

.cloud::after {
  width: 160px;
  height: 160px;
  right: 100px;
  top: 10px;
}

/* Bulles supplémentaires sur le haut via box-shadow */
.cloud::before,
.cloud::after {
  box-shadow: -180px 40px 0 0 #fffcde, -90px 0 0 0 #fffcde, 0 -50px 0 0 #fffcde,
    90px 0 0 0 #fffcde, 180px 40px 0 0 #fffcde;
}

h1 {
  color: #1d6d0a;
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
}

p {
  color: #1d6d0a;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.5rem 0;
}
</style>
