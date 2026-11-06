// Typing Animation

const typingText = [
    "Web Developer",
    "BCA Student",
    "Tech Enthusiast",
    "Future AI/ML Engineer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentText = typingText[textIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentText.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentText.length) {

        deleting = true;
        speed = 1200;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        textIndex++;

        if (textIndex >= typingText.length) {
            textIndex = 0;
        }

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}


// Start Typing Animation

if (typingElement) {
    typeEffect();
}


// Scroll Reveal Animation

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function(element) {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


// Run Animation When Scrolling

window.addEventListener("scroll", revealOnScroll);


// Run Once When Page Loads

revealOnScroll();


// Automatic Copyright Year

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// Close Mobile Navbar After Clicking a Link

const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu =
    document.getElementById("navbarMenu");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbarMenu.classList.contains("show")) {

            const navbarCollapse =
                bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            navbarCollapse.hide();

        }

    });

});