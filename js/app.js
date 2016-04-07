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
		
		win_checker();
	});

	var win_checker = function() {

		var winners = [
		[".r1.c1", ".r1.c2", ".r1.c3"],
		[".r2.c1", ".r2.c2", ".r2.c3"],
		[".r3.c1", ".r3.c2", ".r3.c3"],
		[".r1.c1", ".r2.c1", ".r3.c1"],
		[".r1.c2", ".r2.c2", ".r3.c2"],
		[".r1.c3", ".r2.c3", ".r3.c3"],
		[".r1.c1", ".r2.c2", ".r3.c3"],
		[".r1.c3", ".r2.c2", ".r3.c1"]
		];

		for ( x=0; x < winners.length; x++) {
			if ( $(winners[x][0]).hasClass("ex") && $(winners[x][1]).hasClass("ex") && $(winners[x][2]).hasClass("ex") ) {
				$(".results").prepend("<p>Player X Wins!</p>");
				return false;
			}
			else if ( $(winners[x][0]).hasClass("oh") && $(winners[x][1]).hasClass("oh") && $(winners[x][2]).hasClass("oh") ) {
				$(".results").prepend("<p>Player O Wins!</p>");
				return false;
			}
			else if ( $(".ex").length + $(".oh").length == 9 ) {
				$(".results").prepend("<p>It's a tie!</p>");
				return false;
			}
		}
	}


	$(".new_game").click(function() {
		$(".box").removeClass("ex");
		$(".box").removeClass("oh");
		$(".results").children().remove("p");
	});

});