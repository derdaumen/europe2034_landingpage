/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// Fit Text Plugin for Main Header
$("h1").fitText(
  1.2, {
    minFontSize: '24px',
    maxFontSize: '48px'
  }
);

$(".bg").interactive_bg({
  strength: 20,
  scale: 1.02,
  animationSpeed: "100ms",
  contain: true,
  wrapContent: false
});
// change background size on window resize
$(window).resize(function() {
  $(".bg > .ibg-bg").css({
    width: $(window).outerWidth(),
    height: $(window).outerHeight()
  })
})

// get login state
var loginState = LoginState.get("europe2034loginstate");
if(loginState) {
  console.log(loginState);
} else {
  console.log('not logged in');
}
