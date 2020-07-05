const slider = $('.slider').slick({
    prevArrow: $('.arrow__link_prev'),
    nextArrow: $('.arrow__link_next')
});
$('.arrow__link_prev').click(e =>{
    e.preventDefault();
})
$('.arrow__link_next').click(e =>{
    e.preventDefault();
});
