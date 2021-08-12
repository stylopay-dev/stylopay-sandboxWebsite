$(document).ready(function($){

// MOVE TO
	$(".platform_list_item").click(function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 125;
		$('body,html').animate({scrollTop: top}, 1000);
	});
// END MOVE TO


// DROPDOWN
	$("#choice-select").click(function () {
		$("#choice-select_list").stop().slideToggle();
	});

	$(".choice-select_list_item").click(function () {
		var text = $(this).text();
		$("#choice-select").text(text);
		$("#build-integration").val(text);
		$("#choice-select_list").stop().slideUp();
	});
// END DROPDOWN
});
