$(document).ready(function () {
	
	$('.mobile-menu').click(function () {
		$('.site-links').toggleClass('menu-open');
	});



/*
	$('.readmore').click(function (e) {
		e.preventDefault();
		$('.value').html('clicked');
		$('.more').addClass('showmore');
		$(this).html('show less');
	});
*/

		counter = 0;

		$('.value').html(counter);


	$('.readmore').click(function (e) {
		e.preventDefault();
		//$('.more').slideToggle(600);
		$(this).prev('.more').slideToggle(500,counterplus());

		var btntxt = $(this).html();

		if(btntxt == 'show less'){
			$(this).html('show more');
		}else{
			$(this).html('show less');
		}
	});

	function counterplus () {
		counter++;
		$('.value').html(counter);
	};


});

