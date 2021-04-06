$(document).ready(function(){
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    (function init100vh(){
        function setHeight() {
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setHeight();
        window.addEventListener('resize', setHeight);
    })();


    $('.lang').on('click', function (event) {
        event.preventDefault();
        $('.lang-submenu').toggleClass('active')
    });

    $('.burger').on('click', function (){
        $('.nav').toggleClass('nav--show')
        $('.burger').toggleClass('open')
    });

    $('.slider_1').slick({
        rows: 2,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 6
    });

    $('.slider-about').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    });


    window.onload = function() {
        $('#video_ru').on('ended', function() {
            window.location.href = '/page-ru.html';
        });

        $('#video_en').on('ended', function() {
            window.location.href = '/page-en.html';
        });

    };

    $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
        // do something...
    })

    var accordion = (function(){

        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-header');
        var $accordion_item = $('.js-accordion-item');

        // default settings
        var settings = {
            // animation speed
            speed: 400,

            // close all other accordion items if true
            oneOpen: false
        };

        return {
            // pass configurable object literal
            init: function($settings) {
                $accordion_header.on('click', function() {
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

                // ensure only one accordion is active if oneOpen is true
                if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                    $('.js-accordion-item.active:not(:first)').removeClass('active');
                }

                // reveal the active accordion bodies
                $('.js-accordion-item.active').find('> .js-accordion-body').show();
            },
            toggle: function($this) {

                if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                    $this.closest('.js-accordion')
                        .find('> .js-accordion-item')
                        .removeClass('active')
                        .find('.js-accordion-body')
                        .slideUp()
                }

                // show/hide the clicked accordion item
                $this.closest('.js-accordion-item').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed);
            }
        }
    })();
    accordion.init({ speed: 300, oneOpen: true });

    $('.nav__link').each(function(i) {
        if (this.href == document.location.href) {
            // Присваиваем класс активному пункту меню li, а не ссылке.
            // ul.nav li.nav_item.nav_active a.nav_link
            $(this).parent('.nav__item').addClass('active');
        }
    });

});








