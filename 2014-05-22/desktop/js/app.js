var App = function() {
	var that = this;
	var imgs = $('#slider img');
	var imgsArr = [];
	var num = 0;
	var i;
	this.on = function() {
		that.startAd();
	}
	this.off = function() {

	}
	this.startAd = function(){
		$(imgs).each(function(index, img) {
			imgsArr[index]=img;
			// that.cycleImages(index);
		});

		setTimeout(function(){
			for (var j = imgsArr.length - 1; j >= 0; j--) {			
				that.cycleImages(j);
				num++
			};
		}, 2000);
		// if(i = 0){
		// 	$(imgsArr[0]).removeClass('fadeOut');
		// }
		
	}
	this.cycleImages = function(i) {
		setTimeout(function() {
			
			if(i != 0 ){ 
				$(imgsArr[i]).addClass('fadeOut');
				//$(imgsArr[2]).removeClass('fadeOut') 
			}else{
				
			}
		}, 2500 * num);


	}

};