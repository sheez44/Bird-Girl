$(document).ready(function () {
	$(".menu-button").on("click", function() {

		$("header").toggleClass("headerHeight");
		$(".wrapper header nav").toggleClass("show");
	});

	$(window).scroll(function(event) {
		var y = $(this).scrollTop();

		if(y >= 400) {
			$('#bird').addClass('animate');
		}

		if(y >= 100) {
			$('.sub-img').addClass('grow-img');
			$('.sub-img span').addClass('grow-img');
		}

		if(y >= 800) {
			$('.email-box').addClass('animated bounceInLeft');
		}

		if(y >= 1200) {
			$('#phone').addClass('animated shake ring');
		}
	});
});