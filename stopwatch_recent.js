let startTime, elapsedTime = 0;
let interval;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateTime() {
    const currentTime = Date.now() - startTime + elapsedTime;
    const date = new Date(currentTime);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

startBtn.onclick = () => {
    startTime = Date.now();
    interval = setInterval(updateTime, 10);
    startBtn.disabled = true;
};

stopBtn.onclick = () => {
    clearInterval(interval);
    elapsedTime += Date.now() - startTime;
    startBtn.disabled = false;
};

resetBtn.onclick = () => {
    clearInterval(interval);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    laps.innerHTML = "";
    startBtn.disabled = false;
};

lapBtn.onclick = () => {
    if (!interval) return;
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
};