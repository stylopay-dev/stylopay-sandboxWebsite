$(document).ready(function($){

// MOVE TO
	$(".platform_list_item").click(function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 125;
		$('body,html').animate({scrollTop: top}, 1000);
	});
// END MOVE TO

});
