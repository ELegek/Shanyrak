$(function () {


    // Slider 
    $('.slider').slick({
        prevArrow: '<div class="btn-container"><button class="slider-btn slider-btn__left"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.32721 1L1 11L9.32721 21" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/></svg></button></div>',

        nextArrow: '<div class="btn-container"><button class="slider-btn slider-btn__right"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.67279 1L10 11L1.67279 21" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/></svg></button></div>',
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });


    //Menu burger
    document.querySelector('.header__burger').onclick = function() {
        document.querySelector('.menu__btn').classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
        
    };


    // Popup window
    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('open');
        $('body').addClass('no-scroll');
    });

    modalClose.on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.popup');

        modalParent.removeClass('open');
        $('body').removeClass('no-scroll');
    });

    $('.popup__body').on('click', function(event) {
        $('.popup').removeClass('open');
        $('body').removeClass('no-scroll');
    });

    $('.popup__content').on('click', function(event) {
        event.stopPropagation();
    });


});