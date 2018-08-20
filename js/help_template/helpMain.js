ubsApp.startHelp=function(pageName){

    ubsApp.closeHelp();
	document.getElementById("helpContent").style.opacity="0.95";
	$('#helpContent').css("height",(screenHeight)+'px')
	$('#helpContent').css("width",(screenWidth)+'px')
	helpScenarioOpen=true;
	ubsApp.renderHelpPage(ubsApp.pages[pageName].templates);
}

ubsApp.renderHelpPage=function(template){
	let html = "";
	for(let i=0; i< template.length; i++) {
		let templateConfig = $.extend({},template[i]);
		if(templateConfig.templateType=="static"){
			html+=ubsStaticTemplate(templateConfig);
		} else if(templateConfig.templateType ==  "popup") {
            document.getElementById("helpContent").style.opacity="1";
            document.getElementById("helpContent").style["background-color"] = "transparent";
        	html += ubsApp.getPopupHtml(templateConfig);
        	ubsApp.popupConfig = {};

		}

	}
	document.getElementById("helpContent").innerHTML+=html;
}

ubsApp.closeHelp=function(){

	$('#helpContent').css("height",0+'px')
	document.getElementById("helpContent").innerHTML="";
	helpScenarioOpen=false;
  document.getElementById("helpContent").style.opacity="0.95";
  document.getElementById("helpContent").style["background-color"] = "rgb(105,105,105)";
}