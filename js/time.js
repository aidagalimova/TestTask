let time = 0;
let displayInterval;

const getDisplayTime = (time) => {
  if (time < 10) {
    return "0" + time;
  }
  return time;
};

const displayString = (time, timeScreen) => {
  const hours = getDisplayTime(Math.floor(time / 60 / 60));
  const minutes = getDisplayTime(Math.floor((time / 60) % 60));
  const seconds = getDisplayTime(time % 60);
  timeScreen.textContent = `${hours}:${minutes}:${seconds}`;
};

function displayTime() {
  const timeScreen = document.getElementById("timer");
  if (timeScreen) {
    displayString(time, timeScreen);
    displayInterval = setInterval(() => {
      if (timeScreen) {
        displayString(time, timeScreen);
      }
    }, 1000);
  }
}

function clearDisplayInterval() {
  clearInterval(displayInterval);
}

function startTimer() {
  setInterval(() => {
    time++;
  }, 1000);
}

startTimer();
