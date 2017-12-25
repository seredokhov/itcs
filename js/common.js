$(function() {


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	
});

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