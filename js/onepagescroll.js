const sections = document.getElementsByTagName('section'); //на выходе получаем массив элементов
const scroll = document.querySelector('.maincontent');
const pager = document.querySelectorAll('.pager__item');
let currentSection = 0;


scroll.addEventListener('wheel', function(e) {
    e.preventDefault();
    // если условие истинно, то выполняется первое условие, если нет, то второе
    // (e.deltaY < 0) ? --currentSection: ++currentSection;
    if(e.deltaY < 0){
        --currentSection;
    } else{
        ++currentSection;
    }
    if (currentSection < 0) {
        currentSection = 0;
    } else if (currentSection > (sections.length - 1)){
        currentSection = (sections.length - 1);
    }
    
    scrollToSection(currentSection);
    activeClass(currentSection);
});

function scrollToSection(i) {
        document.getElementById(sections[i].id).scrollIntoView({
        behavior: 'smooth'
    });
}
function activeClass(index){
    if (!pager[index].classList.contains('pager__item_active')){
        for (let i = 0; i<pager.length; i++){
            pager[i].classList.remove('pager__item_active');
        }
        pager[index].classList.add('pager__item_active');
    }
}

//пролистывание по клику
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    
    anchor.addEventListener('click', function (e) {
    console.log(anchors);
    e.preventDefault();
    let target = e.target;
    const item = target.closest('.pager__item')
    
    if(!item.classList.contains('pager__item_active')){
        for (let i = 0; i<pager.length; i++){
            pager[i].classList.remove('pager__item_active');
        }
        item.classList.add('pager__item_active');
    }   
    const blockID = anchor.getAttribute('href').substr(1);
    console.log(blockID);
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
    
}