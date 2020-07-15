let reviews = document.querySelectorAll('.review__item');
let persons = document.querySelectorAll('.person__item');

for(let i = 0; i<persons.length; i++){
    let person = persons[i];
    person.addEventListener('click', e =>{
        e.preventDefault();

        for(let index = 0; index<persons.length; index++){
            reviews[index].classList.remove('review__item_active');
            persons[index].classList.remove('person__item_active');
        }

        reviews[i].classList.add('review__item_active');
        persons[i].classList.add('person__item_active');//можно исп e.currentTarget
    });
}