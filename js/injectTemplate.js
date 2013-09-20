var AFS = AFS || {};

AFS.inject = (function(){

	var showStage = function(){
	 	$("html, body").animate({ scrollTop: 0 }, 600);
		//$('#stage').animate('height')
	};

	return {
		showStage: showStage,
	};
	

})();

