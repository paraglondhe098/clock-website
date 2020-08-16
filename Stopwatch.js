Hrs = 00;
Min = 00;
Sec = 00;
Msec = 00;
i = 00;
var Correct;
function updatTime() {//Modifies milliseconds
    determiner = document.getElementById("STOP2").innerHTML;
    if (determiner == 'Stop') {
        Sec++;
    }
    if (Sec >= 60) {
        Sec = 0;
        Min++;
    }
    if (Min >= 60) {
        Min = 0;
        Hrs++;
    }
}
function updateMsec() {
    determiner = document.getElementById("STOP2").innerHTML;
    if (determiner == 'Stop') {
        Msec++;
        if (Msec >= 100) {
            Msec = 0;
        }
    }
    var Timestr;
    if (Msec < 10) {
        Timestr = Hrs + ":" + Min + ":" + Sec + ":" + '0' + Msec;
    }
    else {
        Timestr = Hrs + ":" + Min + ":" + Sec + ":" + Msec;
    }
    Correct = Timestr;
    document.getElementById("Time").innerHTML = Timestr;
    // Correct = Timestr;
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
EventE = setInterval(stoopper, 10);
EventA = setInterval(updatTime, 1000);
EventA = setInterval(updateMsec, 1);
// stoopper();

STOP3.addEventListener('click', function () {//Reset
    str = document.getElementById("BUTT1").innerHTML;
    str2 = str.slice(0, 101);
    document.getElementById("BUTT1").innerHTML = str2;
    Hrs = 00;
    Min = 00;
    Sec = 00;
    Msec = 00;
    i = 0;
    document.getElementById("STOP2").innerHTML = 'Start';
})
STOP.addEventListener('click', function () {//Lapse
    str = (i + 1) + "→" + Hrs + ":" + Min + ":" + Sec + ":" + Msec;
    i++;
    str1 = document.getElementById("BUTT1").innerHTML;
    document.getElementById("BUTT1").innerHTML += str;
    document.getElementById("BUTT1").innerHTML += "<br><br>";
})
stoopper();



