var App = function() {
	var that = this;
	var imgs = $('#slider img');
	var imgsArr = [];
	var num = 0;
	var i;
	var pfx = ["-webkit", "-moz", "MS", "o", ""];
	var prefixedEventListener = function(element, type, callback) {
	    for (var p = 0; p < pfx.length; p++) {
	        if (!pfx[p]) type = type.toLowerCase();
	        element.addEventListener(pfx[p]+type, callback, false);
	    }
	}
	this.on = function() {
		that.startAd();
	}
	this.off = function() {
		
	}
	this.startAd = function(){
		$(imgs).each(function(index, img) {
			imgsArr[index]=img;
			
		});

		that.cycleImages();
	}
	this.cycleImages = function() {
		console.log('cycle');

		for(var i = 1; i < imgsArr.length; i++) {
			that.fadeImage(i, $(imgsArr[i]));
		}

		setTimeout(function(){
			that.resetImages();
		}, 3100 * (imgsArr.length));
	}
	this.fadeImage = function(i, img) {
		setTimeout(function(){
			img.addClass('fadeOut');
		}, 1000 * i);
	}
	this.resetImages = function(){
		$('#slider img').removeClass('fadeOut');

		setTimeout(function(){
			that.cycleImages();
		}, 3000);
	}


};