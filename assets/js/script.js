let hour = 0;
let min = 0;
let second = 0;
let miliSecond = 0;

let spanHour = document.getElementById('hour');
let spanMin = document.getElementById('min');
let spanSecond = document.getElementById('second');
let spanMilisecond = document.getElementById('miliSecond');
let startBTN = document.getElementById('start');
let pauseBTN = document.getElementById('pause');
let resetBTN = document.getElementById('reset');

let timer;

function startTimer() {
    miliSecond++;

    if (miliSecond === 99) {
        miliSecond = 0;
        second++
        if (second === 60) {
            second = 0;
            min++;
            if (min === 60) {
                min = 0;
                hour++
            }
        }
    }
    display();
}

function start() {
    clearInterval(timer);
    timer = setInterval(startTimer, 10);
}

function reset() {
    clearInterval(timer);
    miliSecond = 0;
    second = 0;
    min = 0;
    hour = 0;

    display();
}


function pause() {
    clearInterval(timer);
}

function display() {
    spanHour.textContent = hour.toString().padStart(2, '0');
    spanMin.textContent = min.toString().padStart(2, '0');
    spanSecond.textContent = second.toString().padStart(2, '0');
    spanMilisecond.textContent = miliSecond.toString().padStart(2, '0');
}