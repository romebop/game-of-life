const maps = [
  {
    name: 'Random',
    params: {
      chanceOfLife: 0.1,
    },
    getBlueprint: function(numRows, numCols) {
      const blueprint = [...Array(numRows)].map(() => Array(numCols).fill(null));
      for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
          blueprint[y][x] = (Math.random() < this.params.chanceOfLife) ? 'x' : 'o';
        }
      }
      return blueprint;
    },
  },
  {
    name: 'Gosper Glider Gun',
    blueprint: [
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x'],
      ['x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ],
  },
  {
    name: 'Simkin Glider Gun',
    blueprint: [
      ['x', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['x', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'x', 'x'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'x'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o'],
    ],
  },
  {
    name: 'Ocean',
    getBlueprint: (numRows, numCols) => {
      const blueprint = [...Array(numRows)].map(() => Array(numCols).fill(null));
      for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
          blueprint[y][x] = (y === Math.floor(numRows / 2)) ? 'x' : 'o';
        }
      }
      return blueprint;
    },
  },
  {
    name: 'Penta-decathlon',
    blueprint: [
      ['o', 'x', 'o'],
      ['o', 'x', 'o'],
      ['x', 'o', 'x'],
      ['o', 'x', 'o'],
      ['o', 'x', 'o'],
      ['o', 'x', 'o'],
      ['o', 'x', 'o'],
      ['x', 'o', 'x'],
      ['o', 'x', 'o'],
      ['o', 'x', 'o'],
    ],
  },
  {
    name: 'R-pentomino',
    blueprint: [
      ['o', 'x', 'x'],
      ['x', 'x', 'o'],
      ['o', 'x', 'o'],
    ],
  },
  {
    name: 'Diehard',
    blueprint: [
      ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
      ['x', 'x', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'x', 'o', 'o', 'o', 'x', 'x', 'x'],
    ],
  },
  {
    name: 'Acorn',
    blueprint: [
      ['o', 'x', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'x', 'o', 'o', 'o'],
      ['x', 'x', 'o', 'o', 'x', 'x', 'x'],
    ],
  },
  {
    name: 'Infinite-1',
    blueprint: [
      ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
      ['o', 'o', 'o', 'o', 'x', 'o', 'x', 'x'],
      ['o', 'o', 'o', 'o', 'x', 'o', 'x', 'o'],
      ['o', 'o', 'o', 'o', 'x', 'o', 'o', 'o'],
      ['o', 'o', 'x', 'o', 'o', 'o', 'o', 'o'],
      ['x', 'o', 'x', 'o', 'o', 'o', 'o', 'o'],
    ],
  },
  {
    name: 'Infinite-2',
    blueprint: [
      ['x', 'x', 'x', 'o', 'x'],
      ['x', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'x', 'x'],
      ['o', 'x', 'x', 'o', 'x'],
      ['x', 'o', 'x', 'o', 'x'],
    ],
  },
  {
    name: 'Infinite-3',
    blueprint: [
      ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x', 'o', 'o', 'o', 'x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x',],
    ],
  },
  {
    name: 'Copperhead',
    blueprint: [
      ['o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'x', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x'],
      ['o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'x'],
      ['x', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o'],
      ['x', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o'],
      ['o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'o', 'o', 'x'],
      ['o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x'],
      ['o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'x', 'o', 'o', 'o'],
    ],
  },
  {
    name: 'Spider',
    blueprint: [
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'o', 'o', 'o'],
      ['x', 'x', 'x', 'o', 'x', 'o', 'x', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'x', 'x'],
      ['x', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'x'],
      ['o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o'],
      ['o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o'],
      ['o', 'x', 'x', 'o', 'x', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'x', 'o', 'x', 'x', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o'],
    ],
  },
];
