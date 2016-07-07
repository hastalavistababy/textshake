/**
 * @name       Textshake
 * @author     Mogeli lortkipanidze <lortkipanidzemogeli@gmail.com>
 * @version    0.1.1
 *
 * @requires   jQuery
 *
 * Copyright (c) 2016 by Mogeli lortkipanidze
 */
 
(function($){
	$.fn.textShake = function(time, step,  maintext, shaketext, afteraction){
		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
			el = $(this),

		shakeInterval = setInterval(function(){

			time -= step;
			var element;
			if(time - step >= 0) {
				element = maintext.split("");
				for (var l = 0; l < element.length; l++) {
					element[l].match(/[a-z]/gi) && (element[l] = alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
				}
				el.text(element.join(""));
			}
			else {
				if(0 >=time) {
					clearInterval(shakeInterval);
					el.text(shaketext);
					if(typeof afteraction == "function") {
						afteraction();
					}
				}
			}


		}, step);
	}
}( jQuery ));