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

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

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
    $('#video').on('ended', function() {
        window.location.href = '/page.html';
    });

    };

//one page scroll
    $(function () {
        var
            sections = $('.accordion-box'),
            display = $('.accordion-wrapp--customers'),
            screen = 0,
            inscroll = false;

        sections.filter(':first-child').addClass('active');

        var scrollToSection = function (sectionEq) {
            var position = 0;

            if (!inscroll) {
                inscroll = true;
                screen = sectionEq;

                position = (sections.eq(sectionEq).index() * -100) + '%';

                sections.eq(sectionEq).addClass('active')
                    .siblings().removeClass('active');

                display.css({
                    // 'transform' :  'translate3d(0,' + position + ', 0)'
                });

                setTimeout(function () {
                    inscroll = false;

                    $('.fixed-menu__item').eq(sectionEq).addClass('active')
                        .siblings().removeClass('active');
                }, 1300)
            }
        }

        document.querySelector('.accordion-wrapp--customers')
            .addEventListener('wheel', function (e) {
                var activeSection = sections.filter('.active');

                if (!inscroll) {

                    if (e.deltaY > 0) { //скроллим вниз
                        if (activeSection.next().length) {
                            screen = activeSection.next().index();
                        }
                    }

                    if (e.deltaY < 0) { //спроллим вверх
                        if (activeSection.prev().length) {
                            screen = activeSection.prev().index()
                        }
                    }

                    scrollToSection(screen);
                }
            });

        // $('.down-arrow').on('click', function(e){
        //     e.preventDefault();
        //
        //     scrollToSection(1);
        // });

        $('.fixed-menu__link')
            .on('click', function(e){
                e.preventDefault();

                scrollToSection(parseInt($(this).attr('href')));
            });
    });

});







