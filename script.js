// Rain animation for slide 2
document.addEventListener('DOMContentLoaded', function() {
    const rainContainer = document.querySelector('.rain-container');
    if (rainContainer) {
        for(let i = 0; i < 35; i++) {
            const drop = document.createElement('div');
            drop.className = 'rain';
            drop.style.left = Math.random() * 1080 + 'px';
            drop.style.opacity = Math.random() * 0.4 + 0.3;
            drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            drop.style.animationDelay = (Math.random() * 2) + 's';
            rainContainer.appendChild(drop);
        }
    }
});

// Slideshow functionality
let currentSlide = 0;
const slides = document.getElementById('slides');
const totalSlides = 6; // Total number of slides
const dots = document.querySelectorAll('.dot');

// Function to update the slides position
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Function to change slide
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Function to go to a specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlidePosition();
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Swipe Navigation for touch devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance required for a swipe
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next slide
        changeSlide(1);
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous slide
        changeSlide(-1);
    }
}