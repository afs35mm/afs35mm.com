var AFS = AFS || {};

AFS.App = (function(){

	var config = {
		$container : $('#container')
	};

	var injectAspectRatio = function(){
		$('.item').prepend('<div class="aspectRatio"></div>');
	}

	var bindDomEvents = function(){
		//update columnWidth on window resize
		$(window).smartresize(function(){
			console.log(config.$container.width());
			isotopeInit();	
			// if(config.$container.width() < 720 ){
			// 	config.$container.isotope( 'destroy' );
			// }else{
			// 	isotopeInit();	
			// }
		});
	};

	var isotopeInit = function(){
		config.$container.isotope({
			itemSelector : '.item',
			masonry: { columnWidth: config.$container.width() / 4 },
		});
	};

	var init = function(){
		// initialize Isotope
		//isotopeInit();
		//bindDomEvents();
		
		var $container = $('#container'),
		  $body = $('body'),
		  colW = 60,
		  columns = null;

		$container.isotope({
		// disable window resizing
		resizable: false,
		masonry: {
		  columnWidth: colW
		}
		});

		$(window).smartresize(function(){
		// check if columns has changed
		var currentColumns = Math.floor( ( $body.width() -10 ) / colW );
		if ( currentColumns !== columns ) {
		  // set new column count
		  columns = currentColumns;
		  // apply width to container manually, then trigger relayout
		  $container.width( columns * colW )
		    .isotope('reLayout');
		}

		}).smartresize(); // trigger resize to set container width
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	AFS.App.init();
});


