$(document).ready(function () {
	
	alert('Hey JQuery');

	$('.page-header').addClass('bgc');

	alert('class added');

	$('.page-header').removeClass('bgc');

	x = $('.page-header').height();
	console.log(x);
	$('.value').html(x);


	$('.page-header').height(120);

	x = $('.page-header').height();
	console.log(x);
	$('.value').html('<span class="bgc">'+ x +'</span>');

});

