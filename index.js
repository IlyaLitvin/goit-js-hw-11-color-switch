const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const start = document.querySelector('[data-action = "start"]');
const stop = document.querySelector('[data-action = "stop"]');
const body = document.querySelector("body");
let intervalId;
console.log(start);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startChange = function () {
  intervalId = setInterval(() => {
    start.setAttribute("disabled", true);
    const min = 0;
    const max = colors.length - 1;
    let i = randomIntegerFromInterval(min, max);
    body.style.backgroundColor = `${colors[i]}`;
  }, 1000);
};

const stopChange = function () {
  clearInterval(intervalId);
  start.removeAttribute("disabled");
};

start.addEventListener("click", startChange);
stop.addEventListener("click", stopChange);
