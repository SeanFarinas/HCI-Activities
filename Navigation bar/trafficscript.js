let current = 0;
const lights = ['red', 'green', 'yellow'];
let isRunning = false;

function getRandomDelay(min = 6000, max = 9000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeLight() {
  lights.forEach(light => {
    document.getElementById(light).classList.remove('active');
  });

  const activeLight = lights[current];
  document.getElementById(activeLight).classList.add('active');

  current = (current + 1) % lights.length;

  if (isRunning) {
    setTimeout(changeLight, getRandomDelay());
  }
}

document.getElementById('startBtn').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    changeLight();
  }
});
