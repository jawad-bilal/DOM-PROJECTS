// VARIABLES FOR BUTTONS

const stopbtn = document.querySelector("#StartStopBtn");

const resetbtn = document.querySelector('#ResetBtn');

// VARIABLES FOR TIME VALUES

let seconds = 0;
let minutes = 0;
let hours = 0;

// VARIABLES FOR LEADING ZERO

let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

// VARIABLES FOR SET INTERVAL AND TIMERSTATUS

let timerinterval = null;
let timerstatus = "stopped";

// STOPWATCH FUNCTON

function stopwatch() {

    seconds++
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;

        }

    }

    if (seconds < 10) {

        leadingseconds = "0" + seconds.toString()

    }
    else {
        leadingseconds = seconds;
    }
    if (minutes < 10) {

        leadingminutes = "0" + minutes.toString()

    }
    else {
        leadingminutes = minutes;
    }
    if (hours < 10) {

        leadinghours = "0" + hours.toString()

    }
    else {
        leadinghours = hours;
    }

    let displayTimer = document.getElementById("timer").innerText = leadinghours + ":" + leadingminutes + ":" + leadingseconds;

}
// window.setInterval(stopwatch , 1000)


stopbtn.addEventListener('click', function () {
    if (timerstatus === "stopped") {
        timerinterval = window.setInterval(stopwatch, 1000);
        document.getElementById('StartStopBtn').innerHTML = `<i class='fas fa-pause' id='pause'></i>`;
        timerstatus = "started";
    }
    else {
        window.clearInterval(timerinterval);
        document.getElementById('StartStopBtn').innerHTML = `<i class='fas fa-play' id='play'></i>`;
        timerstatus = "stopped";
    }

})

resetbtn.addEventListener('click', function(){
    window.clearInterval(timerinterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML ="00:00:00"
})

