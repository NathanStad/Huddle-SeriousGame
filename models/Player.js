// models/Player.js
export default class Player {
    constructor(name, score = 0) {
      this.name = name
      this.score = score
    }
  
    addScore(points) {
      this.score += points
    }
  }
  