var ubsStaticTemplate;
var ubsDecisionTemplate;
var ubsDecisionOption;
var ubsDecisionOptionMap;
var wheelOfFortuneTemplate;
var ubsApp = {};
ubsApp.wheelOfFortune = null;


$(document).ready(function(){
	//$("#staticTemplate").load("templates/staticTemplate.html"); 
	//$("#decisionTemplate").load("templates/decisionTemplate.html"); 
	ubsApp.intitializeTemplates();
	ubsApp.renderPage(ubsApp.pages.initPage);
});



ubsApp.renderPage = function(page) {
	var html = "";
	var wheelConfig = {};
	for(var i=0; i< page.length; i++) {
		var templateConfig = page[i];
		var templateType = templateConfig.templateType;
		if(templateType == "static") {
			html += ubsStaticTemplate(templateConfig);
		} else if(templateType == "decision") {
			html += ubsDecisionTemplate(templateConfig);
			ubsDecisionOption = templateConfig.options[0].optionName;
			ubsDecisionOptionMap = templateConfig.optionPageMap;
		} else if (templateType == "wheelOfFortune") {
			ubsApp.updateTemplateForFortuneWheel(templateConfig, wheelConfig);
			html += wheelOfFortuneTemplate(templateConfig);
		}
	}
	$("#templateBase").empty();
	$("#templateBase").append(html);
	
	
	if(wheelConfig.segments) {
		
		wheelConfig.animation.callbackFinished = ubsWheelOfFortune.alertPrize;
	    ubsApp.wheelOfFortune = new Winwheel(wheelConfig, true);

	}
}

ubsApp.updateTemplateForFortuneWheel = function(template, wheelConfig) {
		var screenWidth = $(window).height();
		var wheelWidth = screenWidth * template.wheelWidthInPercent /100;
		template.wheelWidth = wheelWidth;
		template.settings.outerRadius = (wheelWidth / 2) - 2;
		template.settings.innerRadius = (template.settings.outerRadius / 3);
		template.settings.textFontSize = template.settings.innerRadius / 2.5;
		ubsWheelOfFortune.optionPageMap = template.optionPageMap;
		wheelConfig = $.extend(true, wheelConfig, ubsWheelOfFortune.defaultSettings, template.settings);	
}

ubsApp.intitializeTemplates = function() {

	ubsStaticTemplate = Template7.compile(ubsApp.staticTemplate);
	ubsDecisionTemplate = Template7.compile(ubsApp.decisionTemplate);
	wheelOfFortuneTemplate = Template7.compile(ubsApp.wheelOfFortuneTemplate);
}

ubsApp.renderDecisonTemplate = function() {
  var checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").val();
  this.renderPage(ubsApp.pages[ubsDecisionOptionMap[checkedValue]]);
}





