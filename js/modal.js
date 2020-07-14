//Обработка формы на ванильном JS
const sendButton = document.querySelector('.button_submit');
const myForm = document.querySelector('.form');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal__content')
sendButton.addEventListener('click', e =>{
    e.preventDefault();
    
    if(validateForm(myForm)){
        let data = new FormData(); //данные на сервер отправляются в таком формате, а не в JSON
        data.append("name", myForm.elements.name.value); 
        data.append("phone", myForm.elements.phone.value); 
        data.append("comment", myForm.elements.comment.value); 
        data.append("to", "valera@mail.ru"); 
        
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'; //укажет, что ответ с сервера ожидается в json формате
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(data);
        xhr.addEventListener('load', () =>{
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            modalText.textContent = xhr.response.message;
            if (xhr.response.status == 0){
                modalText.style.color = 'red';
            } else{
                modalText.style.color = '';
                myForm.reset();
            }
        })
    }
});

function validateForm(form){
    let valid = true;
    if(validateField(form.elements.name)){
        valid = false;
    }
    if(validateField(form.elements.phone)){
        valid = false;
    }
    if(validateField(form.elements.comment)){
        valid = false;
    }
    return valid;
}
function validateField(field){
    if(!field.checkValidity()){
        field.nextElementSibling.textContent = field.validationMessage;
        return true;
    } else{
        field.nextElementSibling.textContent = '';
        return false;
    }
}

const modalButton = document.querySelector('.js-submit');
modalButton.addEventListener('click', e=>{
    modalClose();
});

modal.addEventListener('click', e =>{
    if (e.target == modal){
        modalClose();
    }
});
function modalClose(){
    modal.style.display = 'none';
    document.body.style = '';
}