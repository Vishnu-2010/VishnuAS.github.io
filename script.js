// =========================
// THEME TOGGLE
// =========================

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// =========================
// MOBILE NAVBAR TOGGLE
// =========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

// Open / close menu
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// =========================
// AUTO CLOSE MENU ON LINK CLICK (MOBILE)
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});