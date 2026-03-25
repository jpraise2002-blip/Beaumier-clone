
const sideBar = document.getElementById('sideBar');
const myLinks = document.getElementById('myLinks');
const mainContent = document.getElementById('mainContent');
const headerText = document.getElementById('headerText');
const bookIcon = document.getElementById('bookIcon');
const closeBtn = document.getElementById('closeBtn');

sideBar.addEventListener('click', function () {
    if (myLinks.style.display === 'none') {
        myLinks.style.display = 'block';
        mainContent.style.display = 'none';
        headerText.style.color = '#212529';
        bookIcon.style.color = '#ffffff';
        bookIcon.style.backgroundColor = 'black';
        closeBtn.style.display = 'block';
    } else {
        myLinks.style.display = 'none';
        mainContent.style.display = 'block';
        headerText.style.color = '#ffffff';
        bookIcon.style.color = 'black';
        bookIcon.style.backgroundColor = '#ffffff';
        closeBtn.style.display = 'none';
        destLink.style.display = 'none';
        foodLink.style.display = 'none';
        wellLink.style.display = 'none';
        galLink.style.display = 'none';
    }
});

const destLink = document.getElementById('destLink');
const foodLink = document.getElementById('foodLink');
const wellLink = document.getElementById('wellLink');
const galLink = document.getElementById('galLink');
const exitBtn = document.getElementById('exitBtn');

function destLinks() {
    if (destLink.style.display === 'none') {
        destLink.style.display = 'block';
        myLinks.style.display = 'none';
        foodLink.style.display = 'none';
        wellLink.style.display = 'none';
        galLink.style.display = 'none';
        exitBtn.style.display = 'block';
    } else {
        destLink.style.display = 'none';
        myLinks.style.display = 'block';
    }
};

function foodLinks() {
    if (foodLink.style.display === 'none') {
        foodLink.style.display = 'block';
        myLinks.style.display = 'none';
        destLink.style.display = 'none';
        wellLink.style.display = 'none';
        galLink.style.display = 'none';
        exitBtn.style.display = 'block';
        
    } else {
        foodLink.style.display = 'none';
        myLinks.style.display = 'block';
        
    }
};

function wellLinks() {
    if (wellLink.style.display === 'none') {
        wellLink.style.display = 'block';
        myLinks.style.display = 'none';
        destLink.style.display = 'none';
        foodLink.style.display = 'none';
        galLink.style.display = 'none';
        exitBtn.style.display = 'block';
        
    } else {
        wellLink.style.display = 'none';
        myLinks.style.display = 'block';
        
    }
};

function galLinks() {
    if (galLink.style.display === 'none') {
        galLink.style.display = 'block';
        myLinks.style.display = 'none';
        destLink.style.display = 'none';
        foodLink.style.display = 'none';
        wellLink.style.display = 'none';
        exitBtn.style.display = 'block';
        
    } else {
        galLink.style.display = 'none';
        myLinks.style.display = 'block';
        
    }
};

function goBack() {
    if (myLinks.style.display === 'none') {
        myLinks.style.display = 'block';
        exitBtn.style.display = 'none';
    }
}

