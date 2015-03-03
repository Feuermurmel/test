(function () {
	var payload = function ($) {
		var rowElements = $('td:first-child:contains(Feuermurmel)').parent().children();
		var commentField = rowElements.eq(-3);
		var choiceFields = rowElements.toArray().slice(1, rowElements.length - 3);
		var nameField = rowElements.eq(0);
		
		console.log(choiceFields);
		
		var imgElem = $(document.createElement('div'));
		
		imgElem.attr('style', 'width: 32.5px; height: 24px; background-image: url("buck.png"); background-size: 32.5px; background-origin: content-box; cursor: pointer;');
		
		$(imgElem).on(
			'click',
			function () {
				document.location.hash = 'pony=off';
				document.location.reload();
			});
		
		commentField.empty().append(imgElem);
		
		var frame = 0;
		var frameDurations = [500, 400, 100, 200, 150, 100, 100, 150, 100, 100, 100];
		
		function update() {
			frame += 1;
			
			if (frame == frameDurations.length) {
				frame = 0;
			}
			
			if (frame == 7) {
				window.setTimeout(
					function () {
						choiceFields = [].concat(choiceFields.slice(1), [choiceFields[0]]);
						
						$(choiceFields).detach().insertAfter(nameField);
					},
					frameDurations[frame] / 3);
			}
			
			imgElem.css('background-position', 'left top ' + -24 * frame + 'px');
			
			window.setTimeout(update, frameDurations[frame]);
		}
		
		update();
	}
	
	var getScript = function (url, success) {
		var script = document.createElement('script');
		var head = document.getElementsByTagName('head')[0];
		var done = false;
		
		var onload = function() {
			if(!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
				done = true;
				script.onload = null;
				script.onreadystatechange = null;
				head.removeChild(script);
				
				success();
			}
		}
		
		script.onload = onload;
		script.onreadystatechange = onload;
		script.src = url;
		
		head.appendChild(script);
	}
	
	if (document.location.hash.indexOf('pony=off') < 0) {
		if (typeof jQuery === 'undefined') {
			getScript(
				'https://code.jquery.com/jquery-2.1.1.min.js',
				function() {
					if (typeof jQuery !== 'undefined') {
						payload(jQuery.noConflict());
					}
				});
		} else {
			payload(jQuery);
		}
	}
})();
