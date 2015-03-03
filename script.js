(function () {
	var payload = function ($) {
		var rowElements = $('td:first-child:contains(Feuermurmel)').parent().children();
		var commentField = rowElements.eq(-3);
		var choiceFields = rowElements.toArray().slice(1, rowElements.length - 3);
		var nameField = rowElements.eq(0);
		
		console.log(choiceFields);
		
		var imgElem = $(document.createElement('div'));
		
		imgElem.attr('style', 'width: 32.5px; height: 24px; background-image: url("data:image/png;base64,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"); background-size: 32.5px; background-origin: content-box; cursor: pointer;');
		
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
