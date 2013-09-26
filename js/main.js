var AFS = AFS || {};

AFS.App = (function(){

	var config = {
		container : document.querySelector('#container'),
		containerWidth: null,
		hasTouch: Modernizr.touch,
		$item: $('.projectItem'),
		menuShown: null,
		currentProject: null,
	};

	var bindDomEvents = function(){
		$( window ).resize(function() {
			config.containerWidth = $('#container').width();
			makePacketry();
		});
		
		$('.projectItem').on('click', function(e){
			var projectClicked = $(this).data('project');
			AFS.inject.showProject( projectClicked );
        	e.preventDefault();
		});

		$('#X').on('click', function(){
			window.location.hash = '';
			AFS.inject.toggleStage( );
		});

		if(!config.hasTouch){
			config.$item.hover(bgShowAndHide, bgShowAndHide);
			config.$item.children('.bg').addClass('showHideBG');
		}
	};

	var bgShowAndHide = function(){
		$bg = $(this).children('.bg'),
		bgHeight = $bg.outerHeight();

		if(Modernizr.csstransitions){
			$bg.addClass('cssTransitions').toggleClass('showHideBG');
		}else{
			if(config.menuShown != true){
				$bg.animate({'marginTop': 0});
				config.menuShown = true;
			}else{
				$bg.animate({'marginTop': '-' + bgHeight });
				config.menuShown = false;
			}
		}
	};

	var hideBG = function(){
		config.$item.children('.bg').each(function(){
			var bgHeight = $(this).outerHeight();
			$(this).css('marginTop', -bgHeight );
		});
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
		if(window.location.hash != ''){
			var hash = window.location.hash.slice(2) ;
			$('div[data-project="' + hash + '"]').trigger('click');
		}

	};

	return {
		init: init,
	};
	

})();

$('document').ready(function(){
	AFS.App.init();
});


