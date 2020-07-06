// const validateFields = (form, fieldsArray) =>{
//     fieldsArray.forEach((field) =>{
//         field.removeClass('input-error');
//         if(field.val().trim() == ""){
//             field.addClass('input-error');
//         }
//     });
//     const errorFields = form.find('.input-error');

//     return errorFields.length == 0;
// }

// $('.form').submit((e) =>{
//     e.preventDefault();

//     const form = $(e.currentTarget);
//     const name = form.find("[name = 'name']");
//     const phone = form.find("[name = 'phone']");
//     const comment = form.find("[name = 'comment']");
//     const to = form.find("[name = 'to']");

//     const modal = $('.modal');
//     const content = modal.find('.modal__content')
//     modal.removeClass('error-modal');

//     const isValid = validateFields(form, [name, phone, comment, to]);
    
//     if (isValid){
//         $.ajax({
//             url: "https://webdev-api.loftschool.com/sendmail",
//             method: "post",
//             data:{
//                 name: name.val(),
//                 phone: phone.val(),
//                 comment: comment.val(),
//                 to: to.val(),
//             },
//             success: data =>{
//                 content.text(data.message);
//                 $.fancybox.open({
//                     src: ".modal",
//                     type: "inline"
//                 })
//             },
//             error: data =>{
//                 const message = data.responseJSON.message;
//                 content.text(message);
//                 modal.addClass('error-modal');
//                 $.fancybox.open({
//                     src: ".modal",
//                     type: "inline"
//                 })
//             }
//         });
//     }
// })



// $('.js-submit').click(e =>{
//     e.preventDefault();
//     $.fancybox.close();
// })


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