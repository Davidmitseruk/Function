const display = document.getElementById("stopwatch-display");
const startBtn = document.getElementById("start-stopwath");
const pausebtn = document.getElementById("pause-stopwatch");
const resetBtn = document.getElementById("reset-stopwatch");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lastUpdate = 0;

function formatTime(ms){
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60 )) / 1000);
    const milliseconds = Math.floor(ms % 1000);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`
}

function updateDisplay(){
    const currentTime = performance.now();
    elapsedTime = currentTime - lastUpdate + elapsedTime;
    lastUpdate = currentTime;

    display.textContent = formatTime(Math.round(elapsedTime))  

}


startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    pausebtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');

    lastUpdate = performance.now();
    timerInterval = setInterval(updateDisplay, 10);
})
pausebtn.addEventListener('click', () => {
    pausebtn.classList.add('hidden');
    startBtn.classList.remove('hidden');

    clearInterval(timerInterval)
})
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = '00:00:00.000';

    startBtn.classList.remove('hidden');
    pausebtn.classList.add('hidden');
    resetBtn.classList.add('hidden');
})