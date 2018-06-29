
let ubsStaticTemplate;
let ubsDecisionTemplate;
let ubsDecisionOption;
let ubsDecisionOptionMap;
let wheelOfFortuneTemplate;
let ubsScoreTemplate;
let ubsPopupTemplate;
let ubsTimerTemplate;
let ubsAudioTemplate;
let choiceSelected={};
let timeVar;
var playerChance = 0; 
let ubsApp = {};
var currentanswer=0;
var answerselected=0;
ubsApp.wheelOfFortune = null;
var flag=false;
var interval;
let audioConfig = {};

var count=0;
var level;
let screenHeight = $(window).height();
let screenWidth = $(window).width();
$(document).ready(function(){
	//$("#staticTemplate").load("templates/staticTemplate.html"); 
	//$("#decisionTemplate").load("templates/decisionTemplate.html"); 
	
	if (typeof(Storage) == "undefined") {
		localStorage.setItem("score","1000");
		localStorage.setItem("currency","$");
	}

	
	ubsApp.intitializeTemplates();
});

ubsApp.checkPageorBoard= function(page,amount,hideScenarios){
if(hideScenarios == "true"){
	playerChance+=1;
	$('#templateBase').fadeOut();
	$('#monopolyBase').fadeIn();
}
else ubsApp.renderPageByName(page,amount);
}

ubsApp.renderPage = function(page) {
	let html = "";
	let wheelConfig = {};
	if(page.templates) {
		page=page.templates;
	}
	flag=false;
	let timerConfig = {};
	let decisionConfig;
	let scratchCardTemplateConfig = undefined;
	
	for(let i=0; i< page.length; i++) {
		let templateConfig = page[i];
		let templateType = templateConfig.templateType;
		
		if(templateType == "static") {
			html += ubsStaticTemplate(templateConfig);
			if(templateConfig.display_score){
				html += ubsScoreTemplate(ubsApp.pages.score[0]); 
			}
			if(templateConfig.score_animation_req){
				flag=true;
			}
		} else if(templateType == "decision") {
			decisionConfig = templateConfig;
			html += ubsDecisionTemplate(templateConfig);
			ubsDecisionOption = templateConfig.options[0].optionName;
			if(templateConfig.display_score){ 
				html += ubsScoreTemplate(ubsApp.pages.score[0]); 
			}
			if(templateConfig.score_animation_req){
				flag=true;
			}
			ubsDecisionOptionMap = templateConfig.optionPageMap;
		} else if (templateType == "wheelOfFortune") {
			ubsApp.updateTemplateForFortuneWheel(templateConfig, wheelConfig);
			html += wheelOfFortuneTemplate(templateConfig);
		}
		else if(templateType == "timerTemp") {
			html+=ubsTimerTemplate(templateConfig)
			timerConfig=templateConfig;
		} else if (templateType == "popup") {
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
        	if(ubsApp.areAllChoicesSelected() == true) {
                choiceSelected={};
                if(templateConfig.nextPage.page){
                	ubsApp.renderPageByName(templateConfig.nextPage.page);
                }
                else{
                	playerChance+=1;
					$('#templateBase').fadeOut();
					$('#monopolyBase').fadeIn();
                }
                return;
            }
			ubsApp.updateChoiceSelected(templateConfig);
			if(templateConfig.display_score)
			{
				html += ubsScoreTemplate(ubsApp.pages.score[0]); 
			}
			let containerHeight = $(window).innerHeight() - 50;
			for(let i=0; i< templateConfig.choices.length; i++)  {
				templateConfig.choices[i].display = choiceSelected[i];

				templateConfig.choices[i].choiceHeight = (containerHeight / templateConfig.choiceHeightFactor) + 'px';
				}
			templateConfig.containerHeight= $(window).innerHeight() +'px';		  
		  	html += ubschoiceTemplate(templateConfig);
		  	if(templateConfig.audioSrc){
		  		audioConfig = templateConfig;
		  		html+= ubsAudioTemplate(templateConfig);
				
			}
		 }
		 else if(templateType == "audioTemplate"){
			if(templateConfig.audioSrc){
				audioConfig = templateConfig;
				html+= ubsAudioTemplate(templateConfig);
		}
		 }
		 else if(templateType == "score"){
			 if(templateConfig.score_animation_req)
			 {
				flag=true;
			 }
			html += ubsScoreTemplate(templateConfig); 
		 }
	}
	$("#templateContent").empty();
	$("#templateContent").append(html);
		
	if(wheelConfig.segments) {
		wheelConfig.animation.callbackFinished = ubsWheelOfFortune.alertPrize;
	    ubsApp.wheelOfFortune = new Winwheel(wheelConfig, true);
	} else if (scratchCardTemplateConfig) {
	    initScratchCard(scratchCardTemplateConfig);
	}
	if(audioConfig.audioSrc){
		var divElement = document.getElementById(audioConfig.audioId);
		if(divElement != null) {
			playAudio(divElement);
			var audioevent = new CustomEvent('playAudio',{
					detail: audioConfig.audioSrc,
				});
			divElement.dispatchEvent(audioevent);
		}
	}
	
	
	
	if($('#headId').length > 0) {
		if(flag){
				ubsApp.animate_score(answerselected);
		}
		document.getElementById("headId").innerHTML=ubsApp.getScore();
	}
		
	
	if(Object.keys(timerConfig).length != 0){
		ubsApp.startTimer(timerConfig);
		timerConfig={};
	}

	if(computerRequired){
		ubsApp.playDecisionTemplate(decisionConfig);
	}
}


