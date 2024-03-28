import word from "./data.js";

const title = document.querySelector(".random__text");
const input = document.querySelector("input");
let globalWord;
const score = document.querySelector(".user__score");
const userTime = document.querySelector(".user__time");

let a = 0;
let time = 160;

function randomWordGenerator() {
  const randomtitle = Math.trunc(Math.random() * word.length);
  title.textContent = word[randomtitle];
  globalWord = word[randomtitle];
}

randomWordGenerator();

input.addEventListener("input", () => {
  if (input.value == globalWord) {
    randomWordGenerator();

    input.value = "";
    a++;
    score.textContent = a;
  }
});

const timer = setInterval(() => {
  time--;
  userTime.textContent = `${time} s;`;
  if (time == 0) {
    clearInterval(timer);
  }
  if (time <= 15 && time > 10) {
    userTime.parentElement.style.color = "green";
  } else if (time <= 10 && time > 3) {
    userTime.parentElement.style.color = "yellow";
  } else {
    userTime.parentElement.style.color = "red";
  }
}, 1000);

input.addEventListener("input", () => {
  const music = new Audio("../audio/analog-appliance-button-15-186961.mp3");
  music.play();
});
