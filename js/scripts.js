const value1 = document.querySelector("#list_waypoint1");
const value2 = document.querySelector("#list_waypoint2");
const value3 = document.querySelector("#list_waypoint3");
const value4 = document.querySelector("#list_waypoint4");
const value5 = document.querySelector("#list_waypoint5");

const aboutusp1 = document.querySelector("#p_waypoint1");
const aboutusp2 = document.querySelector("#p_waypoint2");

value1.style.setProperty('--animate-duration', '0.5s');
value2.style.setProperty('--animate-duration', '0.5s');
value3.style.setProperty('--animate-duration', '0.5s');
value4.style.setProperty('--animate-duration', '0.5s');
value5.style.setProperty('--animate-duration', '0.5s');

jQuery("#list_waypoint1").css('opacity', 0);
jQuery("#list_waypoint2").css('opacity', 0);
jQuery("#list_waypoint3").css('opacity', 0);
jQuery("#list_waypoint4").css('opacity', 0);
jQuery("#list_waypoint5").css('opacity', 0);

jQuery("#p_waypoint1").css('opacity', 0);
jQuery("#p_waypoint2").css('opacity', 0);

var waypoint1 = new Waypoint({
    element: value1,
    handler: function (direction) {
        value1.classList.add('animate__animated', 'animate__fadeIn')
    },
    offset: 850
})

var waypoint2 = new Waypoint({
    element: value2,
    handler: function (direction) {
        value2.classList.add('animate__animated', 'animate__fadeIn')
    },
    offset: 780
})

var waypoint3 = new Waypoint({
    element: value3,
    handler: function (direction) {
        value3.classList.add('animate__animated', 'animate__fadeIn')
    },
    offset: 750
})

var waypoint4 = new Waypoint({
    element: value4,
    handler: function (direction) {
        value4.classList.add('animate__animated', 'animate__fadeIn')
    },
    offset: 680
})

var waypoint5 = new Waypoint({
    element: value5,
    handler: function (direction) {
        value5.classList.add('animate__animated', 'animate__fadeIn')
    },
    offset: 650
})

var waypoint6 = new Waypoint({
    element: aboutusp1,
    handler: function (direction) {
        aboutusp1.classList.add('animate__animated', 'animate__bounceInRight')
        jQuery("#p_waypoint1").css('opacity', 100);
    },
    offset: 700
})

var waypoint7 = new Waypoint({
    element: aboutusp2,
    handler: function (direction) {
        aboutusp2.classList.add('animate__animated', 'animate__bounceInLeft')
        jQuery("#p_waypoint2").css('opacity', 100);
    },
    offset: 800
})


