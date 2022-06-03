document.addEventListener('DOMContentLoaded', () => {

  const cellSize = 4;
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
      if (typeof (game.intervalID) === 'number') {
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
    if (e.code === 'ArrowRight') {
      const mapIdx = (maps.findIndex(m => m.name === map.name) + 1) % maps.length;
      map = maps[mapIdx];
      game.loadMap(map);
    }
    if (e.code === 'ArrowLeft') {
      const mapIdx = (maps.findIndex(m => m.name === map.name) - 1) >= 0
        ? maps.findIndex(m => m.name === map.name) - 1
        : maps.length - 1;
      map = maps[mapIdx];
      game.loadMap(map);
    }
  });
  window.addEventListener('keyup', e => {
    pressedKeys = pressedKeys.filter(k => k !== e.code);
  });

  addEventListeners(canvas, ['mousedown', 'touchstart'], e => {
    e.preventDefault();
    const mapIdx = (maps.findIndex(m => m.name === map.name) + 1) % maps.length;
    map = maps[mapIdx];
    game.loadMap(map);
  });

});
