const Grid = require('./grid.js');

class Game {
  constructor(gridSize){
    this.grid = new Grid(gridSize, true);
  }
  play(){
    return this.grid.compute().render();
    }
}

module.exports = Game;
