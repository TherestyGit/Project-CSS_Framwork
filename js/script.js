$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown({ hover: true, coverTrigger: false });
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $('.modal').modal();
  });

new WOW().init();


// Caroussel //

setInterval(function() {
  $('.carousel').carousel('next');
 }, 4000);


// Dark mode //

 function myFunction() {
  $("body").toggleClass("dark-mode");
  $(".card").toggleClass("dark-mode");
  $("#icon_darkmode").html("brightness_5")
}


// robot //


function robot () {
  "use strict"

  // type 'robot' on your keyboard
  let key = [82,79,66,79,84]
  let ck = 0
  let max = key.length

  let robot = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.pointerEvents = "none";
    img.style.width = '350px'
    img.style.height = '350px'
    img.style.transition = '8s all linear'
    img.style.position = 'fixed'
    img.style.left = '-400px'
    // img.style.bottom = 'calc(-50% + 300px)'
    img.style.bottom = '-40px'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    // window.setTimeout(function(){
    //   img.style.left = 'calc(50% - 200px)'
    // },50)

    window.setTimeout(function(){
      img.style.left = 'calc(100% + 500px)'
    }, 50)

    window.setTimeout(function(){
      img.parentNode.removeChild(img)
    }, 8000)

  }

  let record = function(e) {

    if ( e.which === key[ck] ) {
      ck++
    } else {
      ck = 0
    }

    if ( ck >= max ) {
      robot()
      ck = 0
    }

  }

  let init = function (data) {
    document.addEventListener('keyup', record)
  }

  let data = 'https://weichiachang.github.io/easter-eggs-mobile/images/robot.gif'

  init(data)
}

robot();


// EE - Reverse site //

function reverseSite(){
  $("body").css("transform","scaleX(-1)")
}
