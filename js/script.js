$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown({ hover: true });
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
  });

new WOW().init();