<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script>
useHead({
  title: 'Huddle - Serious Game',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})
</script>
<style>
  @import url('/assets/css/main.css');
  body {
    overflow: visible hidden;
  }

</style>