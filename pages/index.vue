<template>
  <main>
    <h1>Huddle Serious Game</h1>
    <div>
      <a href="/training">Training</a>
      <a href="/game">Game</a>
    </div>
  </main>
</template>

<script setup>
  useHead({
  title: 'Huddle - Serious Game',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})
</script>

<style scoped>
main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 2rem;
    width: 100vw;
    background-color: #f9d5e7; ;
    & h1{
        font-size: 5rem;
        color: #1d6d0a;
        font-family: 'Berlin Sans FB', sans-serif;
        text-align: center;
    }
    & div{
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
        & a{
            display: flex;
            background-color: #1d6d0a;
            align-items: center;
            justify-content: center;
            color: #f9d5e7;
            width: 40%;
            height: 30%;
            border-radius: 20px;
            font-size: 3rem;
            text-decoration: none;
            font-weight: 900;
        }
    }
}
</style>
