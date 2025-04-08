<template>
  <DataBox :style="{ position: 'absolute', top: '20px', right: '20px' }" />
  <a :href="BackDashboard">
    <img src="@/public/Union.svg" alt="logo" class="back" />
  </a>
  <main :style="{ backgroundImage: `url(../backgorund/${customImage})` }">
    <div></div>
    <div class="content">
      <label>
        <input type="checkbox" name="" id="" />
        {{}}
      </label>
      <label>
        <input type="checkbox" name="" id="" />
        {{}}
      </label>
      <label v-if="valid">
        <input type="checkbox" name="" id="" />
        {{}}
      </label>
    </div>
    <button class="button-green">Next step</button>
  </main>
</template>

<script setup>
const route = useRoute();
const link = computed(() => route.meta?.link || "/training");
const valid = ref(false);
const playerStore = usePlayerStore();

const playerLvl = computed(() => playerStore.getPlayerLevel);
const playerSkill = computed(() => playerStore.getPlayerSkill);

switch (playerLvl.value) {
  case :
    break;

  default:
    break;
}
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
.back {
  width: 3%;
  position: absolute;
  top: 20px;
  left: 20px;
}
.button-green {
  width: 30%;
  height: 15%;
}
</style>
