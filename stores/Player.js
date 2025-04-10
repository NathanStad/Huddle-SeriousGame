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
      choice1: null, // Valeur du choix 1
      choice2: null, // Valeur du choix 2
      choice3: null, // Valeur du choix 3
    },
  }),

  actions: {
    // Créer un joueur
    createPlayer(name) {
      this.name = name;
      this.level = 0;
      this.teamPoints = {
        morale: 5,
        skill: 5,
      };
      this.choice = {
        choice1: null,
        choice2: null,
        choice3: null,
      };
    },

    // Mettre à jour le nom du joueur
    updatePlayerName(newName) {
      this.name = newName;
    },

    // Incrémenter le niveau du joueur
    incrementPlayerLevel() {
      this.level += 1;
    },

    // Mettre à jour les points de moral
    updatePlayerMorale(points) {
      this.teamPoints.morale += points;
    },

    // Mettre à jour les points de compétence
    updatePlayerSkill(points) {
      this.teamPoints.skill += points;
    },

    // Mettre à jour un choix spécifique
    updateChoice(choiceKey, value) {
      if (this.choice.hasOwnProperty(choiceKey)) {
        this.choice[choiceKey] = value;
      } else {
        console.error(`Invalid choice key: ${choiceKey}`);
      }
    },
  },

  getters: {
    // Récupérer le nom du joueur
    getPlayerName: (state) => state.name,

    // Récupérer le niveau du joueur
    getPlayerLevel: (state) => state.level,

    // Récupérer les points de moral
    getPlayerMorale: (state) => state.teamPoints.morale,

    // Récupérer les points de compétence
    getPlayerSkill: (state) => state.teamPoints.skill,

    // Récupérer les choix
    getChoices: (state) => state.choice,
  },
});