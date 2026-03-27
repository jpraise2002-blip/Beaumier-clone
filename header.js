

window.addEventListener('scroll', function(){

    const header = document.querySelector(".header");
    const bookIcon = document.getElementById('bookIcon');

    if(window.scrollY > 1){
        header.classList.add('scrolled');
        bookIcon.classList.add('book-tab');
    }else{
        header.classList.remove('scrolled');
        bookIcon.classList.remove('book-tab');
    }
});

window.addEventListener('scroll', function(){

    const navFrame = document.querySelector(".nav-frame");

    if(window.scrollY > 100){
        navFrame.classList.add('scrolled');
    }else{
        navFrame.classList.remove('scrolled');
    }
});
