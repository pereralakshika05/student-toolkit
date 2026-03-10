function showSection(section,btn){

document.querySelectorAll(".app-section")
.forEach(s=>s.classList.remove("active"));

document.querySelectorAll(".nav-btn")
.forEach(b=>b.classList.remove("active"));

document.getElementById("section-"+section).classList.add("active");

btn.classList.add("active");

}

/* IDEA BOARD */

let ideas=[];

function addIdea(){

let name=document.getElementById("name").value;

let idea=document.getElementById("idea").value;

if(!name||!idea)return;

ideas.push({name,idea});

renderIdeas();

}

function renderIdeas(){

let list=document.getElementById("ideas-list");

list.innerHTML="";

ideas.forEach(i=>{

let div=document.createElement("div");

div.className="idea-card";

div.innerHTML=`<b>${i.name}</b>: ${i.idea}`;

list.appendChild(div);

});

}

/* GPA */

function addRow(){

let row=`
<tr>
<td><input placeholder="Course"></td>
<td><input class="credits" type="number"></td>
<td>
<select class="grade">
<option value="4">A</option>
<option value="3">B</option>
<option value="2">C</option>
<option value="1">D</option>
<option value="0">F</option>
</select>
</td>
</tr>
`;

document.getElementById("gpa-rows").innerHTML+=row;

}

function calculateGPA(){

let credits=document.querySelectorAll(".credits");

let grades=document.querySelectorAll(".grade");

let totalCredits=0;

let totalPoints=0;

credits.forEach((c,i)=>{

let credit=parseFloat(c.value);

let grade=parseFloat(grades[i].value);

if(!isNaN(credit)){

totalCredits+=credit;

totalPoints+=credit*grade;

}

});

if(totalCredits===0)return;

let gpa=totalPoints/totalCredits;

document.getElementById("gpa-result").innerText="GPA: "+gpa.toFixed(2);

}

/* TIMER */

let seconds=1500;

let interval=null;

function startTimer(){

if(interval)return;

interval=setInterval(()=>{

let m=Math.floor(seconds/60);

let s=seconds%60;

document.getElementById("timer-display").textContent=
m+":"+(s<10?"0":"")+s;

seconds--;

if(seconds<0){

clearInterval(interval);

interval=null;

alert("Time's up!");

}

},1000);

}

function resetTimer(){

clearInterval(interval);

interval=null;

seconds=1500;

document.getElementById("timer-display").textContent="25:00";

}

/* DARK MODE */

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}
