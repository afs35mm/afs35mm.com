var AFS = AFS || {};

AFS.App = (function(){

	var config = {
		container : document.querySelector('#container'),
	};

	var bindDomEvents = function(){
		$( window ).resize(function() {
			makePacketry();
		});
	};

	var makePacketry = function(){
		console.log('making packets!');
		var pckry = new Packery( config.container, {
		  itemSelector: '.item',
		  isResizeBound : false,
		});
	};
	var init = function(){
		bindDomEvents();
		makePacketry();
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	AFS.App.init();
});


