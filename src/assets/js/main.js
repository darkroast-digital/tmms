$(document).ready(function() {

// var userFeed = new Instafeed({
//   get: 'user',
//   userId: '6678174',
//   accessToken: '6678174.dcb4dc5.22dfed692290436f9737ffcb9938b819',
//   resolution: 'standard_resolution',
//   limit: 9,
//   template: '<a href="{{link}}" target="_blank"><img src="{{image}}"></a>',
// });

// userFeed.run();

  var $main_color = '#2d313f',
    $saturation= -20,
    $brightness= 5;

  //we define here the style of the map
  var style= [ 
    {
      //set saturation for the labels on the map
      elementType: "labels",
      stylers: [
        {saturation: $saturation}
      ]
    },  
      { //poi stands for point of interest - don't show these lables on the map 
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      //don't show highways lables on the map
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
              {visibility: "off"}
          ]
      }, 
    {   
      //don't show local road lables on the map
      featureType: "road.local", 
      elementType: "labels.icon", 
      stylers: [
        {visibility: "off"} 
      ] 
    },
    { 
      //don't show arterial road lables on the map
      featureType: "road.arterial", 
      elementType: "labels.icon", 
      stylers: [
        {visibility: "off"}
      ] 
    },
    {
      //don't show road lables on the map
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {visibility: "off"}
      ]
    }, 
    //style different elements on the map
    { 
      featureType: "transit", 
      elementType: "geometry.fill", 
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    }, 
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.government",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.sport_complex",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.attraction",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    },
    {
      featureType: "landscape",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
      
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    }, 
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { hue: $main_color },
        { visibility: "on" }, 
        { lightness: $brightness }, 
        { saturation: $saturation }
      ]
    }
  ];



var element =  document.getElementById('map');

if (typeof(element) != 'undefined' && element != null) {
  var map = new GMaps({
  div: '#map',
  lat: 42.233913,
  lng: -82.960849,
  scrollwheel: false,
  styles: style,
});

  map.addMarker({
  lat: 42.233913,
  lng: -82.960849,
  icon: '../assets/img/icon-location.svg'
});
}



// Hide Nav on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

var menu = $('.menu');
var trigger = $('.menu-trigger');

trigger.click(function() {
    $(this).toggleClass('is--active');
    menu.toggleClass('is--active');
});

//FORM =======================================

var careersForm = $('#careers-form');
var formMessages = $('.form-messages');

$(careersForm).submit(function (event) {
      event.preventDefault();
      //grab all form data  
      var formData = new FormData($(this)[0]);

      $.ajax({
          url: $(careersForm).attr('action'),
          type: 'POST',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: function (returndata) {
              $(formMessages).html('Thanks for your interest in working at TMMS Inc.  We\'ll be in touch soon!');

              $(formMessages).removeClass('error');
              $(formMessages).addClass('success');

              $('#careers-form input').val('');
              $('#careers-form textarea').val('');
          },
          error: function () {
              $(formMessages).html('Oh no!  Something went wrong, give it a try agian.');

              $(formMessages).removeClass('success');
              $(formMessages).addClass('error');

              $('#careers-form input').val('');
              $('#careers-form textarea').val('');
          }
      });

      return false;
  });

});