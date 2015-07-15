 $(document).ready(function($){
 	var navFija = $('.headder__navigation'),
 		navFijaTop = navFija.offset().top;
 	var actualNav = $('#sub-navigation-active').text();
 	$(window).on('scroll', function(){
 		if($(window).scrollTop() > navFijaTop ) {
 			navFija.addClass('fijo');
 		} else {
 			navFija.removeClass('fijo');
 		}
 	});
});