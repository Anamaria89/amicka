(function ($) {
$(document).ready(function() {
	
	//hide .navbar first
	$(".navscroll").hide();
	
	//fade in .navbar
	$(function () {
		$(window).scroll(function () {
			
			if ($(this).scrollTop() >200) {
				$('.navscroll').fadeIn();
			} else {
				$('.navscroll').fadeOut();
			}
		});
	});
});
}(jQuery));