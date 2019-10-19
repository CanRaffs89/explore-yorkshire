// Toggle slide menu
const width = screen.width;

function toggleActive() {
    if (width < 900) {
        document.getElementById("slide-menu").classList.toggle("active-small");
    } else {
        // Slide desktop menu left a bit further
        document.getElementById("slide-menu").classList.toggle("active-large");
    }
}

// Image Slider
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        // Add current class to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current class to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
} 

const previousSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for previous slide
    if(current.previousElementSibling) {
        // Add current class to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current class to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
} 

// Button Events and Auto Transition
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

previous.addEventListener('click', e => {
    previousSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}