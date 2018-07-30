ubsApp.startHelp=function(pageName){

	document.getElementById("helpContent").style.opacity="0.95";
	$('#helpContent').css("height",(screenHeight)+'px')
	$('#helpContent').css("width",(screenWidth)+'px')
	helpScenarioOpen=true;
	ubsApp.renderHelpPage(ubsApp.pages[pageName].templates);
}

ubsApp.renderHelpPage=function(template){
	let html = "";
	for(let i=0; i< template.length; i++) {
		let templateConfig = template[i];
		if(templateConfig.templateType=="static"){
			html+=ubsStaticTemplate(templateConfig);
		}
	}
	document.getElementById("helpContent").innerHTML+=html;
}

ubsApp.closeHelp=function(){

	$('#helpContent').css("height",0+'px')
	document.getElementById("helpContent").innerHTML="";
	helpScenarioOpen=false;
}