; (function () {

    'use strict';

    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'bounceInLeft') {
                                el.addClass('bounceInLeft animated');
                                el.css('opacity', 100);
                            } else if (effect === 'bounceInRight') {
                                el.addClass('bounceInRight animated');
                                el.css('opacity', 100);
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '90%' });
    };

    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };

    $(function () {
        contentWayPoint();
        goToTop();
    });


}());

var waypoint1 = new Waypoint({
    element: value1 = document.querySelector("#title1"),
    handler: function (direction) {
        value1.classList.add('animated', 'rubberBand')
    },
    offset: "90%"
})

var waypoint2 = new Waypoint({
    element: value2 = document.querySelector("#title2"),
    handler: function (direction) {
        value2.classList.add('animated', 'rubberBand')
    },
    offset: "90%"
})