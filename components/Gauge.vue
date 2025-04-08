<template>
    <div class="gauge">
      <div class="label">{{ props.label }}</div>
      <div class="bar">
        <div class="fill" :style="{ width: fillWidth + '%' }"></div>
        <div class="icon" :style="{ left: fillWidth + '%' }">{{ props.icon }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    label: String,
    value: String,
    icon: String
  })
  
  const fillWidth = computed(() => (props.value / 10) * 100)
  </script>
  
  <style scoped>
  @import url("/assets/css/main.css");

  .gauge {
    margin-bottom: 0.5rem;
  }
  .label {
    color: white;
    font-weight: bold;
  }
  .bar {
    position: relative;
    height: 16px;
    background: #eee;
    border-radius: 8px;
  }
  .fill {
    background: yellow;
    height: 100%;
    border-radius: 8px 0 0 8px;
  }
  .icon {
    position: absolute;
    top: -10px;
    transform: translateX(-50%);
    font-size: 25px;
  }
  </style>
  