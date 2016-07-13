$(function(){
	var mobileHeader = 768;
	$(window).resize(function() {
		var screenWidth = getCurrentWidth();
	    if ( mobileHeader >= screenWidth ) {
			$('h1').addClass('mobile-h1');
			$('#header-nav').addClass('mobile-nav');
	    } else {
			$('h1').removeClass('mobile-h1');
			$('#header-nav').removeClass('mobile-nav');
	    }
	});

function getCurrentWidth() {
    return $(window).width();
    }
});