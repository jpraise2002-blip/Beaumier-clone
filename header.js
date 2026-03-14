

window.addEventListener('scroll', function(){

    const header = document.querySelector(".header");

    if(window.scrollY > 1){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function(){

    const header = document.querySelector(".nav-frame");

    if(window.scrollY > 100){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});