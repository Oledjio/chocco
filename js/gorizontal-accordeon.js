const barMenu = document.querySelector('.bar-menu__list');

barMenu.addEventListener('click', e=>{
    e.preventDefault();
    let target = e.target;
    
    const item = target.closest('.bar-menu__item');
    const items = document.querySelectorAll('.bar-menu__item');
    if (target.classList.contains('bar-menu__link')){
        if(!item.classList.contains('bar-menu__item_active')){
            for (let i = 0; i<items.length; i++){
                items[i].classList.remove('bar-menu__item_active');
            }
            item.classList.add('bar-menu__item_active');
        } else{
            item.classList.remove('bar-menu__item_active');
        }
    }
});


const closeItems = document.querySelectorAll('.bar-menu__close');

closeItems.forEach((item) =>{
    item.addEventListener('click', e =>{
        let target = e.target;
        const itemList = target.closest('.bar-menu__item');
        itemList.classList.remove('bar-menu__item_active');
    });
});