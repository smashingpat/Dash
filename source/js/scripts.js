$(document).ready(function($) {

	/* ------------------------------
		Initiations
	------------------------------ */

	BP.menutoggle.init({
		trigger: $('#Hamburger'),
		element: $('ul[role="navigation"].mobile-nav')
	});

	BP.Pageprogression.init({
		element: $('.progression'),
		watch: $('.page-wrap')
	});


	/* ------------------------------
		On load functions
	------------------------------ */

	if(!Modernizr.svg) {
		$('img[src$=".svg"]').each(function() {
			// Replaces all SVG with PNG's
			$(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
		});
	}

});