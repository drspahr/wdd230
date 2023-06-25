// Menu button control
document.querySelector(".year").textContent = new Date().getFullYear();
document.querySelector(".moddate").textContent = document.lastModified;

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("open");
    document.getElementById("menuBtn").classList.toggle("open");
}

const x = document.getElementById("menuBtn")
x.onclick = toggleMenu;

// Banner control
const dateFld = document.querySelector("time");
const today = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(today);
dateFld.textContent = fullDate;

const banDay = new Date().getDay();
if (banDay === 1 || banDay === 2) {
    displayChange();
}

function displayChange () {
    document.querySelector(".banner").style.display="block";
}

const clsBan = document.querySelector(".banBtn");
clsBan.addEventListener('click', () => {
    document.querySelector(".banner").style.display="none";
}); 

// Visit counter
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const visitDisplay = document.querySelector(".visits");

if (numVisits != 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = `This is your first visit. Welcome!`;
}

numVisits ++;
localStorage.setItem("numVisits-ls", numVisits);
let pDay = Date.now();
localStorage.setItem("pDay-ls", pDay);

// Days since last visit
const msToDays = 84600000;
const vtoday = Date.now();
const dayCount = document.querySelector(".lvisit");

pDay = Number(window.localStorage.getItem("pDay-ls"));
let dayDiff = (vtoday - pDay) / msToDays;
localStorage.setItem("dayDiff-ls", dayDiff)

if (dayDiff < 1) {
    dayCount.textContent = 0;
} else {
    dayCount.textContent = `${dayDiff.toFixed(0)} days`;
}



