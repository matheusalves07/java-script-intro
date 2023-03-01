let stopwatchInterval;
let startTime;
let elapsedMilliseconds = 0;
const timeList = document.getElementById("timeList");

function startStopwatch() {
  startTime = Date.now() - elapsedMilliseconds;
  stopwatchInterval = setInterval(() => {
    const currentTime = Date.now();
    elapsedMilliseconds = currentTime - startTime;
    const formattedTime = formatMilliseconds(elapsedMilliseconds);
    updateStopwatch(formattedTime);
  }, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function recordTime() {
  const formattedTime = formatMilliseconds(elapsedMilliseconds);
  const li = document.createElement("li");
  li.innerText = formattedTime;
  timeList.appendChild(li);
}

function updateStopwatch(formattedTime) {
  const { hours, minutes, seconds, milliseconds } = formattedTime;
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const millisecondsEl = document.getElementById("milliseconds");
  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
  millisecondsEl.innerText = milliseconds;
}

function formatMilliseconds(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = padLeft(totalHours);
  const minutes = padLeft(totalMinutes % 60);
  const seconds = padLeft(totalSeconds % 60);
  const formattedMilliseconds = padLeft(milliseconds % 1000, 3);
  return { hours, minutes, seconds, milliseconds: formattedMilliseconds };
}

function padLeft(number, length = 2, padChar = "0") {
  const str = String(number);
  if (str.length >= length) {
    return str;
  }
  const padding = padChar.repeat(length - str.length);
  return padding + str;
}
