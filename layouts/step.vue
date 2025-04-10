<template>
  <slot />
  <DataBox :style="{ position: 'absolute', top: '20px', right: '20px' }" />
  <a :href="BackDashboard">
    <img src="@/public/Union.svg" alt="logo" class="back" />
  </a>
  <main
    v-if="currentStep"
    :style="{ backgroundImage: `url(../../backgorund/${pageImage})` }"
  >
    <div class="question">
      <p class="step">Step - {{ step }}</p>
      <p class="small-text">{{ currentStep.info }}</p>
      <p class="text">{{ currentStep.question }}</p>
    </div>
    <div class="content">
      <label>
        <input type="radio" name="options" id="option1" value="0" />
        {{ currentStep.answers[0].text }}
      </label>
      <label>
        <input type="radio" name="options" id="option2" value="1" />
        {{ currentStep.answers[1].text }}
      </label>
      <label v-if="valid">
        <input type="radio" name="options" id="option3" value="2" />
        {{ currentStep.answers[2].text }}
      </label>
    </div>
    <button class="button-green" @click="submit">Next step</button>
  </main>
</template>

<script setup>
const route = useRoute();

const step = computed(() => {
  return (route.params.id || "1").charAt(0);
});

const pageImage = computed(() => route.meta?.customImage || "intro.jpg");
const stepStore = useStepStore();
const currentStep = computed(() => stepStore.getCurrentStep);
console.log(currentStep.value);

const valid = ref(false);
watchEffect(() => {
  valid.value = currentStep.value?.answers?.length > 2;
});
let submit;
watchEffect(() => {
  const playerStore = usePlayerStore();
  const router = useRouter();
  const link = computed(() => route.meta?.link || "/training");

  submit = () => {
    const selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      const selectedAnswerIndex = parseInt(selectedOption.value, 10);
      const selectedAnswer = currentStep.value?.answers?.[selectedAnswerIndex];
      playerStore.updatePlayerMorale(selectedAnswer.effects.morale);
      playerStore.updatePlayerSkill(selectedAnswer.effects.skill);

      let nextStep = selectedAnswer.nextStep;
      if (nextStep.startsWith("step")) {
        nextStep = nextStep.slice(4); // Remove the first 4 characters if it's a step
      }

      if (nextStep === "end") {
        router.push({ path: `${link.value}/end/` });
      } else {
        router.push({ path: `${link.value}/step/${nextStep}` });
      }
    } else {
      alert("Please select an option before proceeding.");
    }
  };
});

</script>

<style scoped>
@import url("/assets/css/main.css");

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #f9d5e7;
  background-size: cover;
  background-position: center center;
  padding-top: 10%;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5rem;
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
.question {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 60%;
  min-height: 20%;
  background: #1d6d0a;
  border-radius: 20px;
  padding: 2%;
  flex-direction: column;
}
.question .text {
  font-size: 2rem;
  color: #fffcde;
  font-weight: 700;
}
.question .small-text {
  font-size: 1rem;
  color: #fffcde;
  font-weight: 500;
  margin-bottom: 10px;
}
.question .step {
  font-size: 1.5rem;
  color: #1d6d0a;
  position: absolute;
  top: -40px;
  left: 20px;
  font-weight: 700;
}
label {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  max-width: 25%;
  padding: 20px;
  min-height: 100px;
  background: #fffcde;
  border-radius: 20px;
  transition: border 0.3s ease;
  text-align: center;
  cursor: pointer;
  color: #1d6d0a;
  font-weight: 700;
}

/* Ajouter une bordure verte lorsque le bouton radio est sélectionné */
input[type="radio"] {
  display: none;
}

label:has(input[type="radio"]:checked) {
  border: 3px solid #1d6d0a;
}
</style>
