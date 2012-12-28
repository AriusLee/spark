var app = $.sammy(function(){
  this.get('#/', function(context) {
    $('body').stop().scrollTo( $('#main'), 1500, {axis:'y',offset:{left: 0, top:0 } } );
  });

  this.get('#/transactional-media', function(context) {
    $('body').stop().scrollTo( $('#transactional_media'), 1500, {axis:'y',offset:{left: 0, top:-30 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.transactional').addClass('current');
  });
  
  this.get('#/marketer', function(context) {
    $('body').stop().scrollTo( $('#marketer'), 1500, {axis:'y',offset:{left: 0, top:-80 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.marketer').addClass('current');
  });
  
  this.get('#/about-us', function(context) {
    $('body').stop().scrollTo( $('#about_us'), 1500, {axis:'y',offset:{left: 0, top:-90 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.about').addClass('current');
  });
  
  this.get('#/contact-us', function(context) {
    $('body').stop().scrollTo( $('#contact_guide'), 1500, {axis:'y',offset:{left: 0, top:-80 } } );
    $('#right_nav li').removeClass('current');
    $('#right_nav li.contact').addClass('current');
  });
  
});


$(document).ready(function() {
  
  $('#right_nav').scrollspy({
    min: $('#transactional_media').offset().top - 100,
    max: 10000,
    onEnter: function(element, position) {
      $('#right_nav li').removeClass('current');
      $('#right_nav li.transactional').addClass('current');
    },
    onLeave: function(element, position) {
      $('#right_nav li').removeClass('current');
    }
  });
  
  $('#right_nav').scrollspy({
    min: $('#marketer').offset().top - 100,
    max: 10000,
    onEnter: function(element, position) {
      $('#right_nav li').removeClass('current');
      $('#right_nav li.marketer').addClass('current');
    },
    onLeave: function(element, position) {
      $('#right_nav li').removeClass('current');
    }
  });
  
  $('#right_nav').scrollspy({
    min: $('#about_us').offset().top - 100,
    max: 10000,
    onEnter: function(element, position) {
      $('#right_nav li').removeClass('current');
      $('#right_nav li.about').addClass('current');
    },
    onLeave: function(element, position) {
      $('#right_nav li').removeClass('current');
    }
  });
  
  $('#right_nav').scrollspy({
    min: $('#contact_guide').offset().top - 480,
    max: 10000,
    onEnter: function(element, position) {
      $('#right_nav li').removeClass('current');
      $('#right_nav li.contact').addClass('current');
    },
    onLeave: function(element, position) {
      $('#right_nav li').removeClass('current');
    }
  });
  
  $("#home_slider").slides();
  app.run("#/");
});
