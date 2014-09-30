$(document).ready(function () {
	$(".menu-button").on("click", function() {

		$("header").toggleClass("headerHeight");
		$(".wrapper header nav").toggleClass("show");
	})

})