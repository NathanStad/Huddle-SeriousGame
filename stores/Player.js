// stores/player.js
import { defineStore } from 'pinia'
import Player from '@/models/Player'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    player: null
  }),

  actions: {
    setPlayer(name) {
      this.player = new Player(name)
    },
    addPoints(points) {
      if (this.player) {
        this.player.addScore(points)
      }
    }
  },

  persist: true // garde le joueur entre les sessions
})
