$(function(){

$('.slider').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.32721 1L1 11L9.32721 21" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/></svg></button>',

    nextArrow:'<button class="slider-btn slider-btn__right"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.67279 1L10 11L1.67279 21" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/></svg></button>',
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
});


});