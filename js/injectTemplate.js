var AFS = AFS || {};

AFS.inject = (function(){

	var config = {
		stage: $('#stage'),
	};

	var data = {
	  name: "Jack",
	  date: "12/04/12",
	  comment: "This is a really awesome tutorial. Thanks."
	}; 

	var showProject = function(projectID){
	 	toggleStage();

		if(projectID == undefined) return;
		
		var source = $("#projectInfo").html();
		var template = Handlebars.compile(source);
		$("#inner").empty();
		console.log(AFS.projects[projectID]);
		$("#inner").append(template(AFS.projects[projectID]));
		//console.log(projects[projectID]);
		$( "#inner ul" ).children().not(':last-child').append( '<span>/</span>' );
	};

	var toggleStage = function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		config.stage.slideToggle(600);
	};

	return {
		showProject: showProject,
		toggleStage: toggleStage
	};
	

})();

