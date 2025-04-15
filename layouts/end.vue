<template>
  <main :style="{ backgroundImage: `url(../../backgorund/${pageImage})` }">
    <div id="content">
      <p>{{ pageSubtitle }}</p>
      <h2>{{ pageTitle }}</h2>
      <DataBox style="width: 60%; height: 40%;" />
    </div>
    <button class="button-green" @click="submit">Uncover your coach identity</button>
  </main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const pageSubtitle = computed(
  () => route.meta?.customSubtitle || "Rapid Progress"
);
const link = computed(() => route.meta?.link || "/training");
const pageTitle = computed(() => route.meta?.customTitle || "The team has embraced you. You’re seen as effective and structured !");
const pageImage = computed(
  () => route.meta?.customImage || "Mots-clés par défaut"
);
const submit =() => {
    router.push({ path: `${link.value}/badge/` });
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
  width: 100vw;
  height: 100dvh;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
}
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 50%;
  gap: 2rem;
  border-radius: 20px;
  background: #FFFCDE;
}
.button-green {
  margin: 0 !important ;
  width: 40%;
  height: 15%;
  font-size: 3rem;
}
h2{
    font-size: 2rem;
    color: #1d6d0a;
    font-weight: 900;
    text-align: center;
    width: 80%;
}
p{
    font-size: 1rem;
    color: #1d6d0a;
    font-weight: 500;
    text-align: center;
    width: 60%;
}

</style>
