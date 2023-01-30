// Import using Jquery
let secondsInput = $('#seconds-input');
let minutesInput = $('#minutes-input');
let sep = $('#sep');
let timerDisplay = $('#timer-display');

// Import using vanilla Javascript
let bottomHide = document.getElementById('bottom-hide');
let topHide = document.getElementById('top-hide');
const startButton = document.getElementById("start-button");

// Variable used to check wether or not there is a countdown going
let counting = false;

// Main function
function startTimer(durationSeconds, display) {

    let timer = durationSeconds, minutes = 0, seconds = 0;
    counting = true;

    // Hide number inputs
    secondsInput.hide();
    minutesInput.hide();
    sep.hide();

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // If minutes or seconds is a one-digit number then add a zero on front
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + "  :  " + seconds);

        // if timer ends or is going to end, stay on zero
        if (--timer < 0) {
            timer = 0;
        }

        // setInterval takes one second to start
        // When setInterval function starts running, start CSS hourglass animation
        if(timer == (durationSeconds - 1)){
            topHide.style['animation-name'] = "hourglass-anim-top";
            topHide.style['animation-duration'] = (durationSeconds)+ "s";
            topHide.style['animation-timing-function'] = "ease-in";
            topHide.style['animation-fill-mode'] = "forwards";
            bottomHide.style['animation-name'] = "hourglass-anim-bot";
            bottomHide.style['animation-duration'] = (durationSeconds)+ "s";
            bottomHide.style['animation-timing-function'] = "ease-in";
            bottomHide.style['animation-fill-mode'] = "forwards";
        }

    }, 1000);
}


startButton.addEventListener('click',function() {
    if(counting == false) {
        // Calculate total of seconds
        let secondsUsed = secondsInput.val() == '' ? 0: parseInt(secondsInput.val(), 10); 
        let minutesUsed = minutesInput.val() == '' ? 0: parseInt(minutesInput.val(), 10);
        let secondsTotal = minutesUsed * 60 + secondsUsed;

        // Run timer function
        startTimer(secondsTotal, timerDisplay);
    };
});
