
const slider = $('.slider').bxSlider({
    pager: false,
    controls: false

});

$('.arrow__link_prev').click(e =>{
    e.preventDefault();
    slider.goToPrevSlide();
})
$('.arrow__link_next').click(e =>{
    e.preventDefault();
    slider.goToNextSlide();
});
