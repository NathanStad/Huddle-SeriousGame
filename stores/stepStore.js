// stores/stepStore.js
import { defineStore } from 'pinia'

export const useStepStore = defineStore('step', {
  state: () => ({
    currentStepData: null
  }),
  actions: {
    setCurrentStep(step) {
      this.currentStepData = step
    }
  },
  getters: {
    getCurrentStep: (state) => state.currentStepData
  }
})