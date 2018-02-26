import $ from 'jquery';
import jQuery from 'jquery'; // 1 of 2: hAcK for getting jQuery usable on its own
import whatInput from 'what-input';
import 'waypoints/lib/noframework.waypoints.js';

window.$ = $;

window.jQuery = jQuery; // 2 of 2: hAcK for getting jQuery usable on its own

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// Open reveal cards on hover based on screen size
function hoverToggleRevealCard(bool) {
  if (bool) {
    $('.card-reveal-wrapper').hover(function(){
      $(this).find('.card-reveal').toggleClass('open');
    });
  }
}

$(document).foundation();

// PROTOTYPE ONLY - add active class to nav item
!function () {
   var href = location.href;
   var pgurl = href.substr(href.lastIndexOf('/') + 1);
   // match all the anchors on the page with the html file name
   $('a[href="' + pgurl + '"]').parent().addClass('active');
}();

// Open / Close Reveal Hover on large screens
var largeScreen = Foundation.MediaQuery.atLeast('large');
hoverToggleRevealCard(largeScreen);
$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  if ((oldSize == 'small' || oldSize == 'medium') && newSize == 'large' ) {
    hoverToggleRevealCard(true);
    largeScreen = Foundation.MediaQuery.atLeast('large');
  }
  else if ((oldSize == 'large' || oldSize == 'xxlarge') && (newSize == 'small' || newSize == 'medium')) {
    hoverToggleRevealCard(true);
    largeScreen = Foundation.MediaQuery.atLeast('large');
  }
});

// Open Card Reveal Click
$('.card-section').click(function(){
  if (!largeScreen) {
    $(this).parent().parent().find('.card-reveal').toggleClass('open');
  }
});

// Close Card Reveal Click
$('.close-button').click(function(){
  if (!largeScreen) {
    $(this).parent().find('.card-reveal').toggleClass('open');
  }
});

// Fade the header when scrolling down
$(window).scroll(function() {
  $("header").css({
    'opacity': 1 - (($(this).scrollTop()) / ($(window).height() * .85))
  });
});

// Waypoints for showing and hiding nav bars 
var topNav = new Waypoint({
  element: document.getElementById('badge'),
  handler: function() {
    $('#top-nav').toggleClass('hide');
  },
  offset: 10
})

var mainNav = new Waypoint({
  element: document.getElementById('main-content'),
  handler: function() {
    $('#big-nav').toggleClass('hide');
  }
});
