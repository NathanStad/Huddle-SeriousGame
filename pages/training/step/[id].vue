<template>
</template>

<script setup>

const route = useRoute()
const router = useRouter()

// Convertit le paramètre de l'URL en entier
// Convert URL parameter to integer
const step = computed(() => {
  const paramStep = route.params.id || "1";
  
  return paramStep.startsWith('step') ? paramStep : `step${paramStep}`;
});

const playerStore = usePlayerStore();
const playerName = computed(() => playerStore.getPlayerName);
const steps = {
  step1: {
    info: "The team is gathered on the field. They're watching you.",
    question: "How do you introduce your first session?",
    answers: [
      { text: "“Hi girls! Today, we’re going to get to know each other and have fun. Serious stuff comes later.”", nextStep: "step2a", effects: { morale: 2, skill: 0 } },
      { text: `“Welcome. My name is ${playerName.value}, here’s the training schedule for the week.”`, nextStep: "step2b", effects: { morale: -1, skill: 2 } },
      { text: "“You’ve got 10 minutes for free warm-up. I’ll be observing.”", nextStep: "step2c", effects: { morale: 0, skill: 0 } },
    ],
  },
  step2a: {
    info: "A player comes to you after your dynamic intro: “Coach, having fun is great, but we want to improve too. Will we be working seriously?”",
    question: "How do you respond?",
    answers: [
      { text: "“Of course. Fun is just the beginning. Hard work starts right after.”", nextStep: "step3a1", effects: { morale: 1, skill: 1 } },
      { text: "“If you want to work hard, prove it. We’ll see who really wants to progress.”", nextStep: "step3a2", effects: { morale: -1, skill: 1 } },
    ],
  },
  step2b: {
    info: 'A player, arms crossed, comments loudly: “Another coach thinking she’ll change our game in one week…”',
    question: "How do you respond?",
    answers: [
      { text: "“I’m not here to change you. I’m here to make you shine.”", nextStep: "step3b1", effects: { morale: 1, skill: 0 } },
      { text: "“If you don’t want to improve, you’re welcome to sit on the bench.”", nextStep: "step3b2", effects: { morale: -2, skill: 1 } },
    ],
  },
  step2c: {
    info: "You’re observing warm-ups. Two players giggle while looking at you.",
    question: "How do you react?",
    answers: [
      { text: "“Everything okay over there? Sharing a warm-up tip?”", nextStep: "step3c1", effects: { morale: 1, skill: 0 } },
      { text: "You ignore them and keep observing.", nextStep: "step3c2", effects: { morale: -1, skill: 0 } },
    ],
  },
  step3a1: {
    info: "You now need to choose the first exercise of the session.",
    question: "What exercise do you start with?",
    answers: [
      { text: "Positional play with short passes.", nextStep: "end", effects: { morale: 1, skill: 1 } },
      { text: "1v1 duels to work on intensity.", nextStep: "end", effects: { morale: 0, skill: 2 } },
      { text: "Free play with no instructions.", nextStep: "end", effects: { morale: 2, skill: 0 } },
    ],
  },
  step3a2: {
    info: "You organize a contest: the fastest group to complete the technical circuit wins. A player falls and gets slightly injured.",
    question: "How do you handle it?",
    answers: [
      { text: "Stop everything and check on her.", nextStep: "end", effects: { morale: 1, skill: -1 } },
      { text: "Ask the group to continue while you tend to her.", nextStep: "end", effects: { morale: 0, skill: 1 } },
      { text: "Let a staff sub handle her while you continue.", nextStep: "end", effects: { morale: -1, skill: 2 } },
    ],
  },
  step3b1: {
    info: 'During a water break, the player says: “Sorry, Coach. I’ve had bad experiences before. I really want to improve.”',
    question: "How do you respond?",
    answers: [
      { text: "“Tell me what you’ve been through. I want to understand.”", nextStep: "end", effects: { morale: 2, skill: 0 } },
      { text: "“Show me tomorrow what you want to work on most.”", nextStep: "end", effects: { morale: 1, skill: 1 } },
    ],
  },
  step3b2: {
    info: "The player complains but gives it her all—and outperforms the others.",
    question: "How do you react?",
    answers: [
      { text: "You publicly praise her in front of the team.", nextStep: "end", effects: { morale: 1, skill: 2 } },
      { text: "You quietly praise her at the end.", nextStep: "end", effects: { morale: 0, skill: 1 } },
      { text: "You say nothing, to avoid boosting her ego.", nextStep: "end", effects: { morale: -1, skill: 2 } },
    ],
  },
  step3c1: {
    info: 'One of the players responds: “We were just wondering if you really know how to coach, or if you\'re here for the image.”',
    question: "How do you reply?",
    answers: [
      { text: "“I worked hard to be here. But I prefer my actions to speak for me.”", nextStep: "end", effects: { morale: 1, skill: 1 } },
      { text: "“Ask me a real tactical question, and you’ll see.”", nextStep: "end", effects: { morale: 0, skill: 2 } },
    ],
  },
  step3c2: {
    info: "The players keep mocking you. Tension rises. The captain approaches and says: “Coach, some of them are testing you. Want me to step in?”",
    question: "What’s your decision?",
    answers: [
      { text: "“Thanks. But let me handle it my way.”", nextStep: "end", effects: { morale: 1, skill: 1 } },
      { text: "“Go ahead, remind the group of the respect rules.”", nextStep: "end", effects: { morale: 0, skill: 2 } },
    ],
  },
};

// Get current step data from steps object
const currentStep = computed(() => {
  return steps[step.value] || null;
});
console.log(currentStep.value);
const stepStore = useStepStore()
// Au lieu de provide
watch(currentStep, (newStep) => {
  stepStore.setCurrentStep(newStep)
}, { immediate: true })

definePageMeta({
  layout: "step",
  customImage: "intro.jpg",
  link: "/training",
});
</script>

<style scopeds>
    @import url("/assets/css/main.css");

</style>