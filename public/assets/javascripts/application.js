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
});
