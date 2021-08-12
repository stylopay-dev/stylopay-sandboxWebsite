// FUNCTIONS


function mh100() { // set min-height as window height
	$('.mh100').height($(window).height());
}

function changeHeader() {
	if ($(window).scrollTop() > 10) {
		$('header').addClass('scrolled');
	} else {
		$('header').removeClass('scrolled');
	}
}


// RUN


$(document).ready(function() { // run when document is ready

// **************** MOBILE MENU ****************** 

	$('#mobile_btn, #mobile_btn2').click(function () {
		$(this).toggleClass('active');
		$("#header_nav").stop().slideToggle();
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// **************** SLIDERS ****************** 
	$('.bg-slider-1').slick({
		dots: false,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-1',
		swipe:false,
		infinite: true,
		autoplay: true,
        autoplaySpeed: 5000,
        draggable:false
	});


	$('.slider-1').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false,
        draggable:false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.bg-slider-1',
		infinite: true
	});

	$('#m16-slider').slick({
		dots: true,
		arrows: false,
		infinite: false,
		/*autoplay: true,
		autoplaySpeed: 1000,*/
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.feedback-slider').slick({
		dots: true,
		arrows: true,
		infinite: false,
		/*autoplay: true,
		autoplaySpeed: 1000,*/
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.token-slider').slick({
		dots: false,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('#slider_in_mobile,#slider_in_mobile3,#slider_in_mobile4').slick({
	  dots: true,
	  infinite: true,
	  arrows: false,
	  speed: 300,
	  fade: true,
	  slidesToShow: 1,
	  draggable: true,
	  adaptiveHeight: true,
	  autoplay: true
	});
	$('.slider-partners').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		draggable:true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 580,
				settings: {
					slidesToShow: 3,
					variableWidth: true,
					centerMode: true
				}
			}
	   ]
	});
	$('.slider-news').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		draggable:true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 580,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	//$('#slider_in_mobile3').slick({
	//  dots: true,
	//  infinite: true,
	//  arrows: false,
	//  speed: 300,
	//  fade: true,
	//  slidesToShow: 1,
	//  draggable: true,
	//  adaptiveHeight: true
	//});

 
// **************** TABS ****************** 

	$('.tabs_link').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('disabled')) {
			return false;
		}
		var id = $(this).attr('href'),
			top = $('.tabs_block').offset().top - 125;
		$('.tabs_link').removeClass('active');
		$(this).addClass('active');
		$('body,html').animate({scrollTop: top}, 1000);
		$('.tabs_block_content').stop().fadeOut();
		$(id).stop().delay(400).fadeIn();
		if ( $(id + ' #emulation-slider').length ) {
			if ( !$(id + ' #emulation-slider .slick-slide').length) {
				setTimeout(function() {
					$('#emulation-slider').slick({
                        dots:true,
						appendDots:'.benefNav',
                        customPaging : function(slider, i) {
                                var title = $(slider.$slides[i]).data('title');
                                return '<span>'+title+'</span>';},
						arrows: false,
						infinite: false,
						/*autoplay: true,
						autoplaySpeed: 1000,*/
						speed: 300,
						swipe:false,
						draggable:false,
						slidesToShow: 1,
						slidesToScroll: 1
					});
				}, 500);
			}
		} else if( $(id + ' #management-slider').length ) {
			if ( !$(id + ' #management-slider .slick-slide').length ) {
				setTimeout(function() {
					$('#management-slider').slick({
						dots: true,
						arrows: false,
						infinite: false,
						/*autoplay: true,
						autoplaySpeed: 1000,*/
						speed: 300,
						swipe:false,
						draggable:false,
						slidesToShow: 1,
						slidesToScroll: 1
					});
				}, 500);
			}
		} else if( $(id + ' #token-slider').length ) {
			if ( !$(id + ' #token-slider .slick-slide').length ) {
				setTimeout(function() {
					$('#token-slider').slick({
						dots: false,
						arrows: false,
						fade: true,
						autoplay: true,
						autoplaySpeed: 2000,
						swipe:false,
						draggable:false,
						speed: 300,
						slidesToShow: 1,
						slidesToScroll: 1
					});
				}, 500);
			}
		}
	});

	$('.tabs_link2').click(function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $('.tabs_block2').offset().top - 125;
		$('.tabs_link2').removeClass('active');
		$(this).addClass('active');
		$('body,html').animate({scrollTop: top}, 1000);
		$('.tabs_block_content2').fadeOut();
		$(id).stop().delay(400).fadeIn();
		//$(id).next().stop().delay(400).fadeIn();
	});

	$('.disabled').click(function(e) {
		e.preventDefault();
		return false;
	});

	$('ul.m_tab_caption').on('click', 'li:not(.active)', function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.m_tab').find('div.m_tab_content').removeClass('active').eq($(this).index()).addClass('active');
	});

