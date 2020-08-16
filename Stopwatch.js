Hrs = 00;
Min = 00;
Sec = 00;
Msec = 00;
i = 00;
var Correct;
function updateMsecs() {//Modifies milliseconds
    determiner = document.getElementById("STOP2").innerHTML;
    if (determiner == 'Stop') {
        Msec++;
    }
    if (Msec >= 1000) {
        Msec = 0;
    }
    let Timestr = Hrs + ":" + Min + ":" + Sec + ":" + Msec;
    document.getElementById("Time").innerHTML = Timestr;
}
function updatesecs() {//modifies seconds
    determiner = document.getElementById("STOP2").innerHTML;
    if (determiner == 'Stop') {
        Sec++;
    }
    if (Sec >= 60) {
        Sec = 0;
    }
    let Timestr = Hrs + ":" + Min + ":" + Sec + ":" + Msec;
    document.getElementById("Time").innerHTML = Timestr;
}
function updatemins() {//Modifies minutes
    determiner = document.getElementById("STOP2").innerHTML;
    if (determiner == 'Stop') {
        Min++;
    }
    if (Min >= 60) {
        Min = 0;
    }
    let Timestr = Hrs + ":" + Min + ":" + Sec + ":" + Msec;
    document.getElementById("Time").innerHTML = Timestr;
}
function updatehrs() {//Modifies hours
    determiner = document.getElementById("STOP2").innerHTML;
    if (determiner == 'Stop') {
        Hrs++;
    }
    if (Hrs >= 24) {
        Hrs = 0;
    }
    let Timestr = Hrs + ":" + Min + ":" + Sec + ":" + Msec;
    Correct = Timestr;
    document.getElementById("Time").innerHTML = Timestr;
}
function stoopper() {//Start or stop
    if (document.getElementById("STOP2").innerHTML == 'Start') {//To stop
        STOP2.addEventListener('click', function () {
            document.getElementById("STOP2").innerHTML = "Stop";
        })
    }
    if (document.getElementById("STOP2").innerHTML == 'Stop') {//to start
        STOP2.addEventListener('click', function () {
            document.getElementById("STOP2").innerHTML = "Start";
            document.getElementById("Time").innerHTML = Correct;
        })
    }
}

//Main functioning area
EventE = setInterval(stoopper, 1);
EventA = setInterval(updateMsecs, 1);
EventB = setInterval(updatesecs, 1000);
EventC = setInterval(updatemins, 1000 * 62);
EventD = setInterval(updatehrs, 1000 * 63 * 63);


STOP3.addEventListener('click', function () {//Reset
    str = document.getElementById("BUTT1").innerHTML;
    str2 = str.slice(0, 101);
    document.getElementById("BUTT1").innerHTML = str2;
    Hrs = 00;
    Min = 00;
    Sec = 00;
    Msec = 00;
    i = 0;
})
prev = JUMBO.style.background
STOP.addEventListener('click', function () {//Lapse
    str = (i + 1) + "→" + Hrs + ":" + Min + ":" + Sec + ":" + Msec;
    i++;
    str1 = document.getElementById("BUTT1").innerHTML;
    document.getElementById("BUTT1").innerHTML += str;
    document.getElementById("BUTT1").innerHTML += "<br><br>";
})



