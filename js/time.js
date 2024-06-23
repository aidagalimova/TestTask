let time = 0;

const getDisplayTime = (time) => {
  return time < 10 ? "0" + time : time;
};

const timeToString = (time) => {
  const hours = getDisplayTime(Math.floor(time / 60 / 60));
  const minutes = getDisplayTime(Math.floor((time / 60) % 60));
  const seconds = getDisplayTime(time % 60);
  return `${hours}:${minutes}:${seconds}`;
};

function displayTime() {
  const timeScreen = document.getElementById("timer");
  if (timeScreen) timeScreen.textContent = timeToString(time);
}

function startTimer() {
  time++;
  displayTime();
}

addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    startTimer();
  }, 1000);
});
