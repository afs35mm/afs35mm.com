var AFS = AFS || {};

AFS.App = (function(){

	var config = {
		$container: $('#container'),
		containerWidth: $('#container').width(),
		//c: document.getElementById("canvas"),
		//ctx: document.getElementById("canvas").getContext("2d"),
		//canvasWidth: $('#canvas').width(),
		//canvasHeight: $('#canvas').height(),
	};

	var bindDomEvents = function(){
		$( window ).resize(function() {
			resizeContainer();
			makePacketry();
		});
	};

	var makePacketry = function(){
		config.$container.packery({
			itemSelector: '.item',
			transitionDuration: '0',
		});
	};

	var resizeContainer = function(){
		console.log($(window).width(), config.containerWidth);
		config.$container.width( $(window).width() );
	};

	var init = function(){
		resizeContainer();
		makePacketry();
		config.$container.packery('unbindResize');
		bindDomEvents();

		// config.ctx.fillStyle="blue";
		// config.ctx.fillRect(0,0,config.canvasWidth,config.canvasHeight);
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	AFS.App.init();
});


