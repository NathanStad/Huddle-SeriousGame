<template>
  <main>
    <div id="content">
      <h2>Ready to coach ?</h2>
      <p>Before we hit the field, we need one important detail…</p>
    </div>
    <div class="background-green background">
      <p>What’s your name, Coach?</p>
      <input type="text" placeholder="Last name" v-model="lastName" />
      <button class="button" @click="submit" :disabled="isButtonDisabled">Start the Game</button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const playerStore = usePlayerStore();
const route = useRouter();
const link = computed(() => route.meta?.link || "/training");

const lastName = ref("");

const isButtonDisabled = computed(() => {
  return !lastName.value || lastName.value.length < 4;
});

const submit = () => {
  if (lastName.value) {
    // Créer le joueur dans le store Pinia
    playerStore.createPlayer(lastName.value);

    // Rediriger vers la page dashboard
    route.push(link.value+"/dashboard");
  } else {
    alert("Please enter your last name.");
  }
};

useHead({
  title: 'Huddle - Serious Game',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})
</script>
  
  <style scoped>
  @import url("/assets/css/main.css");
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100dvh;
    background-color: #f9d5e7;
  }
  #content {
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    align-items: center;
    justify-content: space-around;
    height: 10%;
    width: 80%;
  }
  #content h2 {
    font-size: 3rem;
    font-family: 'Berlin Sans FB', sans-serif;
    color: #1d6d0a;
  }
  #content p {
    font-size: 1.5rem;
    color: #1d6d0a;
    font-weight: 600;
  }
  .background {
    display: flex;
    padding: 5%;
    width: 80%;
    height: 70%;
    border-radius: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #f9d5e7;
  }
  .background p {
    font-size: 5rem;
    font-family: 'Berlin Sans FB', sans-serif;
  }
  .background input {
      width: 75%;
      height: 20%;
      background: rgba(255, 255, 255,0.15);
      border: 5px solid #f9d5e7;
      color: #f9d5e7 !important;
      font-size: 2rem ;
      font-weight: 900;
      padding: 20px;
      border-radius: 20px;
  }
  .background input::placeholder {
    opacity: 0.5;
    color: #f9d5e7;
  }
  .background button {
      width: 60%;
      height: 20%;
      background: #f9d5e7;
      border: none;
      color: #1d6d0a;
      font-size: 3rem;
      font-weight: 900;
      padding: 20px;
      border-radius: 20px;
      font-family: 'Berlin Sans FB', sans-serif;
      cursor: pointer;
  }
  .background button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
  }
  </style>