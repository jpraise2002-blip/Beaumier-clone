

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
    slideIndex = index;
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
const prevTwo = document.getElementById('prevTwoId');
const nextTwo = document.getElementById('nextTwoId');
const slideTrack = document.querySelector('.second-track');
const boxWidth = slideBox[0].getBoundingClientRect().width;

function updateIndicator(index) {
    let indicatorIndex;

    if (index >= 5) {
        indicatorIndex = 0;
    } else if (index <= 0) {
        indicatorIndex = 3;
    } else {
    indicatorIndex = index - 1;
    }

    indicators.forEach(indicator => indicator.classList.remove('active'));

    if (indicators[indicatorIndex]) {
        indicators[indicatorIndex].classList.add('active');
    }
}

function trackSlide () {
    trackIndex++;
    slideTrack.style.transition = 'transform 0.8s ease-in-out';
    slideTrack.style.transform = `translateX(${-trackIndex * boxWidth}px)`;

    updateIndicator(trackIndex);

    if (trackIndex === 5) {
        setTimeout(() => {
            slideTrack.style.transition = 'none';
            trackIndex = 1;
            slideTrack.style.transform = `translateX(${-trackIndex * boxWidth}px)`;
        }, 800)
    }
}

let trackTimer = setInterval(trackSlide, 6800);
trackSlide(trackIndex);

function prevButTwo() {
    trackIndex--;
    slideTrack.style.transition = 'transform 0.8s ease-in-out';
    slideTrack.style.transform = `translateX(${-trackIndex * boxWidth}px)`;

    updateIndicator(trackIndex);

    if (trackIndex <= 0) {
        setTimeout(() => {
          slideTrack.style.transition = 'none';
          trackIndex = 4;
          slideTrack.style.transform = `translateX(${-trackIndex * boxWidth}px)`;  
        }, 1000)
    }
}

prevTwo.addEventListener('click', () => {
    clearInterval(trackTimer);
    prevButTwo();
    trackTimer = setInterval(trackSlide, 6800);
});

function nextButTwo() {
    trackIndex++;
    slideTrack.style.transition = 'transform 0.8s ease-in-out';
    slideTrack.style.transform = `translateX(${-trackIndex * boxWidth}px)`;
    updateIndicator(trackIndex);

    if (trackIndex >= 5) {
        setTimeout(() => {
          slideTrack.style.transition = 'none';
          trackIndex = 1;
          slideTrack.style.transform = `translateX(${-trackIndex * boxWidth}px)`;  
        }, 800)
    }
}

nextTwo.addEventListener('click', () => {
    clearInterval(trackTimer);
    nextButTwo();
    trackTimer = setInterval(trackSlide, 6800);
});


let showIndex = 0;
const trackBox = document.querySelectorAll('.slide-box');
const endicators = document.querySelectorAll('.endicator');
const trackTrack = document.querySelector('.slides-track');
const prevOne = document.getElementById('prevOneId');
const nextOne = document.getElementById('nextOneId');
const slideWidth = trackBox[0].getBoundingClientRect().width;
function updateEndicator(index) {
    let endicatorIndex;

    if (index >= 11) {
        endicatorIndex = 0;
    } else if (index <= 0) {
        endicatorIndex = 9;
    } else {
        endicatorIndex = index - 1;
    }

    endicators.forEach(endicator => endicator.classList.remove('active'));

    if (endicators[endicatorIndex]) {
        endicators[endicatorIndex].classList.add('active');
    }
}

function trackShow () {
    showIndex++;
    trackTrack.style.transition = 'transform 0.8s ease-in-out';
    trackTrack.style.transform = `translateX(${-showIndex * slideWidth}px)`;

    updateEndicator(showIndex);

    if (showIndex === 11) {
        setTimeout(() => {
            trackTrack.style.transition = 'none';
            showIndex = 1;
            trackTrack.style.transform = `translateX(${-showIndex * slideWidth}px)`;
        }, 1000)
    }
}

let sliderTimer = setInterval(trackShow, 6800);

function prevButOne() {
    showIndex--;
    trackTrack.style.transition = 'transform 0.8s ease-in-out';
    trackTrack.style.transform = `translateX(${-showIndex * slideWidth}px)`;
    updateEndicator(showIndex);

    if (showIndex <= 0) {
        setTimeout(() => {
          trackTrack.style.transition = 'none';
          showIndex = 10;
          trackTrack.style.transform = `translateX(${-showIndex * slideWidth}px)`;  
        }, 1000)
    }
}

prevOne.addEventListener('click', () => {
    clearInterval(sliderTimer);
    prevButOne();
    sliderTimer = setInterval(trackShow, 6800);
});

function nextButOne() {
    showIndex++;
    trackTrack.style.transition = 'transform 0.8s ease-in-out';
    trackTrack.style.transform = `translateX(${-showIndex * slideWidth}px)`;
    updateEndicator(showIndex);

    if (showIndex >= 11) {
        setTimeout(() => {
          trackTrack.style.transition = 'none';
          showIndex = 1;
          trackTrack.style.transform = `translateX(${-showIndex * slideWidth}px)`;  
        }, 1000)
    }
}

nextOne.addEventListener('click', () => {
    clearInterval(sliderTimer);
    nextButOne();
    sliderTimer = setInterval(trackShow, 6800);
});

trackShow(showIndex);