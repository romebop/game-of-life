const maps = [
  {
    name: 'random',
    params: {
      chanceOfLife: 0.1,
    },
    getLayout: function(numRows, numCols) {
      const layout = [...Array(numRows)].map(() => Array(numCols).fill(null));
      for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
          layout[y][x] = (Math.random() < this.params.chanceOfLife) ? 'x' : 'o';
        }
      }
      return layout;
    },
  },
  {
    name: 'gosper',
    layout: [
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o'],
      ['o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ],
  },
  {
    name: 'ocean',
    getLayout: (numRows, numCols) => {
      const layout = [...Array(numRows)].map(() => Array(numCols).fill(null));
      for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
          layout[y][x] = (y === Math.floor(numRows / 2)) ? 'x' : 'o';
        }
      }
      return layout;
    },
  },
];

document.addEventListener('DOMContentLoaded', () => {
  
  const cellSize = 5;
  const initRoundDelay = 20;

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


  const game = new Game(canvas, numRows, numCols, cellSize, initRoundDelay);
  let map = maps[0];
  game.loadMap(map);
  game.start();

  const modifiers = ['Meta', 'Alt', 'Control'];
  let pressedKeys = [];
  window.addEventListener('keydown', e => {
    pressedKeys.push(e.code);
    if (e.code === 'Space') {
      if (typeof(game.intervalID) === 'number') {
        game.stop();
      } else {
        game.start();
      }
    }
    if (
      pressedKeys.every(k =>
        !modifiers.some(m => k.includes(m))
      )
    ) {
      if (e.code === 'Equal') {
        game.speedUp();
      }
      if (e.code === 'Minus') {
        game.slowDown();
      }
    }
  });
  window.addEventListener('keyup', e => {
    pressedKeys = pressedKeys.filter(k => k !== e.code);
  });

  addEventListeners(canvas, ['mousedown', 'touchstart'], e => {
    e.preventDefault();
    game.stop();
    const mapIdx = maps.findIndex(m => m.name === map.name);
    map = maps[(mapIdx + 1) % maps.length];
    game.loadMap(map);
    game.start();
  });
});

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

  loadMap(map) {
    this.map = map;
    const layout = map.hasOwnProperty('layout')
      ? map.layout
      : map.getLayout(this.numRows, this.numCols);
    this.clearCanvas();
    this.grid = [...Array(this.numRows)].map(() => Array(this.numCols).fill(null));
    
    for (let y = 0; y < this.numRows; y++) {
      for (let x = 0; x < this.numCols; x++) {
        if (layout[y] && layout[y][x]) {
          this.grid[y][x] = new Cell(layout[y][x] === 'x' ? 0 : 2);
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
    // this.paintCanvas();
    this.intervalID = null;
  }

  speedUp() {
    if (this.roundDelay > 10) {
      this.roundDelay -= 10;
      this.stop();
      this.start();
    }
  }

  slowDown() {
    this.roundDelay += 10;
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

function addEventListeners(el, eventNames, f) {
  eventNames.forEach(eventName => {
    el.addEventListener(eventName, f);
  });
}