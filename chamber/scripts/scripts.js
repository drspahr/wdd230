document.querySelector(".year").textContent = new Date().getFullYear();
document.querySelector(".moddate").textContent = document.lastModified;

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("open");
    document.getElementById("menuBtn").classList.toggle("open");
}

const x = document.getElementById("menuBtn")
x.onclick = toggleMenu;

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

