class Game {

  constructor(canvas, numRows, numCols, cellSize, initRoundDelay) {
    this.canvas = canvas;
    this.numRows = numRows;
    this.numCols = numCols,
    this.cellSize = cellSize;
    this.roundDelay = initRoundDelay;
    this.map = null;
    this.grid = null;
    this.intervalID = null;
  }

  get isPaused() {
    return this.intervalID === null;
  }

  loadMap(map) {
    this.map = map;
    const blueprint = map.hasOwnProperty('blueprint')
      ? map.blueprint
      : map.getBlueprint(this.numRows, this.numCols);
    this.clearCanvas();
    this.grid = [...Array(this.numRows)].map(() => Array(this.numCols).fill(null));
    const offsetY = Math.floor(this.numRows / 2) - Math.floor(blueprint.length / 2);
    const offsetX = Math.floor(this.numCols / 2) - Math.floor(blueprint[0].length / 2);
    for (let y = 0; y < this.numRows; y++) {
      for (let x = 0; x < this.numCols; x++) {
        if (blueprint[y - offsetY] && blueprint[y - offsetY][x - offsetX]) {
          this.grid[y][x] = new Cell(blueprint[y - offsetY][x - offsetX] === 'x' ? 0 : 2);
        } else {
          this.grid[y][x] = new Cell(2);
        }
      }
    }
    for (let y = 0; y < this.numRows; y++) {
      for (let x = 0; x < this.numCols; x++) {
        const cell = this.grid[y][x];
        for (let k = y - 1; k <= y + 1; k++) {
          for (let j = x - 1; j <= x + 1; j++) {
            if (
              (j < 0 || j >= this.numCols || k < 0 || k >= this.numRows)
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
    }, this.roundDelay);
  }

  stop() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

  speedUp() {
    if (this.roundDelay > 10) {
      this.roundDelay -= 10;
      if (!this.isPaused) {
        this.stop();
        this.start();
      }
    }
  }

  slowDown() {
    this.roundDelay += 10;
    if (!this.isPaused) {
      this.stop();
      this.start();
    }
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
        context.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);

        // rounded rect
        // const shape = new Path2D();
        // shape.roundRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize, [this.cellSize / 2]);
        // context.fill(shape);
      }
    }
  }

  clearCanvas() {
    this.canvas.getContext('2d')
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
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
