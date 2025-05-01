let menuBtn = document.querySelector('.menu-btn');
let navList = document.querySelector('.nav-list');

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {

    
    if (isMenuOpen) {
        navList.style.height = '0px';
        navList.style.display = 'none';
        isMenuOpen = false;
        menuBtn.innerHTML = '[+]';

    } else {
        navList.style.height = 'auto';
        navList.style.display = 'flex';
        isMenuOpen = true;
        menuBtn.innerHTML = '[x]';
    }

})