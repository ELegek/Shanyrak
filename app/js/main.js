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
    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock-padding');

    let unlock = true;

    const timeout = 800;

    if (popupLinks.length > 0) {
        for (let i = 0; i < popupLinks.length; i++) {
            const popuplink = popupLinks[i];
            popuplink.addEventListener('click', function (e) {
                const popupName = popuplink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let i = 0; i < popupCloseIcon.length; i++) {
            const el = popupCloseIcon[i];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            }   else {
                bodyLock();
            }
            curentPopup.classList.add('open');
            curentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnLock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = lockPaddingValue;
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnLock() {
        setTimeout(function() {
            if (lockPadding.length > 0) {
                for (let i = 0; i < lockPadding.length; i++) {
                    const el = lockPadding[i];
                    el.style.paddingRight = '0px';
                }
            }
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.opne');
            popupClose(popupActive);
        }
    });


    new WOW().init();


});