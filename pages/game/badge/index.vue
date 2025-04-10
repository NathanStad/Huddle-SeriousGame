<template></template>
<script setup>
const data = [
  {
    id: 1,
    title: "Inspired Tactician & Natural Leader",
    message:
      "You blended strategy and inspiration. The team is ready to follow you anywhere. You’ve left a strong mark in your debut.",
    badge: "badge-gamechanger.png",
  },
  {
    id: 2,
    title: "Charismatic Coach with Room to Grow",
    message:
      "Your group believes in you, but the play still needs more bite. You’re becoming a trusted leader. Effectiveness will come with time.",
    badge: "badge-leaderinprogress.png",
  },
  {
    id: 3,
    title: "Technical but Distant Coach",
    message:
      "You know how to make your team play. But the emotional bond is fragile. A good tactical match, but trust still needs to grow.",
    badge: "badge-thestrategist.png",
  },
  {
    id: 4,
    title: "A Rough First Test",
    message:
      "A match where neither the team nor your choices stood out. It’s a tough beginning, but every coach goes through it. The most important thing? You stood your ground.",
    badge: "badge-firstlesson.png",
  },
];
const playerStore = usePlayerStore();

const playerMorale = computed(() => playerStore.getPlayerMorale);
const playerSkill = computed(() => playerStore.getPlayerSkill);
console.log(playerMorale.value, playerSkill.value);

const total = computed(() => playerMorale.value + playerSkill.value - 10);
console.log(total.value);

const numBadge = ref(0);
switch (total.value) {
    case 5:
        numBadge.value = 0;
        break;
    case 4:
        numBadge.value = 1;
        break;
    case 3:
        numBadge.value = 2;
        break;
    case 2:
        numBadge.value = 3;
        break;
    default:
        numBadge.value = 0; // Default case if none match
        break;
}
const badge = computed(() => {
  return data[numBadge.value] || null;
});

const stepStore = useStepStore()
// Au lieu de provide
watch(badge, (newStep) => {
  stepStore.setCurrentStep(newStep)
}, { immediate: true })


definePageMeta({
  layout: "badge",
  link: "/game",
});
</script>
