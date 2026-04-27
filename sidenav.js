const sideBar = document.getElementById('sideBar');
const myLinks = document.getElementById('myLinks');
const mySecondLink = document.getElementById('mySecondLink');
const mainContent = document.getElementById('mainContent');
const headerText = document.getElementById('headerText');
const bookIcon = document.getElementById('bookIcon');
const closeBtn = document.getElementById('closeBtn');
const wideContainer = document.getElementById('wideContainer');
const smallContainer = document.getElementById('smallContainer');
let sideNav0pen = false;



sideBar.addEventListener('click', function () {
    if (window.matchMedia("(min-width: 1170px)").matches) {
        largeScreen(event);
    } else {
        smallScreen(event);
    }
})


function smallScreen(event) {
    if (!sideNav0pen) {
        event.preventDefault();
        sideNav0pen = true;
        smallScreenDisplay();
    } else {
        window.location.href = 'index.html';
    }
};
function smallScreenDisplay() {
    smallContainer.style.display = 'block';
    mainContent.style.display = 'none';
    headerText.style.color = '#212529';
    bookIcon.classList.add('book-tab');
    closeBtn.style.display = 'block';
}


function largeScreen(event) {
    if (!sideNav0pen) {
        event.preventDefault();
        sideNav0pen = true;
        largeScreenDisplay();
    } else {
        window.location.href = 'index.html';
    }
}
function largeScreenDisplay() {
    wideContainer.style.display = 'block';
    mainContent.style.display = 'none';
    headerText.style.color = '#212529';
    bookIcon.classList.add('book-tab');
    closeBtn.style.display = 'block';
}

function smallScreenResize() {
    wideContainer.style.display = 'none';
    smallContainer.style.display = 'block';
    mainContent.style.display = 'none';
    headerText.style.color = '#212529';
    bookIcon.classList.add('book-tab');
    closeBtn.style.display = 'block';
}

function largeScreenResize() {
    smallContainer.style.display = 'none';
    wideContainer.style.display = 'block';
    mainContent.style.display = 'none';
    headerText.style.color = '#212529';
    bookIcon.classList.add('book-tab');
    closeBtn.style.display = 'block';
}
window.addEventListener('resize', function () {
    if (sideNav0pen) {
        if (window.matchMedia("(min-width: 1170px)").matches) {
            largeScreenResize();
        } else if (window.matchMedia("(768 <= width <= 1170px)").matches) {
            smallScreenResize();
        } else {
            smallScreenResize();
        }
    }
})


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

const destLink2nd = document.getElementById('destLink2nd');
const foodLink2nd = document.getElementById('foodLink2nd');
const wellLink2nd = document.getElementById('wellLink2nd');
const galLink2nd = document.getElementById('galLink2nd');
const foodId = document.getElementById('foodId');
const wellId = document.getElementById('wellId');
const galId = document.getElementById('galId');
const leadPic = document.getElementById('leadPic');


function foodNavHoverOver() {

    destLink2nd.style.display = 'none';
    foodLink2nd.style.display = 'block';
    leadPic.style.display = 'none';
    foodId.style.color = 'black';

}
function foodNavHoverLeave() {

    destLink2nd.style.display = 'block';
    foodLink2nd.style.display = 'none';
    leadPic.style.display = 'block';
    foodId.style.color = '#808080';

}

function wellNavHoverOver() {

    destLink2nd.style.display = 'none';
    wellLink2nd.style.display = 'block';
    leadPic.style.display = 'none';
    wellId.style.color = 'black';

}
function wellNavHoverLeave() {

    destLink2nd.style.display = 'block';
    wellLink2nd.style.display = 'none';
    leadPic.style.display = 'block';
    wellId.style.color = '#808080';

}

function galNavHoverOver() {

    destLink2nd.style.display = 'none';
    galLink2nd.style.display = 'block';
    leadPic.style.display = 'none';
    galId.style.color = 'black';

}
function galNavHoverLeave() {

    destLink2nd.style.display = 'block';
    galLink2nd.style.display = 'none';
    leadPic.style.display = 'block';
    galId.style.color = '#808080';

}


const links = document.querySelectorAll('.image-hover-link');

links.forEach(link => {
    link.addEventListener('mouseenter', function () {
        const imageId = this.dataset.img;
        document.getElementById(imageId).style.display = 'block';
        leadPic.style.display = 'none';
    });
    link.addEventListener('mouseleave', function () {
        const imageId = this.dataset.img;
        document.getElementById(imageId).style.display = 'none';
        leadPic.style.display = 'block';
    });
})