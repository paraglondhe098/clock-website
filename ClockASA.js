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


// function updatetime() {
//     now = new Date();
//     let Hrs = now.getUTCHours();
//     let Min = now.getUTCMinutes();
//     let Sec = now.getUTCSeconds();
//     let Day = now.getUTCDate();
//     let Mon = now.getUTCMonth();
//     let Year = now.getUTCFullYear();
//     let Datestr= Day+":"+Mon+":"+Year;
//     let Timestr= Hrs+":"+Min+":"+Sec;
//     document.getElementById("Time").innerHTML=Timestr+ ' on ' +Datestr;
// }
// var glo=setInterval(updatetime,1000);

//Other Countries
var Australia = "Australia/Brisbane"
var Asia = "Asia/Shanghai"
var USAm = "America/New_York"
var India = "Asia/Kolkata"

function updateplace(area) {
    document.getElementById("Place").innerHTML = area;
}

function updatetime2(area=Asia) {
    var aestTime = new Date().toLocaleString("en-US", { timeZone: area });
    now = new Date(aestTime);
    let Hrs = now.getHours();
    let Min = now.getMinutes();
    let Sec = now.getSeconds();
    let Datestr = now.toLocaleDateString();
    let Timestr = Hrs + ":" + Min + ":" + Sec;
    // return Datestr+' on '+Timestr;
    document.getElementById("Time").innerHTML = Timestr + ' on ' + Datestr;
}
updateplace(Asia);
setInterval(updatetime2, 1000);


