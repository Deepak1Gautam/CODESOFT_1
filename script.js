/* =========================================
   NAVIGATION ACTIVE LINK
========================================= */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =========================================
   TYPING ANIMATION
========================================= */

const typed = new Typed("#typing", {

    strings: [

        "Web Developer",

        "Python Developer",

        "Frontend Developer",

        "Django Developer",

        "Software Engineer"

    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1200,

    loop: true

});


/* =========================================
   AOS ANIMATION
========================================= */

AOS.init({

    duration: 1000,

    once: false,

    offset: 100

});


/* =========================================
   SCROLL TO TOP BUTTON
========================================= */

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


/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("theme-toggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        themeToggle.innerHTML = "☀️";

    } else {

        themeToggle.innerHTML = "🌙";

    }

});


/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        preloader.style.transition = "opacity .5s ease";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }, 700);

});


/* =========================================
   SMOOTH CURSOR GLOW
========================================= */

const glow = document.querySelector(".cursor-glow");

let mouseX = 0;

let mouseY = 0;

let glowX = 0;

let glowY = 0;


document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;

    mouseY = e.clientY;

});


function animateGlow() {

    glowX += (mouseX - glowX) * 0.12;

    glowY += (mouseY - glowY) * 0.12;


    glow.style.left = glowX + "px";

    glow.style.top = glowY + "px";


    requestAnimationFrame(animateGlow);

}


animateGlow();


/* =========================================
   HERO IMAGE 3D TILT EFFECT
========================================= */

const heroImage = document.querySelector(".image-circle");


document.addEventListener("mousemove", (e) => {

    if (!heroImage) return;


    const rect = heroImage.getBoundingClientRect();


    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;


    const centerX = rect.width / 2;

    const centerY = rect.height / 2;


    const rotateX = ((y - centerY) / centerY) * -4;

    const rotateY = ((x - centerX) / centerX) * 4;


    heroImage.style.transform = `

        perspective(1000px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-6px)

    `;

});


heroImage?.addEventListener("mouseleave", () => {

    heroImage.style.transform = "";

});


/* =========================================
   FLOATING PARTICLES
========================================= */

const particleContainer = document.createElement("div");


particleContainer.className = "particles";


document.body.appendChild(particleContainer);


for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");


    particle.className = "particle";


    particle.style.left = Math.random() * 100 + "%";


    particle.style.top = Math.random() * 100 + "%";


    particle.style.animationDelay = Math.random() * 5 + "s";


    particle.style.animationDuration = 4 + Math.random() * 6 + "s";


    const size = 2 + Math.random() * 4;


    particle.style.width = size + "px";


    particle.style.height = size + "px";


    particleContainer.appendChild(particle);

}


/* =========================================
   SCROLL REVEAL ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        const sectionHeight = section.clientHeight;


        if (

            window.scrollY >= sectionTop &&

            window.scrollY < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   MAGNETIC BUTTON EFFECT
========================================= */

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();


        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;


        button.style.transform = `

            translate(${x * 0.12}px, ${y * 0.12}px)

        `;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* =========================================
   CARD MOUSE GLOW EFFECT
========================================= */

const cards = document.querySelectorAll(

    ".skill-card, .project-card"

);


cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();


        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;


        card.style.setProperty(

            "--mouse-x",

            x + "px"

        );


        card.style.setProperty(

            "--mouse-y",

            y + "px"

        );

    });

});


/* =========================================
   RANDOM FLOATING STAR MOVEMENT
========================================= */

const stars = document.querySelectorAll(".particle");


stars.forEach(star => {

    star.addEventListener("mouseenter", () => {

        star.style.transform = "scale(2)";

    });


    star.addEventListener("mouseleave", () => {

        star.style.transform = "scale(1)";

    });

});
