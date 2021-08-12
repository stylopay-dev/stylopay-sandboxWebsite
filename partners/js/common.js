// FUNCTIONS


function mh100() { // set min-height as window height
	$('.mh100').height($(window).height());
};

function changeHeader() {
	if ($(window).scrollTop() > 10) {
		$('header').addClass('scrolled');
	} else {
		$('header').removeClass('scrolled');
	}
};


// RUN


$(document).ready(function() { // run when document is ready

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.bg-slider-1').slick({
		dots: false,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe:false
	});

	$('.slider-1').slick({
		dots: true,
		arrows: false,
		/*autoplay: true,
		autoplaySpeed: 1000,*/
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.bg-slider-1'
	});

	$('.slider-3').slick({
		dots: true,
		arrows: false,
		infinite: false,
		/*autoplay: true,
		autoplaySpeed: 1000,*/
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.feedback-slider').slick({
		dots: true,
		arrows: true,
		infinite: false,
		/*autoplay: true,
		autoplaySpeed: 1000,*/
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.go-down').click(function() {
		console.log($(window).height());
		$('html, body').animate({scrollTop: $(window).height()}, '500');
	});

	$('.accordion').find('.ttl').click(function() {
		var t = $(this);
		if (t.closest('li').hasClass('open')) {
			t.closest('li').removeClass('open').find('.content').slideUp(300);
		} else {
			t.closest('.accordion').find('.open').removeClass('open').find('.content').slideUp(300);
			t.closest('li').addClass('open').find('.content').slideDown(300);
		};
	});

	mh100();
	changeHeader();
	
});

$(window).load(function() { // run after full load

	mh100();

});

$(window).resize(function() { // run on window resizing

	mh100();

});

$(window).scroll(function() { // run when user scroll window

	changeHeader();

});
