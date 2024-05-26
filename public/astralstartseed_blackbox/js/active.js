document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var windowElement = window;

    // :: Preloader Active Code
    windowElement.addEventListener('load', function () {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.transition = 'opacity 0.5s ease';
            preloader.style.opacity = 0;
            setTimeout(function () {
                preloader.remove();
            }, 500);
        }
    });

    // :: Nav Active Code
    if (typeof classyNav === 'function') {
        classyNav(document.getElementById('originalNav'));
        classyNav(document.getElementById('footerNav'));
    }

    // :: Newsticker Active Code
    if (typeof simpleTicker === 'function') {
        simpleTicker(document.getElementById('breakingNewsTicker'), {
            speed: 1000,
            delay: 3500,
            easing: 'swing',
            effectType: 'roll'
        });
    }

    // :: Tooltip Active Code
    var tooltipElements = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltipElements.forEach(function (el) {
        new bootstrap.Tooltip(el);
    });

    // :: Owl Carousel Active Code
    if (typeof owlCarousel === 'function') {
        var welcomeSlide = document.querySelector('.hero-slides');
        if (welcomeSlide) {
            $(welcomeSlide).owlCarousel({
                items: 2,
                margin: 30,
                loop: true,
                center: true,
                autoplay: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 5000, // Autoplay Timeout 1s = 1000ms
                smartSpeed: 2000
            });

            welcomeSlide.addEventListener('translate.owl.carousel', function () {
                var slideLayers = document.querySelectorAll("[data-animation]");
                slideLayers.forEach(function (layer) {
                    var animName = layer.getAttribute('data-animation');
                    layer.classList.remove('animated', animName);
                    layer.style.opacity = '0';
                });
            });

            welcomeSlide.addEventListener('translated.owl.carousel', function () {
                var activeItems = welcomeSlide.querySelectorAll('.owl-item.active [data-animation]');
                activeItems.forEach(function (item) {
                    var animName = item.getAttribute('data-animation');
                    item.classList.add('animated', animName);
                    item.style.opacity = '1';
                });
            });

            var delayedItems = document.querySelectorAll("[data-delay]");
            delayedItems.forEach(function (item) {
                var animDelay = item.getAttribute('data-delay');
                item.style.animationDelay = animDelay;
            });

            var durationItems = document.querySelectorAll("[data-duration]");
            durationItems.forEach(function (item) {
                var animDuration = item.getAttribute('data-duration');
                item.style.animationDuration = animDuration;
            });
        }

        var instagramSlides = document.querySelector('.instagram-slides');
        if (instagramSlides) {
            $(instagramSlides).owlCarousel({
                items: 7,
                margin: 0,
                loop: true,
                autoplay: true,
                autoplayHoverPause: true,
                autoplayTimeout: 2000, // Autoplay Timeout 1s = 1000ms
                smartSpeed: 2000,
                responsive: {
                    0: { items: 2 },
                    480: { items: 3 },
                    576: { items: 4 },
                    992: { items: 5 },
                    1500: { items: 7 }
                }
            });
        }
    }

    // :: Sticky Active Code
    // You can use a library like stickybits or sticky-js for sticky functionality if needed.

    // :: Countdown Active Code
    if (typeof countdown === 'function') {
        var clock = document.getElementById('clock');
        if (clock) {
            countdown(new Date('2020/10/10'), function (ts) {
                clock.innerHTML = `
                    <div>${ts.days} <span>Days</span></div>
                    <div>${ts.hours} <span>Hours</span></div>
                    <div>${ts.minutes} <span>Minutes</span></div>
                    <div>${ts.seconds} <span>Seconds</span></div>`;
            });
        }
    }

    // :: CounterUp Active Code
    if (typeof counterUp === 'function') {
        var counters = document.querySelectorAll('.counter');
        counters.forEach(function (counter) {
            counterUp(counter, {
                duration: 2000,
                delay: 10
            });
        });
    }

    // :: ScrollUp Active Code
    if (typeof scrollUp === 'function') {
        scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: 'Top'
        });
    }

    // :: PreventDefault a Click
    var links = document.querySelectorAll("a[href='#']");
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
        });
    });

    // :: WOW Active Code
    if (windowElement.innerWidth > 767) {
        new WOW().init();
    }
});
