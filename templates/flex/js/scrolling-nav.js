
// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(function($) {
    $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1400, 'easeInOutCubic');
		window.location.hash = ''; // for older browsers, leaves a # behind
		history.pushState('', document.title, window.location.pathname); // nice and clean
        event.preventDefault();
    });
});


