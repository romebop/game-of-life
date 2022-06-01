document.addEventListener('DOMContentLoaded', () => {
  
  const cellSize = 5;
  const stepDuration = 10;
  const chanceOfLife = 0.1;

  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  document.body.style.height = `${containerHeight}px`;
  document.body.style.width = `${containerWidth}px`;

  const numRows = Math.floor(containerHeight / cellSize);
  const numCols = Math.floor(containerWidth / cellSize);

  const canvas = document.createElement('canvas');
  canvas.width = containerWidth;
  canvas.height = containerHeight;
  document.body.append(canvas);

  const game = new Game(canvas, numRows, numCols, cellSize, stepDuration, chanceOfLife);
  game.start();

  window.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      if (typeof(game.intervalID) === 'number') {
        game.stop();
      } else {
        game.start();
      }
    }
    if (e.code === 'Equal') {
      game.speedUp();
    }
    if (e.code === 'Minus') {
      game.slowDown();
    }
  });
});

class Game {

  constructor(canvas, numRows, numCols, cellSize, stepDuration, chanceOfLife) {
    this.canvas = canvas;
    this.numRows = numRows;
    this.numCols = numCols,
    this.cellSize = cellSize;
    this.stepDuration = stepDuration;
    this.intervalID = null;

    // init grid
    this.grid = [...Array(numRows)].map(() => Array(numCols).fill(null));
    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        this.grid[y][x] = new Cell(Math.random() < chanceOfLife ? 0 : 2);
      }
    }
    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        const cell = this.grid[y][x];
        for (let k = y - 1; k <= y + 1; k++) {
          for (let j = x - 1; j <= x + 1; j++) {
            if (
              (j < 0 || j >= numCols || k < 0 || k >= numRows)
              || (j === x && k === y)
            ) continue;
            const neighbor = this.grid[k][j];
            cell.neighbors.push(neighbor);
          }
        }
      }
    }

    this.paintCanvas();
  }

  start() {
    this.intervalID = setInterval(() => {
      this.getNextState();
      this.paintCanvas();
    }, this.stepDuration);
  }

  stop() {
    clearInterval(this.intervalID);
    // this.paintCanvas();
    this.intervalID = null;
  }

  speedUp() {
    if (this.stepDuration > 10) {
      this.stepDuration -= 10;
    }
    this.stop();
    this.start();
  }

  slowDown() {
    this.stepDuration += 10;
    this.stop();
    this.start();
  }

  getNextState() {
    for (let y = 0; y < this.numRows; y++) {
      for (let x = 0; x < this.numCols; x++) { 
        const cell = this.grid[y][x];
        const numAliveNeighbors = cell.neighbors.reduce((a, c) => (
          a + +(c.state === 0)
        ), 0);
        if (numAliveNeighbors === 2) {
          cell.nextState = (cell.state === 1) ? 2 : cell.state;
        } else if (numAliveNeighbors === 3) {
          cell.nextState = 0;
        } else {
          cell.nextState = (cell.state === 0) ? 1 : 2;
        }
      }
    }
    for (let y = 0; y < this.numRows; y++) {
      for (let x = 0; x < this.numCols; x++) {
        const cell = this.grid[y][x];
        cell.prevState = cell.state;
        cell.state = cell.nextState;
        cell.nextState = null;
      }
    }
  }

  paintCanvas() {
    const context = this.canvas.getContext('2d');
    for (let y = 0; y < this.numRows; y++) {
      for (let x = 0; x < this.numCols; x++) { 
        const cell = this.grid[y][x];
        if (cell.state === cell.prevState) continue;
        if (cell.state === 0) context.fillStyle = '#0095ff';
        if (cell.state === 1) context.fillStyle = '#bee3fe';
        if (cell.state === 2) context.fillStyle = '#fff';
                
        // rounded rect
        // const shape = new Path2D();
        // shape.roundRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize, [this.cellSize / 2]);
        // context.fill(shape);
        
        // rect
        context.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
      }
    }
  }

}

class Cell {

  constructor(state) {
    this.state = state;
    this.prevState = 2;
    this.nextState = null;
    this.neighbors = [];
  }

}