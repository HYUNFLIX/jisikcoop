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

// Script for 2504.html - 4월 조합원레터

// Spring animation for slide 2 (꽃잎 애니메이션)
document.addEventListener('DOMContentLoaded', function() {
    const springContainer = document.querySelector('.spring-container');
    
    if (springContainer) {
        // 꽃잎 애니메이션 생성
        for(let i = 0; i < 25; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            
            // 랜덤 속성 설정
            flower.style.left = Math.random() * 100 + '%';
            flower.style.width = Math.random() * 5 + 10 + 'px';
            flower.style.height = flower.style.width;
            
            // 색상 랜덤 선택 (벚꽃 계열 색상)
            const colors = ['#FFB7C5', '#FFCCCC', '#FFC0CB', '#FADADD'];
            flower.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // 애니메이션 속도 조절
            flower.style.animationDuration = Math.random() * 10 + 10 + 's, ' + (Math.random() * 5 + 5) + 's';
            flower.style.animationDelay = Math.random() * 10 + 's';
            
            springContainer.appendChild(flower);
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