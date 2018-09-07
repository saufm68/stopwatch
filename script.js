var hours = 0;
var minutes = 0;
var seconds = 0;

console.log("hours:minutes:seconds")

var inputTime = prompt("enter the number of seconds");
var timerStartpoint = parseInt(inputTime);
var popUp = timerStartpoint * 1000;

while (timerStartpoint > 60) {
    timerStartpoint -= 60;
    minutes += 1;
}

while (minutes > 60) {
    minutes -= 60;
    hours += 1;
}

seconds = timerStartpoint ;
console.log(`${hours}:${minutes}:${seconds}`);

var countdown = function() {

    if (seconds !== 0 ) {

        seconds--;
        console.log(`${hours}:${minutes}:${seconds}`);

    } else if (seconds === 0 && minutes !== 0) {

        minutes--;
        seconds = 59;
        console.log(`${hours}:${minutes}:${seconds}`);

    } else if (seconds === 0 && minutes === 0 && hours !== 0) {

        hours--;
        minutes = 59;
        console.log(`${hours}:${minutes}:${seconds}`);

    }

}

var timer = setInterval( countdown , 1000 );

var end = function() {

 clearInterval(timer);
 console.log("Time's up!!!");

}

setTimeout(end, popUp);