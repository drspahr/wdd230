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

const actBtn = document.querySelector(".action");
actBtn.addEventListener('click', () => {
    location.href = "join.html";
});

const jnBtn = document.querySelector(".joinBtn");
jnBtn.addEventListener('click', () => {
    location.href = "join.html";
});

// Spotlight
const cmpInfo = "json/data.json";

async function getCmpInfo(cmpInfo) {
    const response = await fetch(cmpInfo);
    if(response.ok) {
        const cmpData = await response.json();
        displayCmpInfo(cmpData.business);
    }
}

getCmpInfo(cmpInfo);

const displayCmpInfo = (data) => {
    let divSpot = "1";
    data.forEach((item) => {
       if (item.member == "Gold" || item.member == "Silver" && divSpot < 4) {
        // Create elements
        let divSpots = document.querySelector("#spots");
        let spotDiv = document.createElement("div");
        let nameHead = document.createElement("h3");
        let logo = document.createElement("img");
        let genPara = document.createElement("p");
        let cmpInfo = document.createElement("div");
        let webInfo = document.createElement("p");
        let phoneInfo = document.createElement("p");

        // Set element attributes
        spotDiv.setAttribute("class", `spot${divSpot} color`);
        genPara.setAttribute("class", "pspot");
        cmpInfo.setAttribute("class", "contact");

        logo.setAttribute("class", "images");
        logo.setAttribute("src", item.icon);
        logo.setAttribute("alt", `Logo of ${item.name}`);
        logo.setAttribute("loading", "lazy");

        // Set the h3 header, website, phone, and genPara
        genPara.textContent = "lorem6";
        nameHead.textContent = item.name;
        webInfo.textContent = item.website;
        phoneInfo.textContent = item.phone;

        // Append web and phone to cmpInfo
        cmpInfo.appendChild(webInfo);
        cmpInfo.appendChild(phoneInfo);

        // Append all elements to spotDiv
        spotDiv.appendChild(nameHead);
        spotDiv.appendChild(logo);
        spotDiv.appendChild(genPara);
        spotDiv.appendChild(cmpInfo);

        // Append to #spots
        divSpots.appendChild(spotDiv);

        divSpot ++;
       } 
    });
}

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



