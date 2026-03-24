
const sideBar = document.getElementById('sideBar');
const myLinks = document.getElementById('myLinks');
const mainContent = document.getElementById('mainContent');
const header = document.getElementById('header');
const bookIcon = document.getElementById('bookIcon');
const closebtn = document.getElementById('closebtn');

sideBar.addEventListener('click', function () {
    if (myLinks.style.display === 'none') {
        myLinks.style.display = 'block';
        mainContent.style.display = 'none';
        header.style.color = '#212529';
        bookIcon.style.color = '#ffffff';
        bookIcon.style.backgroundColor = 'black';
        closeBtn.style.display = 'block';
    } else {
        myLinks.style.display = 'none';
        mainContent.style.display = 'block';
        header.style.color = '#ffffff';
        bookIcon.style.color = 'black';
        bookIcon.style.backgroundColor = '#ffffff';
        closeBtn.style.display = 'none';
    }
});
