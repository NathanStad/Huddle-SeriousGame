<template>
  <main :style="{ backgroundImage: `url(../backgorund/${pageImage})` }">
    <Cloud :description="description" :description2="description2" />
    <div class="content">
      <DataBox />
      <span>{{ texte }}</span>
    </div>
    <div class="button-green button" @click="submit">Start coaching</div>
    <img src="@/public/LogoHuddleVert.png" alt="logo" />
    <a :href="BackDashboard">
      <img src="@/public/Union.svg" alt="logo" class="back" />
    </a>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const route = useRoute();
const pageImage = computed(
  () => route.meta?.customImage || "intro.jpg"
);
const link = computed(() => route.meta?.link || "/training");

const BackDashboard = ref(link.value + "/dashboard");

const description = ref("Description par défaut");
const description2 = ref("Deuxième description par défaut");
const texte = ref(
  "Two gauges will track your progress. Each decision you make will influence one, the other... or both!"
);

if (link.value === "/game") {
  description.value =
    "Match day. Your first official match since taking over the team. The girls are fired up, but tension fills the locker room. The opposing team is known for their aggression. You feel the pressure rising.";
  description2.value =
    "Your objective today:  - Make key decisions before, during, and after the match  - Manage both emotions and tactics - Define your leadership style";
  texte.value = "Always guided by your two indicators";
} else {
  description.value =
    "Today, you're taking charge of a U17 women's football team in a semi-professional club. It's your first official training session.";
  description2.value =
    "Some players are excited, others are skeptical. The staff is present but silent. They're watching you. Your goal: earn your team's trust, improve their skills, and prove you belong here.";
}
const router = useRouter();
const playerStore = usePlayerStore();
const submit = () => {
  if (playerStore.getPlayerLevel === 0) {
    playerStore.incrementPlayerLevel();
  }
  router.push(link.value + "/step/1");
};
</script>

<style scoped>
@import url("/assets/css/main.css");

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-size: cover;
  background-position: center center;
}

img {
  width: 10%;
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.button-green {
  width: 30%;
  height: 10%;
  font-size: 2rem;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-family: "Berlin Sans FB", sans-serif;
    color: #1d6d0a;
    width: 40%;
    font-size: 1.5rem;
    height: 100%;
    background-color: #fffcde;
    border-radius: 1rem;
    padding: 1%;
  }
}
.back {
  width: 3%;
  position: absolute;
  top: 20px;
  left: 20px;
}

</style>
