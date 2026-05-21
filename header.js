

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

