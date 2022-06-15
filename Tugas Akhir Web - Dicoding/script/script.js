// Hamburger
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#float-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != menu) {
        hamburger.classList.remove('hamburger-active');
        menu.classList.add('hidden');
    }
})

// Float menu fixed
window.onscroll = function () {
    const floatMenu = document.querySelector('#float-menu');
    const backToTop = document.querySelector('#back-to-top');
    const fixedFloatMenu = floatMenu.offsetTop;

    if (window.pageYOffset > fixedFloatMenu) {
        floatMenu.classList.add('float-menu-fixed');
        floatMenu.classList.remove('float-menu');
        backToTop.classList.remove('hidden');
    } else {
        floatMenu.classList.remove('float-menu-fixed');
        floatMenu.classList.add('float-menu');
        backToTop.classList.add('hidden');
    }
}
