<template>
      <slot />
  <main>
    <img src="@/public/LogoHuddleVert.png" alt="logo" class="back" />
    <h1>{{ badge.title }}</h1>
    <h2>{{badge.message}}</h2>
    <div class="background-green">
        <img src="@/public/terrain.png" alt="Terrain" />
        <img :src="'../../badge/'+badge.badge" alt="Badge" id="badge" />
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const stepStore = useStepStore();
const badge = computed(() => stepStore.getCurrentStep);
const link = computed(() => route.meta?.link || "/training");
onMounted(() => {
    setTimeout(() => {
        window.location.href = link.value;
    }, 20000);
});
console.log(badge.value);

</script>

<style scoped>
@import url("/assets/css/main.css");

main {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #F9D5E7;
  position: relative;
}
main > img{
    width: 10%;
}
h1{
    font-size: 3rem;
    color: #1D6D0A;
    font-weight: 700;
    text-align: center;
    margin: 0;
}
h2{
    font-size: 1.5rem;
    color: #1D6D0A;
    font-weight: 700;
    text-align: center;
    width: 70%;
}
.background-green{
    padding: 20px;
    position: relative;
    border-radius: 20px;
    & > img:first-of-type{
        width: 900px;
    }
}
#badge{
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -51%);
    width: 30%;
}
</style>
