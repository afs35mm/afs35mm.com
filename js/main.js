var AFS = AFS || {};

AFS.App = (function(){

	var config = {
		container : document.querySelector('#container'),
		containerWidth: null,
		hasTouch: Modernizr.touch,
	};

	var bindDomEvents = function(){
		$( window ).resize(function() {
			config.containerWidth = $('#container').width();
			makePacketry();
		});
		$( document ).mousemove(function( event ) {
			var fillPercentage = (( event.pageX  ) / config.containerWidth );
			//console.log(fillPercentage);
			//$('circle').attr('fill-opacity', fillPercentage );
		});
		$('.item').on('mouseenter mouseleave', addHoverClass);
	};

	var addHoverClass = function(){
		var $this = $(this);
		if(!config.hasTouch){
			//$this.toggleClass('hover');	
			console.log($this.children('bg'));
			$this.children('.bg').animate({ marginTop: '0px'},80);
		}else{
			//$this.children('bg').animate('marginTop', 0);
		}
		
	};

	var makePacketry = function(){
		var pckry = new Packery( config.container, {
		  itemSelector: '.item',
		  isResizeBound : false,
		});

	};

	var init = function(){
		config.containerWidth = $('#container').width();
		$('.item').fadeIn();
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


