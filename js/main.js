var AFS = AFS || {};

AFS.App = (function(){

	var config = {

	};


	var bindDomEvents = function(){
		
	};

	var init = function(){
		var $container = $('#container');
		$container.masonry({
			itemSelector: '.item',
			transitionDuration: 0
		});
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	AFS.App.init();
});


