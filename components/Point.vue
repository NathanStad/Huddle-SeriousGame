<template>
  <div @click="submit" :class="['background-green', 'point', { 'locked-point': locked === 'false', 'done-point': locked === 'done'}]">
    <p>{{ numero }}</p>
    <div id="data-info" v-if="locked == 'done' && data">
      <p>⭐ {{ data.morale }} Morale</p>
      <p>⚡ {{ data.skill }} Skill level</p>
    </div>
    <div class="dark" v-if="locked == 'false'"></div>
    <svg v-if="locked == 'false'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#f9d5e7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  numero: String,
  locked: String,
  link: String
});

const router = useRouter();

const playerStore = usePlayerStore();

const data = ref(playerStore.getChoiceByKey(`choice${props.numero}`));

const submit = () => {
  
  if (props.locked == "true") {
    router.push({ path: `/${props.link}` });
  }
};

</script>

<style scoped>
@import url("/assets/css/main.css");

.point {
  border-radius: 50px;
  position: relative;
  padding: 30px 38px;
  width: fit-content;
  height: fit-content;
  background-color: #1d6d0a; /* Default background color */
  cursor: pointer;
}
.point.locked-point{
  cursor:not-allowed !important;
}

.done-point{
  cursor: not-allowed;
}
.point p {
  color: #f9d5e7;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  font-family: 'Berlin Sans FB', sans-serif;
}

#data-info {
  display: flex;
  padding: 10px;
  background-color: #F9D5E7;
  justify-content: center;
  align-items:flex-start;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  width: 150%;
  & p {
    font-size: 0.8rem;
    color: #1D6D0A;
  }
}

.point svg {
  position: absolute;
  bottom: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  z-index: 3;
}

/* Style for locked points */
.dark {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1e1e1e;
  opacity: 0.7;
  border-radius: 50px;

}
</style>