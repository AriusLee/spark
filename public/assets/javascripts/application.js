var app = $.sammy(function(){
  this.get('#/', function(context) {
    $('body').stop().scrollTo( $('#main'), 800, {axis:'y',offset:{left: 0, top:0 } } );
  });

  this.get('#/transactional-media', function(context) {
    $('body').stop().scrollTo( $('#transactional_media'), 800, {axis:'y',offset:{left: 0, top:0 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.transactional').addClass('current');
    $('#main_nav nav a.current').removeClass('current');
    $('#main_nav nav a.transactional').addClass('current');
  });
  
  this.get('#/marketer', function(context) {
    $('body').stop().scrollTo( $('#marketer'), 800, {axis:'y',offset:{left: 0, top:0 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.marketer').addClass('current');
    $('#main_nav nav a.current').removeClass('current');
    $('#main_nav nav a.marketer').addClass('current');
  });
  
  this.get('#/about-us', function(context) {
    $('body').stop().scrollTo( $('#about_us'), 800, {axis:'y',offset:{left: 0, top:-60 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.about').addClass('current');
    $('#main_nav nav a.current').removeClass('current');
    $('#main_nav nav a.about').addClass('current');
  });
  
  this.get('#/contact-us', function(context) {
    $('body').stop().scrollTo( $('#contact_guide'), 800, {axis:'y',offset:{left: 0, top:0 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.contact').addClass('current');
    $('#main_nav nav a.current').removeClass('current');
    $('#main_nav nav a.contact').addClass('current');
  });
  
});


$(document).ready(function() {
  if (location.pathname == '/demo.html') {
    $(window).scroll(function(){
      // Check weather the user has scrolled down (if "scrollTop()"" is more than 0)
      if($(window).scrollTop() > 0) {
        // If it's more than or equal to 0, show the toTop button.
        console.log("start scrolling");
        $('header').removeClass('absolute');
        $('header').addClass('fixed');
        $("header").removeClass('absolute_hide');
        $('header').addClass('fixed_hide');
      } else {
        // If it's less than 0 (at the top), hide the toTop button.
        console.log("reached top");
        $('header').removeClass('fixed');
        $('header').addClass('absolute');
        $("header").addClass('absolute_hide');
        $('header').removeClass('fixed_hide');
      }
    });
  } else {
    $(window).scroll(function(){
      // Check weather the user has scrolled down (if "scrollTop()"" is more than 0)
      if($(window).scrollTop() > 0){
        // If it's more than or equal to 0, show the toTop button.
        console.log("start scrolling");
        console.log($(window).scrollTop());
        $('header').removeClass('absolute');
        $('header').addClass('fixed');
        if($(window).scrollTop() > 629 && $(window).scrollTop() <= 1380){
          $('#main_nav nav a.current').removeClass('current');
          $('#main_nav nav a.transactional').addClass('current');
          $("header").removeClass('absolute_hide');
          $('header').addClass('fixed_hide');
          $('#top_button').show();
          $('#right_nav').addClass('hidden');
        } else if($(window).scrollTop() > 1380 && $(window).scrollTop() <= 2010){
          $('#main_nav nav a.current').removeClass('current');
          $('#main_nav nav a.marketer').addClass('current');
          $("header").removeClass('absolute_hide');
          $('header').addClass('fixed_hide');
          $('#top_button').show();
          $('#right_nav').addClass('hidden');
        } else if($(window).scrollTop() > 2010){
          $('#main_nav nav a.current').removeClass('current');
          $('#main_nav nav a.about').addClass('current');
          $("header").removeClass('absolute_hide');
          $('header').addClass('fixed_hide');
          $('#top_button').show();
          $('#right_nav').addClass('hidden');
        } else {
          $('#right_nav li').removeClass('current');
          $('#right_nav').removeClass('hidden');
          $('#top_button').hide();
          $("header").addClass('absolute_hide');
          $('header').removeClass('fixed_hide');
        }
      } else {
        // If it's less than 0 (at the top), hide the toTop button.
        console.log("reached top");
        $('header').removeClass('fixed');
        $('header').addClass('absolute');
      }
    });
  }

  var currentChild = 0;
  $("li.info-1").fadeOut('fast');
  $("li.info-2").fadeOut('fast');
  $("li.info-3").fadeOut('fast');
  
  $('.signin_link').click(function(e) {
    e.stopPropagation();
    if ($('#login_lightbox').hasClass('hide')) {
      $('#login_lightbox').removeClass('hide');
    }
    else {
      $('#login_lightbox').addClass('hide');
    }
  });
  
  $('body').click(function() {
    $('#login_lightbox').addClass('hide');
  });
  
  $('#login_lightbox').click(function(e) {
    e.stopPropagation();
  });

  $('.gift_roundabout_img').roundabout({
    tilt: 0,
    minScale: 0.3,
    maxScale: 0.4,
    autoplay: true,
    enableDrag: true,
    autoplayDuration: 5000,
    btnNext: "#gift_slider .btn_next",
    btnPrev: "#gift_slider .btn_prev"
  });

  $('.gift_roundabout_img')
    .bind('animationStart', function() {
      $("li.info-0").fadeOut('fast');
      $("li.info-1").fadeOut('fast');
      $("li.info-2").fadeOut('fast');
      $("li.info-3").fadeOut('fast');
  });

  $(".gift_roundabout_img")
    .bind( 'animationEnd', function() {
      currentChild = $(".gift_roundabout_img").roundabout("getChildInFocus");
      $("li.info-" + currentChild).fadeIn('fast');
  });
  
  $('#top_button').click(function() {
    $(window).scrollTo( $('#main'), 400, {axis:'y',offset:{left: 0, top:0 } } );
  });
  
  $('#main_nav').scrollspy({
    min: $('#transactional_media').offset().top,
    max: 10000,
    onEnter: function(element, position) {
      $('#main_nav nav a.current').removeClass('current');
      $('#main_nav nav a.transactional').addClass('current');
    }
  });
  
  $('#main_nav').scrollspy({
    min: $('#about_us').offset().top -60,
    max: 10000,
    onEnter: function(element, position) {
      $('#main_nav nav a.current').removeClass('current');
      $('#main_nav nav a.about').addClass('current');
    }
  });
  
  $('#main_nav').scrollspy({
    min: $('#marketer').offset().top,
    max: 10000,
    onEnter: function(element, position) {
      $('#main_nav nav a.current').removeClass('current');
      $('#main_nav nav a.marketer').addClass('current');
    }
  });
  
  $('#right_nav').scrollspy({
    min: $('#transactional_media').offset().top,
    max: 10000,
    onEnter: function(element, position) {
      //$('#right_nav li').removeClass('current');
      //$('#right_nav li.transactional').addClass('current');
      $('#right_nav').addClass('hidden')
      $('#main_nav nav a.current').removeClass('current');
      $('#main_nav nav a.transactional').addClass('current');
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
    play: 8000,
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