// **************** GO DOWN ****************** 

	$('.go-down').click(function() {
		$('html, body').animate({scrollTop: $(window).height()}, '500');
	});

// **************** ACCORDION ****************** 

	$('.accordion').find('.ttl').click(function() {
		var t = $(this),
			li = t.closest('li'),
			content = li.find('.content');
		if (li.hasClass('open')) {
			li.removeClass('open');
			content.slideUp(300);
		} else {
			li.siblings('.open').removeClass('open').find('.content').slideUp(300);
			li.addClass('open').find('.content').slideDown(300);
		};
	});

	$('.anchor').click(function(e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 1500);
	});

// ***************** FORM SEND ***************** 
	$(".subscribe").submit(function() {
		if ($(this).valid()) {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				alert("Sended");
				setTimeout(function() {
					
					$(".subscribe").trigger("reset");
				}, 1000);
			});
			return false;
		}
	});

	$(".order_form").submit(function() {
		if ($(this).valid()) {
			$('.modal_thanks').addClass('active');
			$('.bckg_for_modal_thanks').addClass('active');
			$.ajax({
				type: "POST",
				url: "mail2.php",
				data: $(this).serialize()
			}).done(function() {
				//alert("Sended");
				setTimeout(function() {
					
					$(".order_form").trigger("reset");
				}, 1000);
			});
			return false;
		}
	});

	$('.bckg_for_modal_thanks').click(function(){
		$(this).removeClass('active');
		$('.modal_thanks').removeClass('active');
	});
	$('.close_modal_thanks').click(function(){
		$('.modal_thanks').removeClass('active');
		$('.bckg_for_modal_thanks').removeClass('active');
	});

	$(".form_modal").submit(function() {
		if ($(this).valid()) {
			$.ajax({
				type: "POST",
				url: "mail2.php",
				data: $(this).serialize()
			}).done(function() {
				//alert("Sended");
				location.href='pdf_page.html';
				setTimeout(function() {
					
					$(".form_modal").trigger("reset");
				}, 1000);
			});
			return false;
		}
	});
	$('.form_thanking').submit(function(){
		if ($(this).valid()){
			$('.modal_thanks2').addClass('active');
			$('.bckg_for_modal_thanks').addClass('active'); 
			$(".form_thanking").trigger("reset").removeClass('active');
			$('.footer-links_social_btn').show();
			return false;
		}
	});
// ************** FORM VALIDATION **************
	$(".form_thanking").validate({
		rules:{ 
			mail:{
				required: true,
				email: true
			}
		}

	});

	$(".order_form").validate({
		rules:{
			name:{
				required: true,
				minlength: 2,
				maxlength: 36
			},
			company:{
				required: true,
				minlength: 2,
				maxlength: 36
			},
			mail:{
				required: true,
				email: true
			}
		}
	});
	
	$(".form_modal").validate({
		rules:{
			name:{
				required: true,
				minlength: 2,
				maxlength: 36
			},
			company:{
				required: true,
				minlength: 2,
				maxlength: 36
			},
			mail:{
				required: true,
				email: true
			}
		}
	});

