<template></template>
<script setup>
const data = [
  {
    id: 1,
    title: "Inspiring & Strategic Coach",
    message: "You earned the team’s trust and raised their game. You inspire and lead. The pitch is yours, Coach.",
    badge: "badge-risingleader.png"
  },
  {
    id: 2,
    title: "Charismatic Coach in Progress",
    message: "The team loves you, but the play needs more structure. You’re a leader in the making—just a bit more intensity to go far.",
    badge: "badge-gamewhisperer.png"
  },
  {
    id: 3,
    title: "Efficient but Tough Coach",
    message: "You get results—but at what cost? You know how to improve a team, now build the connection to make it last.",
    badge: "badge-thetactician.png"
  },
  {
    id: 4,
    title: "Hesitant Start, Potential Unlocked",
    message: "A rough start. Neither trust nor results are here—yet. But every great coach starts somewhere. Next session, fresh start.",
    badge: "badge-inprogress.png"
  }
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
  link: "/training",
});
</script>