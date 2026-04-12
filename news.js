const linkNav = document.getElementById('linkNav');
const dLink = document.getElementById('dLink');
const linkNav2 = document.getElementById('linkNav2');
const dLink2 = document.getElementById('dLink2');

linkNav.addEventListener('click', function (event) {
    dLink.classList.toggle('active');
})

linkNav2.addEventListener('click', function (event) {
    dLink2.classList.toggle('active');
})

// function openMenu () {
//     if (dLink.style.display === 'none') {
//         dLink.style.display = 'block';
//     } else {
//         dLink.style.display = 'none';
//     }
// }

// linkNav.addEventListener('click', function (event) {
//     if (dLink.style.display === 'none') {
//         dLink.style.display = 'block';
//     } else {
//         dLink.style.display = 'none';
//     }
// })

