jQuery(document).ready(function () {
	
	alert('Hey JQuery');

	jQuery('.page-header').addClass('bgc');

	alert('class added');

	jQuery('.page-header').removeClass('bgc');

	x = jQuery('.page-header').height();
	console.log(x);
	jQuery('.value').html(x);


	jQuery('.page-header').height(120);

	x = jQuery('.page-header').height();
	console.log(x);
	jQuery('.value').html('<span class="bgc">'+ x +'</span>');

});

