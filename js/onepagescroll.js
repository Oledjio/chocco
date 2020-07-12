const sections = document.getElementsByTagName('section'); //на выходе получаем массив элементов
const scroll = document.querySelector('.maincontent');
const pager = document.querySelectorAll('.pager__item');
let currentSection = 0;
//функция по определению номера секции для кликабельных эелментов
function currentSectioIndex(){
    for (let i = 0; i<pager.length; i++){
        if(pager[i].classList.contains('pager__item_active')){
            currentSection = i;
        }
    }
}

scroll.addEventListener('wheel', function(e) {
    e.preventDefault();
    // если условие истинно, то выполняется первое условие, если нет, то второе
    // (e.deltaY < 0) ? --currentSection: ++currentSection;
    if(e.deltaY < 0){
        --currentSection;
    } else{
        ++currentSection;
    }
    e.deltaY.max = 10;
    e.deltaY.min = -10;
    if (currentSection < 0) {
        currentSection = 0;
    } else if (currentSection > (sections.length - 1)){
        currentSection = (sections.length - 1);
    }
    
    scrollToSection(currentSection);
    activeClass(currentSection);
});
//функция плавного пролистывания
function scrollToSection(i) {
        document.getElementById(sections[i].id).scrollIntoView({
        behavior: 'smooth'
    });
}
//добавление активного класса кружку
function activeClass(index){
    if (!pager[index].classList.contains('pager__item_active')){
        for (let i = 0; i<pager.length; i++){
            pager[i].classList.remove('pager__item_active');
        }
        pager[index].classList.add('pager__item_active');
    }
}

//пролистывание по клику на кружки
let anchors = document.querySelectorAll('.pager__item .pager__link');

for (let anchor of anchors) {
    
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;
        const item = target.closest('.pager__item');
    
        if(!item.classList.contains('pager__item_active')){
            for (let i = 0; i<pager.length; i++){
                pager[i].classList.remove('pager__item_active');
            }
            item.classList.add('pager__item_active');
        }   
        const blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        currentSectioIndex()
    });
    
}
//пролистывание по клику на меню

const menuList = document.querySelector('.menu__list');
const pagerList = document.querySelectorAll('.pager__item');

menuList.addEventListener('click', e=>{
    e.preventDefault();
    let target = e.target;
    let blockId = target.getAttribute('href').substr(1);
    if(target.classList.contains('menu__link')){
        
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    for (link of anchors){
        
        if (link.getAttribute('href').substr(1) == blockId){
            for(let i = 0; i<pagerList.length; i++){
                pagerList[i].classList.remove('pager__item_active');
            }
            link.parentNode.classList.add('pager__item_active');
        } 
    }
    currentSectioIndex();
});

//пролистывание по кнопке
const mainButton = document.querySelector('.main__button');
mainButton.addEventListener('click', e =>{
    e.preventDefault();
    let atr = mainButton.getAttribute('href').substr(1);
    document.getElementById(atr).scrollIntoView({
        behavior: 'smooth',
    });
    
    for (link of anchors){
        
        if (link.getAttribute('href').substr(1) == atr){
            for(let i = 0; i<pagerList.length; i++){
                pagerList[i].classList.remove('pager__item_active');
            }
            link.parentNode.classList.add('pager__item_active');
        } 
    }
    currentSectioIndex();
});

//функция по кнопке из секции с батончиком
const priceLink = document.querySelector('.price__link');
priceLink.addEventListener('click', e =>{
    e.preventDefault();
    let atribut = priceLink.getAttribute('href').substr(1);
    document.getElementById(atribut).scrollIntoView({
        behavior: 'smooth',
    });
    
    for (link of anchors){
        
        if (link.getAttribute('href').substr(1) == atribut){
            for(let i = 0; i<pagerList.length; i++){
                pagerList[i].classList.remove('pager__item_active');
            }
            link.parentNode.classList.add('pager__item_active');
        } 
    }
    currentSectioIndex();
});
