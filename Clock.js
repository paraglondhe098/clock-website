option1.addEventListener('click',function(){
    let chngcol=document.getElementById("JUMBO");
    chngcol.style.background="silver";
})
option2.addEventListener('click',function(){
    let chngcol=document.getElementById("JUMBO");
    chngcol.style.background="pink";
})
option3.addEventListener('click',function(){
    let chngcol=document.getElementById("JUMBO");
    chngcol.style.background="gold";
})

function updatetime() {
    now = new Date();
    let Hrs = now.getUTCHours();
    let Min = now.getUTCMinutes();
    let Sec = now.getUTCSeconds();
    let Day = now.getUTCDate();
    let Mon = now.getUTCMonth();
    let Year = now.getUTCFullYear();
    let Datestr= Day+":"+Mon+":"+Year;
    let Timestr= Hrs+":"+Min+":"+Sec;
    document.getElementById("Time").innerHTML=Timestr+ ' on ' +Datestr;
}
var glo=setInterval(updatetime,1000);



