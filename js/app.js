import word from "./data.js";

const title = document.querySelector(".random__text");
const input = document.querySelector("input");
let globalWord;
const score = document.querySelector(".user__score");
const userTime = document.querySelector(".user__time");
const card = document.getElementsByClassName("card2");

let a = 0;
let time = 15;
let level = "easy";
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
    user__score.textContent = a;

    if (level == "easy") {
      time += 5;
    } else if (level == "normal") {
      time += 4;
    } else {
      time += 3;
    }
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
  } else if (time <= 3 && time > 0) {
    userTime.parentElement.style.color = "red";
  } else {
    const music = new Audio(
      "../audio/grandfathers-clock-1-ding-dong-14356.mp3"
    );
    music.play();
    title = "";
    card.value = "Your Dida";
  }
}, 1000);

input.addEventListener("input", () => {
  const music = new Audio("../audio/analog-appliance-button-15-186961.mp3");
  music.play();
});

const changelevel = document.getElementById("change__level");

changelevel.addEventListener("change", () => {
  level = changelevel.value;
});
