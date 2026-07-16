// Select all navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Highlight active link on click
navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// Typing Animation

var typed = new Typed("#typing", {
    strings: [
        "Web Developer",
        "Python Developer",
        "Frontend Developer",
        "Django Developer"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true
});

// Initialize AOS

AOS.init({
    duration: 1000,
    once: true
});

// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Theme Toggle

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.innerHTML = "☀️";
    }else{
        themeToggle.innerHTML = "🌙";
    }

});

// Preloader

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.display = "none";

});

/* Cursor Glow */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});