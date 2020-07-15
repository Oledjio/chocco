const teamList = document.querySelector('.team__list');


teamList.addEventListener('click', e =>{
    e.preventDefault();
    let target = e.target;
    
    const item = target.closest('.team__item');
    const items = document.querySelectorAll('.team__item');

    if (target.classList.contains('team__link')){
        if(!item.classList.contains('is-active')){
            for (let i = 0; i < items.length; i++){
                items[i].classList.remove('is-active');
            }
            item.classList.add('is-active');
        } else{
            item.classList.remove('is-active');
        }
    }

});