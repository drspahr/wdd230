// NAV MENU BUTTON
function toggleMenu() {
    document.getElementById("bountNav").classList.toggle("open");
    document.getElementById("menuBtn").classList.toggle("open");
}

const x = document.getElementById("menuBtn")
x.onclick = toggleMenu;

// FOOTER DATES AND YEAR
document.querySelector(".yr").textContent = new Date().getFullYear();
document.querySelector(".modDate").textContent = document.lastModified;