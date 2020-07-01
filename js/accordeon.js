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


//Способ с динамически меняющимися значенями высоты блока с описанием

// teamList.addEventListener('click', e =>{
//     e.preventDefault();
//     let target = e.target;
    
//     // const item = target.closest('.team__item');
//     if (target.classList.contains('team__link')){
//         const active = teamList.querySelector('.team__item.is-active');
//         if(active){
//             let activeDesc = active.querySelector('.team__desc');
//             activeDesc.style.height = '0px';
//             active.classList.remove('is-active');
//         }

//         if(!active || active.querySelector('team__link') !== target){
//             let element = target.closest(".team__item");
//             element.classList.add('is-active');
//             let teamDesc = element.querySelector('.team__desc');
//             teamDesc.style.height = teamDesc.scrollHeight + 'px';

//         }
//     }
// });