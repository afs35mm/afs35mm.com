var AFS = AFS || {};

AFS.inject = (function(){

	var config = {
		stage: $('#stage'),
		source: $("#projectInfo").html(),
		stageOpen: false,
		slideSpeed: 600,
		currentProject: null,
	};

	var showProject = function(projectID){
	 
	 	if(projectID == undefined || projectID == config.currentProject) return;

	 	window.location.hash = '!' + projectID;

	 	if(!config.stageOpen){
	 		toggleStage();
	 		injectTemplate(projectID);
	 	}else{
	 		toggleStage(function(){
				injectTemplate(projectID);
	 			toggleStage(function(){
	 						
	 			});
	 		});
	 	}
	 	config.currentProject = projectID;

	};

	var injectTemplate = function(projectArg){
		var template = Handlebars.compile(config.source);
		$("#inner").empty();
		$("#inner").append(template(AFS.projects[projectArg]));
		$( "#inner ul" ).children().not(':last-child').append( '<span>/</span>' );
	};


	var toggleStage = function(callback){
		$("html, body").animate({ scrollTop: 0 }, config.slideSpeed);
		config.stage.slideToggle(config.slideSpeed,function(){
			if(callback){
				callback();
			}	
		});
		config.stageOpen = !config.stageOpen;
		config.currentProject = null;
	};

	return {
		showProject: showProject,
		toggleStage: toggleStage
	};
	

})();

