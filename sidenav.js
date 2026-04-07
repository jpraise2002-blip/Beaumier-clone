
const sideBar = document.getElementById('sideBar');
const myLinks = document.getElementById('myLinks');
const mainContent = document.getElementById('mainContent');
const headerText = document.getElementById('headerText');
const bookIcon = document.getElementById('bookIcon');
const closeBtn = document.getElementById('closeBtn');
let sideNav0pen = false;

sideBar.addEventListener('click', function (event) {
    if (!sideNav0pen) {
        event.preventDefault();
        myLinks.style.display = 'block';
        sideNav0pen = true;
        mainContent.style.display = 'none';
        headerText.style.color = '#212529';
        bookIcon.classList.add('book-tab');
        closeBtn.style.display = 'block';
    } else {
        window.location.href = 'index.html';
    }
});


const destLink = document.getElementById('destLink');
const foodLink = document.getElementById('foodLink');
const wellLink = document.getElementById('wellLink');
const galLink = document.getElementById('galLink');
const exitBtn = document.getElementById('exitBtn');
const extraContainer = document.getElementById('extraContainer');

function destLinks() {
    if (destLink.style.display === 'none') {
        extraContainer.style.display = 'block';
        destLink.style.display = 'block';
        myLinks.style.display = 'none';
        foodLink.style.display = 'none';
        wellLink.style.display = 'none';
        galLink.style.display = 'none';
        exitBtn.style.display = 'block';
    } else {
        extraContainer.style.display = 'none';
        destLink.style.display = 'none';
        myLinks.style.display = 'block';
    }
};

function foodLinks() {
    if (foodLink.style.display === 'none') {
        extraContainer.style.display = 'block';
        foodLink.style.display = 'block';
        myLinks.style.display = 'none';
        destLink.style.display = 'none';
        wellLink.style.display = 'none';
        galLink.style.display = 'none';
        exitBtn.style.display = 'block';
        
    } else {
        extraContainer.style.display = 'none';
        foodLink.style.display = 'none';
        myLinks.style.display = 'block';
        
    }
};

function wellLinks() {
    if (wellLink.style.display === 'none') {
        extraContainer.style.display = 'block';
        wellLink.style.display = 'block';
        myLinks.style.display = 'none';
        destLink.style.display = 'none';
        foodLink.style.display = 'none';
        galLink.style.display = 'none';
        exitBtn.style.display = 'block';
        
    } else {
        extraContainer.style.display = 'none';
        wellLink.style.display = 'none';
        myLinks.style.display = 'block';
        
    }
};

function galLinks() {
    if (galLink.style.display === 'none') {
        extraContainer.style.display = 'block';
        galLink.style.display = 'block';
        myLinks.style.display = 'none';
        destLink.style.display = 'none';
        foodLink.style.display = 'none';
        wellLink.style.display = 'none';
        exitBtn.style.display = 'block';
        
    } else {
        extraContainer.style.display = 'none';
        galLink.style.display = 'none';
        myLinks.style.display = 'block';
        
    }
};

function goBack() {
    if (myLinks.style.display === 'none') {
        extraContainer.style.display = 'none';
        myLinks.style.display = 'block';
        exitBtn.style.display = 'none';
    }
}

