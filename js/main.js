var AFS = AFS || {};

AFS.App = (function(){

	var config = {
		$container: $('#container'),
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
		config.$container.width( $(window).width() * .99 );
	};

	var init = function(){
		resizeContainer();
		makePacketry();
		config.$container.packery('unbindResize');
		bindDomEvents();
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	AFS.App.init();
});


