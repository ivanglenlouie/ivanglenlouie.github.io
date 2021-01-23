$(window).on('load', function () {
    $('#loader').delay(1000).fadeOut(800);
});

particlesJS.load('particles-js', 'js/particles.json', function() {
    // console.log('callback - particles.js config loaded');
});

new WOW().init();

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('header nav').addClass('fixed');
        } else {
            $('header nav').removeClass('fixed');
        }
    })
    var hash = window.location.hash
    if (hash == '' || hash == '#' || hash == undefined) return false;
    var target = $(hash);
    headerHeight = 120;
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
        $('html,body').stop().animate({
            scrollTop: target.offset().top - 100 //offsets for fixed header
        }, 'linear');
    }
});