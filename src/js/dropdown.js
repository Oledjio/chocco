const gamburgerMenuIcon = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.dropdown__close');
const dropdownMenu = document.querySelector('.dropdown');


gamburgerMenuIcon.addEventListener('click', function(e) {
    dropdownMenu.classList.add('dropdown__active')
});
closeMenu.addEventListener('click', function(evt){
    dropdownMenu.classList.remove('dropdown__active')
});