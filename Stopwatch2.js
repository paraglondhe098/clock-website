option1.addEventListener('click', function () {
    let chngcol = document.getElementById("JUMBO");
    chngcol.style.background = "silver";
})
option2.addEventListener('click', function () {
    let chngcol = document.getElementById("JUMBO");
    chngcol.style.background = "grey";
})
option3.addEventListener('click', function () {
    let chngcol = document.getElementById("JUMBO");
    chngcol.style.background = "gold";
})
STOP.addEventListener('mouseover', function () {
    STOP.style.background = "rebeccapurple";
    flag = true;
})
STOP.addEventListener('mouseout', function () {
    STOP.style.background = prev;
})
STOP2.addEventListener('mouseover', function () {
    STOP2.style.background = "rebeccapurple";
})
STOP2.addEventListener('mouseout', function () {
    STOP2.style.background = prev;
})
STOP3.addEventListener('mouseover', function () {
    STOP3.style.background = "rebeccapurple";
})
STOP3.addEventListener('mouseout', function () {
    STOP3.style.background = prev;
})