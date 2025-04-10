<template>
  {{ route.params.step }}
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

// Convertit le paramètre de l'URL en entier
// Convert URL parameter to integer
const step = computed(() => {
  const paramStep = route.params.id || "1";
  
  return paramStep.startsWith('step') ? paramStep : `step${paramStep}`;
});


const steps = {
  step1: {
    info: "You're standing in front of your team. 10 minutes before heading onto the pitch.",
    question: "What do you tell them?",
    answers: [
      { text: "“Today, we play our game. Make them run, and enjoy yourselves.”", nextStep: "step2a", effects: { morale: 2, skill: 0 } },
      { text: "“Their defense plays high. We’ll hit them on the counter right away.”", nextStep: "step2b", effects: { morale: 0, skill: 2 } },
      { text: "“I want you to stay calm. Whatever they say, stay focused.”", nextStep: "step2c", effects: { morale: 1, skill: 1 } },
    ],
  },
  step2a: {
    info: "During warm-up, two starters seem to be going through the motions.",
    question: "What do you do?",
    answers: [
      { text: "Call over the bench: “They’re not fully into it. Be ready to step in.”", nextStep: "step3a1", effects: { morale: -1, skill: 1 } },
      { text: "Motivate the two players quietly: “Show me I was right to trust you.”", nextStep: "step3a2", effects: { morale: 1, skill: 0 } },
    ],
  },
  step2b: {
    info: 'A player interrupts: “Coach, we can’t change everything today…”',
    question: "What do you do?",
    answers: [
      { text: "“That’s exactly why we’re doing it. To shake things up.”", nextStep: "step3b1", effects: { morale: 0, skill: 1 } },
      { text: "“Alright. We’ll stick to our usual system. But I want intensity.”", nextStep: "step3b2", effects: { morale: 1, skill: -1 } },
    ],
  },
  step2c: {
    info: 'A substitute interrupts with a joke about “women’s coaching.”',
    question: "How do you respond?",
    answers: [
      { text: "“Save the jokes for when you're on the pitch.”", nextStep: "step3c1", effects: { morale: -1, skill: 1 } },
      { text: "“Jokes are for when we’re leading the score.”", nextStep: "step3c2", effects: { morale: 1, skill: 0 } },
    ],
  },
  step3a1: {
    info: "You decide to change your starting lineup. One benched player refuses to look at you.",
    question: "What do you do?",
    answers: [
      { text: "Ignore it: “We’ll talk later.”", nextStep: "end", effects: { morale: -1, skill: 2 } },
      { text: "Explain: “It’s nothing personal. It’s a tactical decision.”", nextStep: "end", effects: { morale: 2, skill: 1 } },
    ],
  },
  step3a2: {
    info: "The players step up, but your goalkeeper misses every ball.",
    question: "What do you do?",
    answers: [
      { text: "Suggest a focused drill.", nextStep: "end", effects: { morale: 1, skill: 1 } },
      { text: "Shout: “What’s wrong? You’re not in your game or what?”", nextStep: "end", effects: { morale: -1, skill: 1 } },
    ],
  },
  step3b1: {
    info: "Team leads 1–0, but two players are confused about their roles.",
    question: "What do you do?",
    answers: [
      { text: "Calmly explain with a diagram.", nextStep: "end", effects: { morale: 1, skill: 1 } },
      { text: "Say: “It’s not complicated. Just do what we practiced.”", nextStep: "end", effects: { morale: -1, skill: 0 } },
    ],
  },
  step3b2: {
    info: 'Staff whispers: “Be more ambitious.”',
    question: "What’s your call?",
    answers: [
      { text: "Sub in two attackers.", nextStep: "end", effects: { morale: 0, skill: 2 } },
      { text: "Change nothing: “Let’s secure this point today.”", nextStep: "end", effects: { morale: 1, skill: 0 } },
    ],
  },
  step3c1: {
    info: "The substitute never plays and refuses to greet you post-match.",
    question: "What do you do?",
    answers: [
      { text: "Say: “We’ll talk Monday.”", nextStep: "end", effects: { morale: -1, skill: 1 } },
      { text: "Debrief with her in front of the team.", nextStep: "end", effects: { morale: 1, skill: 1 } },
    ],
  },
  step3c2: {
    info: "Good vibes, but the team loses 2–0. Post-match press conference.",
    question: "How do you respond?",
    answers: [
      { text: "Own it: “It was a test match.”", nextStep: "end", effects: { morale: 0, skill: 1 } },
      { text: "Downplay: “That’s football.”", nextStep: "end", effects: { morale: 1, skill: -1 } },
    ],
  },
};

// Get current step data from steps object
const currentStep = computed(() => {
  return steps[step.value] || null;
});

const stepStore = useStepStore()
// Au lieu de provide
watch(currentStep, (newStep) => {
  stepStore.setCurrentStep(newStep)
}, { immediate: true })

definePageMeta({
  layout: "step",
  customImage: "match.jpg",
  link: "/game",
});

</script>

