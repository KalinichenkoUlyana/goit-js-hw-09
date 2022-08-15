import '../css/common.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let intervalId;

btnStart.addEventListener("click", ChangeColor);
btnStop.addEventListener ("click", ChangeStop)

function ChangeColor() {
       intervalId = setInterval(() => {
       let randomColor = getRandomHexColor();
       bodyColor.style.backgroundColor = randomColor;
           btnStart.disabled = true;
           btnStop.disabled = false;
    }, 1000);
} 
function ChangeStop() {

  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}