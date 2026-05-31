

window.addEventListener('scroll', function () {

    const header = document.querySelector(".header");
    const bookIcon = document.getElementById('bookIcon');

    if (window.scrollY > 1) {
        header.classList.add('scrolled-header');
        bookIcon.classList.add('book-tab');
    } else {
        header.classList.remove('scrolled-header');
        bookIcon.classList.remove('book-tab');
    }
});

window.addEventListener('scroll', function () {

    const navFrame = document.querySelector(".nav-frame");

    if (window.scrollY > 100) {
        navFrame.classList.add('scrolled-nav');
    } else {
        navFrame.classList.remove('scrolled-nav');
    }
});


let slideIndex = 0;
const slides = document.querySelectorAll('.third-slide-box');
const names = document.querySelectorAll('.slide-head');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    names.forEach((name, i) => {
        name.classList.toggle('active', i === index);
    });
    slideIndex = index
}

function prevBut() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}
function nextBut() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

names.forEach((name, i) => {
    name.addEventListener('click', () => {
        showSlide(i);
    });
})

setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 5000);

showSlide(slideIndex)



let trackIndex = 0;
const slideBox = document.querySelectorAll('.track-box');
const indicators = document.querySelectorAll('.indicator');
const slideTrack = document.querySelector('.second-track');

function trackSlide(index) {
    const boxWidth = slideBox[0].getBoundingClientRect().width;
    slideTrack.style.transition = 'transform 0.8s ease-in-out';
    slideTrack.style.transform = `translateX(-${index * boxWidth}px)`;
    indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === (index % 4));
    });
}

function prevButTwo() {
    trackIndex = (trackIndex - 1 + slideBox.length) % slideBox.length;
    trackSlide(trackIndex);
}
function nextButTwo() {
    trackIndex = (trackIndex + 1) % slideBox.length;
    trackSlide(trackIndex);
}

setInterval(() => {
    trackIndex = (trackIndex + 1) % slideBox.length;
    
    if (trackIndex === 4) {
        setTimeout(() => {
            slideTrack.style.transition = 'none';
            trackIndex = 0;
            slideTrack.style.transform = 'translateX(0)';
        }, 800)
    }
    
    trackSlide(trackIndex);
}, 6800)

trackSlide(trackIndex);


let showIndex = 0;
const trackBox = document.querySelectorAll('.slide-box');
const endicators = document.querySelectorAll('.endicator');
const trackTrack = document.querySelector('.slides-track');

function trackShow (index) {
    const boxWidth = trackBox[0].getBoundingClientRect().width;
    trackTrack.style.transition = 'transform 0.8s ease-in-out';
    trackTrack.style.transform = `translateX(-${index * boxWidth}px)`;
    endicators.forEach((endicator, i) => {
    endicator.classList.toggle('active', i === (index % 10));
    });
}

function prevButOne() {
    showIndex = (showIndex - 1 + trackBox.length) % trackBox.length;
    trackShow(showIndex);
}
function nextButOne() {
    showIndex = (showIndex + 1) % trackBox.length;
    trackShow(showIndex);
}

setInterval(() => {
    showIndex = (showIndex + 1) % trackBox.length;
    
    if (showIndex === 10) {
        setTimeout(() => {
            trackTrack.style.transition = 'none';
            showIndex = 0;
            trackTrack.style.transform = 'translateX(0)';
        }, 800)
    }
    
    trackShow(showIndex);
}, 2800)

trackShow(showIndex);