// DROPDOWN
	$('.footer-links_social_btn').click(function(){
		$('.form_thanking').addClass('active');
		$(this).hide();
		return false;
	});

	$("#choice-select").click(function () {
		$("#choice-select_list").stop().slideToggle();
	});

	$(".choice-select_list_item").click(function () {
		var text = $(this).text();
		console.log(text);
		$("#choice-select").text(text);
		$("#build-integration").val(text);
		$("#choice-select_list").stop().slideUp();
	});
// END DROPDOWN

/* Color Picker*/
$(function () {
		$('#date-called').datetimepicker();
	});
	$('#colorSelector').ColorPicker({
		color: '#ffffff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#phone-background').css('backgroundColor', '#' + hex);
		}
	});
	jQuery(document).ready(function($) {

		$('.photo_list img').click(function(){
			$('.image').html('<img src="" height="359" >');
			$('.image img ').attr('src', $(this).attr('src'));

		});

	});
// End CP


// *******   Constructor  ******* //

$('#drag-and-drop-zone').dmUploader({
		url: 'upload.php',
		dataType: 'json',
		allowedTypes: 'image/*',
		onInit: function(){
			$.danidemo.addLog('#demo-debug', 'default', 'Plugin initialized correctly');
		},
		onBeforeUpload: function(id){
			$.danidemo.addLog('#demo-debug', 'default', 'Starting the upload of #' + id);

			$.danidemo.updateFileStatus(id, 'default', 'Uploading...');
		},
		onNewFile: function(id, file){
			$.danidemo.addFile('#demo-files', id, file);

			/*** Begins Image preview loader ***/
			if (typeof FileReader !== "undefined"){

				var reader = new FileReader();

				// Last image added
				var img = $('#demo-files').find('.demo-image-preview').eq(0);

				reader.onload = function (e) {
					img.attr('src', e.target.result);
				}

				reader.readAsDataURL(file);

			} else {
				// Hide/Remove all Images if FileReader isn't supported
				$('#demo-files').find('.demo-image-preview').remove();
			}
			/*** Ends Image preview loader ***/

		},
		onComplete: function(){
			$.danidemo.addLog('#demo-debug', 'default', 'All pending tranfers completed');
		},
		onUploadProgress: function(id, percent){
			var percentStr = percent + '%';

			$.danidemo.updateFileProgress(id, percentStr);
		},
		onUploadSuccess: function(id, data){
			$.danidemo.addLog('#demo-debug', 'success', 'Upload of file #' + id + ' completed');

			$.danidemo.addLog('#demo-debug', 'info', 'Server Response for file #' + id + ': ' + JSON.stringify(data));

			$.danidemo.updateFileStatus(id, 'success', 'Upload Complete');

			$.danidemo.updateFileProgress(id, '100%');
		},
		onUploadError: function(id, message){
			$.danidemo.updateFileStatus(id, 'error', message);

			$.danidemo.addLog('#demo-debug', 'error', 'Failed to Upload file #' + id + ': ' + message);
		},
		onFileTypeError: function(file){
			$.danidemo.addLog('#demo-debug', 'error', 'File \'' + file.name + '\' cannot be added: must be an image');
		},
		onFileSizeError: function(file){
			$.danidemo.addLog('#demo-debug', 'error', 'File \'' + file.name + '\' cannot be added: size excess limit');
		},
		onFallbackMode: function(message){
			$.danidemo.addLog('#demo-debug', 'info', 'Browser not supported(do something else here!): ' + message);
		}
	});

// End Constructor

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
/*Our Solutions*/
 const ourSolutions=document.querySelector('.ourSolutions');
 const dropDown=document.querySelector('.dropdown');
 ourSolutions.addEventListener('mouseover',function(){
	dropDown.style.display="flex";
 });

 ourSolutions.addEventListener('mouseleave',function(){
	dropDown.style.display="none";
 });
 