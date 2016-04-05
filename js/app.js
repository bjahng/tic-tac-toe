$(function(){

	var state = 0;

	$(".box").click(function() {
		
		if ( $(this).hasClass("ex") || $(this).hasClass("oh") ) {
			event.preventDefault();
		}
		else if ( state == 0 ) {
			$(this).addClass("ex");
			state = 1;
		}
		else {
			$(this).addClass("oh");
			state = 0;
		}
	});

	$(".new_game").click(function() {
		$(".box").removeClass("ex");
		$(".box").removeClass("oh");
	});


});