ubsApp.updateChoiceSelected = function(templateConfig) {
	if(jQuery.isEmptyObject(choiceSelected)){
	 for(let i=0; i< templateConfig.choices.length; i++) { 
	 choiceSelected[templateConfig.choices[i].choiceID] = true;
	 
	 }
	}
}
ubsApp.areAllChoicesSelected= function(){

    if(jQuery.isEmptyObject(choiceSelected)) {
        return false;
    }
   let allSelected = true;
    $.each(choiceSelected, function(key,value){
     if(value == true) {
        allSelected =  false;
        return false;
     }
});
    return allSelected;
}
ubsApp.updateChoices = function(choiceId, pageName){
	 ubsApp.renderPageByName(pageName);
	 choiceSelected[choiceId]=false;

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
ubsApp.renderPageByName = function(pageName,amount) {
	clearInterval(interval);
	if(amount === undefined || amount === null|| amount.length===0)
	{
		
	}
	else
	{
		ubsApp.animate_score(amount);
	}
	pageName=pageName.trim();
	this.renderPage(ubsApp.pages[pageName]);
}

ubsApp.updateTemplateForFortuneWheel = function(template, wheelConfig) {
		let screenWidth = $(window).height();
		let wheelWidth = screenWidth * template.wheelWidthInPercent /100;
		template.wheelWidth = wheelWidth;
		template.settings.outerRadius = (wheelWidth / 2) - 2;
		template.settings.innerRadius = (template.settings.outerRadius / 3);
		template.settings.textFontSize = template.settings.innerRadius / 5.5;
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
	ubsTimerTemplate = Template7.compile(ubsApp.timerTemplate);
	ubsAudioTemplate = Template7.compile(ubsApp.audioTemplate);
	ubsBoardtemplate = Template7.compile(ubsApp.boardTemplate);


}

ubsApp.renderDecisonTemplate = function() {
  let checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").attr("id");
  answerselected=$("#" + checkedValue + "Amount").text(); 
  clearInterval(timeVar);
  clearInterval(interval);
  clearInterval(timeVar);
  
  this.renderPage(ubsApp.pages[ubsDecisionOptionMap[checkedValue].page]);

}

ubsApp.updateRollingDiceTemplate = function(template){
	let windowHeight =  $(window).height();
    //$('#rollscene').css('width',windowHeight/3+"px");
    //$('#rollscene').css('height',windowHeight/3+"px");
    template.diceSceneWidth = windowHeight/3;
}



ubsApp.getCurrency=function()
{
	return localStorage.currency;
}



ubsApp.startTimer=function(temp)
{
    var timeleft = temp.time;
    timeVar = setInterval(function(){
		    timeleft--;
		    document.getElementById(temp.divID).innerHTML = timeleft;
		    if(timeleft === 0 ){
		        clearInterval(timeVar);
		        ubsApp.renderPageByName(temp.redirect);
		    }
    	},1000);
}

ubsApp.getScore=function()
{
    ubsApp.initializeScoreBoard();
    return userArray[playerChance].getplayerScore();
}

ubsApp.addScore=function (earnedScore)
{
    var currentScore=userArray[playerChance].getplayerScore();
    userArray[playerChance].setplayerScore(parseInt(currentScore)+parseInt(earnedScore));
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
    else if(amount>0)
    {

            interval=window.setInterval(function () {
            sc = sc+1;
            document.getElementById("headId").innerHTML = sc;
            if(sc==target_score)
                clearInterval(interval);
            }, parseInt(amount)/1000000);
    }
    ubsApp.addScore(parseInt(amount));
    document.getElementById("headId").innerHTML=ubsApp.getScore();
    
    
}

ubsApp.initializeScoreBoard=function()
{
	document.getElementById("scoreBoard").innerHTML="";
    for(var j=0;j<parseInt(numplayers);j++)
    {
        document.getElementById("scoreBoard").innerHTML+="<div style=\"border:2px solid;padding:2.5px;display:inline-block;width:100%; color:"+userArray[j].getplayerColor()+";\"><span style=\"color:white;margin-top:2px;\">"+userArray[j].getplayerName()+"  </span>"+ "<span id=\"score\" style=\"float:right;color:white;\">"+userArray[j].getplayerScore()+"<img src=\"images/coin.png\" width=\"35\" height=\"35\" ></span></div><br><br>";
    }
}


//Computer Player

ubsApp.chooseAnswer() = function(){

}
ubsApp.playDecisionTemplate =function(decisionConfig, level){

	var setCorrectProbability;
	setTimeout({
    	if(level == "easy"){
  	 		setCorrectProbability = (Math.floor(Math.random()*2)+2)*10;
  	 		var currentFactor = 0 ; 
  	 		var answer = chooseAnswer(decisionConfig, level, category);
  	 		$("input[name='"+ubsDecisionOption+"'][value='"+answer+"']").attr('checked', true);;
  	
     
     
  	


  }else if(level = "medium"){

  }else if(level="hard"){

  }
  },2000);
}