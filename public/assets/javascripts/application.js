var app = $.sammy(function(){
  this.get('#/', function(context) {
    $('body').stop().scrollTo( $('#main'), 800, {axis:'y',offset:{left: 0, top:0 } } );
  });

  this.get('#/transactional-media', function(context) {
    $('body').stop().scrollTo( $('#transactional_media'), 800, {axis:'y',offset:{left: 0, top:0 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.transactional').addClass('current');
  });
  
  this.get('#/marketer', function(context) {
    $('body').stop().scrollTo( $('#marketer'), 800, {axis:'y',offset:{left: 0, top:0 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.marketer').addClass('current');
  });
  
  this.get('#/about-us', function(context) {
    $('body').stop().scrollTo( $('#about_us'), 800, {axis:'y',offset:{left: 0, top:-60 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.about').addClass('current');
  });
  
  this.get('#/contact-us', function(context) {
    $('body').stop().scrollTo( $('#contact_guide'), 800, {axis:'y',offset:{left: 0, top:0 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.contact').addClass('current');
  });
  
});


$(document).ready(function() {
  
  $('.gift_roundabout_img').roundabout({
    tilt: 0,
    minScale: 0.3,
    maxScale: 0.4,
    autoplay: true,
    enableDrag: true,
    autoplayDuration: 5000
  });

  $('.gift_roundabout_img')
    .bind('animationStart', function() {
      $('.gift_caption > ul').toggleClass('hidden');
    });

  $(window).scroll(function(){
    // Check weather the user has scrolled down (if "scrollTop()"" is more than 0)
    if($(window).scrollTop() > 0){
      // If it's more than or equal to 0, show the toTop button.
      console.log("start scrolling");
      $('#top_button').show();
      $('header').removeClass('absolute');
      $('header').addClass('fixed');
      
      
    } else {
      // If it's less than 0 (at the top), hide the toTop button.
      console.log("reached top");
      $('#top_button').hide();
      $('header').removeClass('fixed');
      $('header').addClass('absolute');
      $('#right_nav li').removeClass('current');
      $('#right_nav').removeClass('hidden')
      
    }
  });
  
  $('#top_button').click(function() {
    $(window).scrollTo( $('#main'), 400, {axis:'y',offset:{left: 0, top:0 } } );
  });
  
  $('#right_nav').scrollspy({
    min: $('#transactional_media').offset().top - 100,
    max: 10000,
    onEnter: function(element, position) {
      //$('#right_nav li').removeClass('current');
      //$('#right_nav li.transactional').addClass('current');
      $('#right_nav').addClass('hidden')
    }
  });
  
  $('#right_nav').scrollspy({
    min: $('#marketer').offset().top - 100,
    max: 10000,
    onEnter: function(element, position) {
      //$('#right_nav li').removeClass('current');
      //$('#right_nav li.marketer').addClass('current');
      $('#right_nav').addClass('hidden')
    }
  });
  
  $('#right_nav').scrollspy({
    min: $('#about_us').offset().top - 100,
    max: 10000,
    onEnter: function(element, position) {
      //$('#right_nav li').removeClass('current');
      //$('#right_nav li.about').addClass('current');
      $('#right_nav').addClass('hidden')
    }
  });
  
  $('#right_nav').scrollspy({
    min: $('#contact_guide').offset().top - 480,
    max: 10000,
    onEnter: function(element, position) {
      //$('#right_nav li').removeClass('current');
      //$('#right_nav li.contact').addClass('current');
      $('#right_nav').addClass('hidden')
    }
  });

  $("#home_slider").slides({
    play: 5000,
    animationStart: function() {
      if ($('#logo_marquee').hasClass('hidden')) {
        $('#logo_marquee').removeClass('hidden');
        $('#quote_marquee').addClass('hidden');
        $('#marquee_pane h3').html('Our solutions work online, offline & mobile');
      } else if ($('#quote_marquee').hasClass('hidden')) {
        $('#quote_marquee').removeClass('hidden');
        $('#logo_marquee').addClass('hidden');
        $('#marquee_pane h3').html('Giving Incentives For Transacting is Now Sparking');
      } else {
        console.log('Marquee slides error.')
      }
    }
  });
  app.run("#/");
});
