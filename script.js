function showSection(section){

document.getElementById("gpa").style.display="none";
document.getElementById("timer").style.display="none";

document.getElementById(section).style.display="block";

}


function calculateGPA(){

let c1 = Number(document.getElementById("credits1").value);
let g1 = Number(document.getElementById("grade1").value);

let c2 = Number(document.getElementById("credits2").value);
let g2 = Number(document.getElementById("grade2").value);

let totalCredits = c1 + c2;

let gpa = ((c1*g1)+(c2*g2))/totalCredits;

document.getElementById("gpaResult").innerText = "Your GPA: " + gpa.toFixed(2);

}


/* TIMER */

let time = 1500;
let timer = null;

function startTimer(){

if(timer !== null) return;

timer = setInterval(function(){

let minutes = Math.floor(time/60);
let seconds = time % 60;

document.getElementById("time").innerText =
minutes + ":" + (seconds<10?"0":"") + seconds;

time--;

if(time < 0){
clearInterval(timer);
alert("Time's Up!");
}

},1000);

}

function resetTimer(){

clearInterval(timer);
timer=null;
time=1500;
document.getElementById("time").innerText="25:00";

}


/* DARK MODE */

function toggleDarkMode(){

document.body.classList.toggle("dark");

}
