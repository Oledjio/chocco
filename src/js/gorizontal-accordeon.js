const barMenu = document.querySelector('.bar-menu__list');

barMenu.addEventListener('click', e=>{
    e.preventDefault();
    let target = e.target;
    
    const item = target.closest('.bar-menu__item');
    const items = document.querySelectorAll('.bar-menu__item');
    if (target.classList.contains('bar-menu__link')){
        console.log(target);
        if(!item.classList.contains('bar-menu__item_active')){
            for (let i = 0; i<items.length; i++){
                items[i].classList.remove('bar-menu__item_active');
            }
            item.classList.add('bar-menu__item_active');
        } else{
            item.classList.remove('bar-menu__item_active');
        }
    }

    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if(isMobile){
        if (target.classList.contains('bar-menu__link')){
            console.log(target);
            item.classList.add('bar-menu__item_active');
            for (let i = 0; i<items.length; i++){
                if(items[i].classList.contains('bar-menu__item_active')){
                continue;
                } else{
                    items[i].style.display = 'none'
                }    
            }
        } else{
            item.classList.remove('bar-menu__item_active');
            for(let i = 0; i<items.length; i++){
                items[i].style.display = 'flex';
            }
        }
    }   
    //открытие блока с описанием
    const textBlock = item.querySelector('.bar-menu__wrap');
    const textBlocks = document.querySelectorAll('.bar-menu__wrap');
    if(item.classList.contains('bar-menu__item_active')){
        textBlocks.forEach((block) =>{
            block.style.width = 0;
        });
        textBlock.style.width = measureWidth();
    } else{
        textBlock.style.width = 0;
    }
});
//расчет ширины блока с текстом
function measureWidth(){
    const screenWindow = document.documentElement.clientWidth;
    const barMenuItems = document.querySelectorAll('.bar-menu__link');
    const barMenuItemsWidth = getComputedStyle(barMenuItems[0]).width;
    let titleWidth = (parseInt(barMenuItemsWidth) * (barMenuItems.length));
    
    const isTablet = window.matchMedia("(max-width: 768px)").matches;
    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if(isMobile){
        titleWidth = parseInt(barMenuItemsWidth);
        return screenWindow - titleWidth + 'px';
    }
    if (isTablet){
        return screenWindow - titleWidth + 'px';
    } else {
        return 530 + 'px';
    }
}


//закрытие по крестику
const closeItems = document.querySelectorAll('.bar-menu__close');

closeItems.forEach((item) =>{
    item.addEventListener('click', e =>{
        let target = e.target;
        const itemList = target.closest('.bar-menu__item');
        itemList.classList.remove('bar-menu__item_active');
    });
});