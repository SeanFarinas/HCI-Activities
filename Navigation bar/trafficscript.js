let current = 0;
let intervalId = null;
const lights = ['red', 'green', 'yellow'];

function changeLight() {
  
  lights.forEach(light => {
    document.getElementById(light).classList.remove('active');
  });

  
  const activeLight = lights[current];
  document.getElementById(activeLight).classList.add('active');

 
  current = (current + 1) % lights.length;
}

document.getElementById('startBtn').addEventListener('click', () => {
  if (intervalId === null) {
    changeLight();
    intervalId = setInterval(changeLight, 2000);
  }
});
