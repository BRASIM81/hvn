new WOW().init();


var d = new Date();
var y = d.getFullYear();
document.getElementById("copy").innerHTML = "Hayleys Nails & Lashes " + y;

window.onload = function(){
  if(document.cookie.length != 0){
     var cookieVal = document.cookie.split("=");
     if(cookieVal[1] == 'yes'){
        $('#cookies').css({
           'opacity':'0',
           'transform':'translate(0,100%)'
        });
     }
  }
};

$("#cookie").on('click', function(e){
  e.preventDefault();
  document.cookie = "cookieacpt=yes;max-age=" + (60 * 60 * 24 * 30) + ";";
});

$('#cookie').on('click', function(e){
  e.preventDefault();
  $('#cookies').css({
     'opacity':'0',
     'transform':'translate(0,100%)'
  });
});

$(window).on('scroll', function(){
  var wScroll = $(this).scrollTop();
  if(wScroll > $('.trigger').offset().top-($(window).height()/1.2)){
     $('.home-nav').css({
        'transform':'translate(0,0)',
        'opacity':'0.8'
     });
  } else {
     $('.home-nav').css({
        'transform':'translate(-100px,0)',
        'opacity':'0'
     });
  }
});

$('.home-nav').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
     scrollTop: 0
  },800);
  });