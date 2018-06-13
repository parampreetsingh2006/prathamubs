let ubsStaticTemplate;
let ubsDecisionTemplate;
let ubsDecisionOption;
let ubsDecisionOptionMap;
let wheelOfFortuneTemplate;
let ubsScoreTemplate;
let ubsPopupTemplate;
let choiceSelected={};
let ubsApp = {};
var currentanswer=0;
var answerselected=0;
ubsApp.wheelOfFortune = null;
var flag=false;
var interval;
$(document).ready(function(){
	//$("#staticTemplate").load("templates/staticTemplate.html"); 
	//$("#decisionTemplate").load("templates/decisionTemplate.html"); 
	
	if (typeof(Storage) == "undefined") {
		localStorage.setItem("score","1000");
		localStorage.setItem("currency","$");
	}
	localStorage.score=1000;
	ubsApp.intitializeTemplates();
	ubsApp.renderPage(ubsApp.pages.choicePage);
});



ubsApp.renderPage = function(page) {
	let html = "";
	let wheelConfig = {};
	flag=false;
	let scratchCardTemplateConfig = undefined;

	for(let i=0; i< page.length; i++) {
		let templateConfig = page[i];
		let templateType = templateConfig.templateType;
		if(templateType == "static") {
			html += ubsStaticTemplate(templateConfig);
			if(templateConfig.display_score)
			{
				html += ubsScoreTemplate(ubsApp.pages.score[0]); 
			}
			if(templateConfig.score_animation_req)
			{
				flag=true;
			}
		} else if(templateType == "decision") {
			html += ubsDecisionTemplate(templateConfig);
			ubsDecisionOption = templateConfig.options[0].optionName;
			if(templateConfig.display_score)
			{
				html += ubsScoreTemplate(ubsApp.pages.score[0]); 
			}
			if(templateConfig.score_animation_req)
			{
				flag=true;
			}
			ubsDecisionOptionMap = templateConfig.optionPageMap;
		} else if (templateType == "wheelOfFortune") {
			ubsApp.updateTemplateForFortuneWheel(templateConfig, wheelConfig);
			html += wheelOfFortuneTemplate(templateConfig);
			html+=ubsPopupTemplate(templateConfig);
		} else if(templateType == "rollingDice"){
			rollingDiceConfig.optionPageMap = templateConfig.optionPageMap;
			ubsApp.updateRollingDiceTemplate(templateConfig);
			html += rollingDiceTemplate(templateConfig);
		} else if(templateType == "scratchCard") {
		    scratchCardTemplateConfig=templateConfig;
            preProcessScratchCardConfig(templateConfig);
         	html += scratchCardTemplate(templateConfig);
        }else if(templateType == "choiceTemplate"){
			ubsApp.updateChoiceSelected(templateConfig);
			for(let i=0; i< templateConfig.choices.length; i++)  {
				templateConfig.choices[i].display = choiceSelected[i];
				templateConfig.choices[i].choiceHeight = ($(window).innerHeight() / templateConfig.choiceHeightFactor) + 'px';
				}
			templateConfig.containerHeight= $(window).innerHeight() +'px';
		  
		  	html += ubschoiceTemplate(templateConfig);
		 }
		 /*else if(templateType == "score"){
			 if(templateConfig.score_animation_req)
			 {
				flag=true;
			 }
			html += ubsScoreTemplate(templateConfig); 
		 }*/
	}
	$("#templateBase").empty();
	$("#templateBase").append(html);
	
	if(wheelConfig.segments) {
		wheelConfig.animation.callbackFinished = ubsWheelOfFortune.alertPrize;
	    ubsApp.wheelOfFortune = new Winwheel(wheelConfig, true);
	} else if (scratchCardTemplateConfig) {
	    initScratchCard(scratchCardTemplateConfig);
	}
	
	if($('#headId').length > 0) {
		if(flag)
		{
			if(currentanswer == answerselected)
			{
				ubsApp.animate_score(answerselected);
				//ubsApp.addScore(currentanswer);
			}
			else{
				ubsApp.animate_score(-answerselected);
				//ubsApp.addScore(-answerselected);
			}
			document.getElementById("headId").innerHTML=ubsApp.getScore();
			
		}
		else{
			document.getElementById("headId").innerHTML=ubsApp.getScore();
		}
		
	}
}


ubsApp.updateChoiceSelected = function(templateConfig) {
	if(jQuery.isEmptyObject(choiceSelected)){
	 for(let i=0; i< templateConfig.choices.length; i++) { 
	 choiceSelected[templateConfig.choices[i].choiceID] = true;
	 
	 }
	}
}
ubsApp.checkSelected= function(){

let allSelected = true;
	$.each(choiceSelected, function(key,value){
     if(value == true) {
     	allSelected =  false;
		return false;
     }
});
	return allSelected;
}
ubsApp.renderPageByName = function(pageName) {
	clearInterval(interval);
	 this.renderPage(ubsApp.pages[pageName]);
}

ubsApp.updateTemplateForFortuneWheel = function(template, wheelConfig) {
		let screenWidth = $(window).height();
		let wheelWidth = screenWidth * template.wheelWidthInPercent /100;
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
	rollingDiceTemplate = Template7.compile(ubsApp.rollingDiceTemplate);
	scratchCardTemplate = Template7.compile(ubsApp.scratchCard);
	ubschoiceTemplate = Template7.compile(ubsApp.choiceTemplate);
	ubsScoreTemplate=Template7.compile(ubsApp.scoreTemplate);
	ubsPopupTemplate = Template7.compile(ubsApp.popupTemplate);
}

ubsApp.renderDecisonTemplate = function(answer) {
  let checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").val();
  currentanswer=answer;
  answerselected=checkedValue;
  clearInterval(interval);
  this.renderPage(ubsApp.pages[ubsDecisionOptionMap[checkedValue]]);
}

ubsApp.updateRollingDiceTemplate = function(template){
	let windowHeight =  $(window).height();
    //$('#rollscene').css('width',windowHeight/3+"px");
    //$('#rollscene').css('height',windowHeight/3+"px");
    template.diceSceneWidth = windowHeight/3;
}

ubsApp.updateChoices = function(choiceId, pageName){
	 ubsApp.renderPageByName(pageName);
	 choiceSelected[choiceId]=false;
 if(ubsApp.checkSelected()) choiceSelected={};   
}
ubsApp.getScore=function()
{
	return parseInt(localStorage.score);
}

ubsApp.getCurrency=function()
{
	return localStorage.currency;
}

ubsApp.addScore=function (earnedScore)
{
	var currentScore=localStorage.score;
	localStorage.score=parseInt(currentScore)+parseInt(earnedScore);
}

ubsApp.animate_score=function(amount)
{
	var sc=ubsApp.getScore(); 
	var target_score=sc+parseInt(amount);
	if(amount<0)
	{
		interval=window.setInterval(function () {
		sc = sc-1;
		document.getElementById("headId").innerHTML = sc;
		if(sc==target_score)
			clearInterval(interval);
		}, parseInt(amount)/1000000);
	}
	else
	{
			interval=window.setInterval(function () {
			sc = sc+1;
			document.getElementById("headId").innerHTML = sc;
			if(sc==target_score)
				clearInterval(interval);
			}, parseInt(amount)/1000000);
	}
	ubsApp.addScore(parseInt(amount));
}