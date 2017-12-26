$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

// Мобильное меню

$(function() {

	var menu = $('.nav_block');
	var closeLink = menu.find('.close_menu');
	var openLink = $('a.mobile_menu_btn');
	var overlay = $('.overlay');

	openLink.on('click', function(){
		menu.addClass('open');
		overlay.fadeIn();
		return false
	})
	closeLink.add(overlay).on('click', function(){
		menu.removeClass('open');
		overlay.fadeOut();
	})

});

// Меню категории

$(function() {

	var menu = $('.aside_menu_ul');
	var link = $('.category_menu_btn');

	link.on('click', function(){
		menu.slideToggle();
		return false
	})

});


// Модальное окно

$(function() {

	var modal = $('.modal');
	var link = $('a.subscribe');
	var close = modal.find('.close_modal');
	var overlay = $('.overlay');

	link.on('click', function(){
		modal.fadeIn();
		overlay.fadeIn();
		return false
	})
	overlay.add(close).on('click', function(){
		modal.fadeOut();
		overlay.fadeOut();
	})

});