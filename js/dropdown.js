let gamburgerMenu = document.querySelector('.menu-icon');
let closeMenu = document.querySelector('.dropdown__close');
let dropdownMenu = document.querySelector('.dropdown');


gamburgerMenu.addEventListener('click', function(e) {
    dropdownMenu.classList.add('dropdown__active')
});
closeMenu.addEventListener('click', function(evt){
    dropdownMenu.classList.remove('dropdown__active')
});