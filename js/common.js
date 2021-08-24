

$(document).ready(function () {

	$('.login').magnificPopup();
	$('.try').magnificPopup();
	$('.read1').magnificPopup();

	$(".header-menu__burger").click(function () {
		$(this).toggleClass("on");
		$(".menu").slideToggle();
		return false;
	});

	$('.sleider__photo-items').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		animateOut: 'fadeOut',
		cssEase: "ease"
	});


	// скрол к якорю
	$('.menu a').click(function () {
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(this).removeClass("active");
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 60
		}, 500);
		return false;
	});

	scrollNav();


	$("#form").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				$.magnificPopup.close();
				th.trigger('reset');
			}, 1000);
		});
		return false;
	});

});


// кнопка прокрутки
var btn = $('#button');

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '300');
});

// wow анимация
new WOW().init();
var wow = new WOW(
	{
		boxClass: 'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 1,          // distance to the element when triggering the animation (default is 0)
		mobile: true,       // trigger animations on mobile devices (default is true)
		live: true,       // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		
		resetAnimation: false,     // reset animation on end (default is true)
	}
);
wow.init();


