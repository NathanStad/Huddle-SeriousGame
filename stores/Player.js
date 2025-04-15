import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    name: '', // Nom du joueur
    level: 0, // Niveau du joueur
    teamPoints: {
      morale: 5, // Points de moral
      skill: 5, // Points de compétence
    },
    choice: {
      choice0: null,
      choice1: null,
      choice2: null,
      choice3: null,
    },
  }),

  actions: {
    createPlayer(name) {
      this.name = name;
      this.level = 0;
      this.teamPoints = {
        morale: 5,
        skill: 5,
      };
      this.choice = {
        choice0: null,
        choice1: null,
        choice2: null,
        choice3: null,
      };
    },

    updatePlayerName(newName) {
      this.name = newName;
    },

    incrementPlayerLevel() {
      this.level += 1;
    },

    updatePlayerMorale(points) {
      this.teamPoints.morale += points;
    },

    updatePlayerSkill(points) {
      this.teamPoints.skill += points;
    },

    updateChoice(choiceKey, value) {
      if (this.choice.hasOwnProperty(choiceKey)) {
        this.choice[choiceKey] = value;
      } else {
        console.error(`Invalid choice key: ${choiceKey}`);
      }
    },
  },

  getters: {
    getPlayerName: (state) => state.name,
    getPlayerLevel: (state) => state.level,
    getPlayerMorale: (state) => state.teamPoints.morale,
    getPlayerSkill: (state) => state.teamPoints.skill,
    getChoices: (state) => state.choice,
    getChoiceByKey: (state) => (key) => state.choice[key],
  },

  // 🔥 Ajout de la persistance ici
  persist: true,
});
