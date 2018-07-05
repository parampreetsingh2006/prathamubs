let ubsApp = {};
ubsApp.monopoly = {};
let monopoly = ubsApp.monopoly;
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
var answerselected=0;         //whyGlobal
ubsApp.wheelOfFortune = null;
var interval;				//whyGlobal
let audioConfig = {};
let screenHeight = $(window).height();
let screenWidth = $(window).width();
let userArray=[];
let templateName = ["static", "decision", "wheelOfFortune", "timerTemp", "popup", "rollingDice","scratchCard","choice","audio", "score"];
let templateMap = {};
monopoly.numplayers=0;
let numplayers = monopoly.numplayers;
monopoly.playerChance = 0; 
let playerChance = monopoly.playerChance;


$(document).ready(function(){	
	if (typeof(Storage) == "undefined") {
		localStorage.setItem("score","1000");
		localStorage.setItem("currency","$");
	}
	ubsApp.intitializeTemplates();
	ubsApp.mapTemplatetoFunction();
});

		// templateConfig => stringify;
		// get {{key}} => key
		// translations[key] => string replace;
		// string => JSON = templateConfig;

ubsApp.getStaticTemplate = function(templateConfig, tempVar){
	tempVar.html += ubsStaticTemplate(templateConfig);
	if(templateConfig.display_score){
		tempVar.html += ubsScoreTemplate(ubsApp.pages.score[0]); 
	}
	if(templateConfig.score_animation_req){
		tempVar.flag=true;
	}
}

ubsApp.getDecisionTemplate = function(templateConfig, tempVar){
	tempVar.decisionConfig = templateConfig;
	tempVar.html += ubsDecisionTemplate(templateConfig);
	ubsDecisionOption = templateConfig.options[0].optionName;
	if(templateConfig.display_score){ 
		tempVar.html += ubsScoreTemplate(ubsApp.pages.score[0]); 
	}
	if(templateConfig.score_animation_req){
		tempVar.flag=true;
	}	
	ubsDecisionOptionMap = templateConfig.optionPageMap;
}

ubsApp.getWheelOfFortuneTemplate = function(templateConfig, tempVar){
	ubsApp.updateTemplateForFortuneWheel(templateConfig, tempVar.wheelConfig);
	tempVar.html += wheelOfFortuneTemplate(templateConfig);
}

ubsApp.getTimerTempTemplate = function(templateConfig, tempVar){
	tempVar.html+=ubsTimerTemplate(templateConfig)
	tempVar.timerConfig=templateConfig;
}

ubsApp.getPopupTemplate = function(templateConfig, tempVar){

	tempVar.html+=ubsPopupTemplate(templateConfig);
}

ubsApp.getRollingDiceTemplate = function(templateConfig, tempVar){
	rollingDiceConfig.optionPageMap = templateConfig.optionPageMap;
	ubsApp.updateRollingDiceTemplate(templateConfig);
	tempVar.html += rollingDiceTemplate(templateConfig);
}

ubsApp.getScratchCardTemplate = function(templateConfig, tempVar){
    scratchCardTemplateConfig=templateConfig;
    preProcessScratchCardConfig(templateConfig);
 	html += scratchCardTemplate(templateConfig);
}

ubsApp.getChoiceTemplate = function(templateConfig, tempVar){
	if(ubsApp.areAllChoicesSelected() == true) {
        choiceSelected={};
        if(templateConfig.nextPage.page){
        	ubsApp.renderPageByName(templateConfig.nextPage.page);
        }
        else{
        	ubsApp.nextMove();
        }
        return;
    }
	ubsApp.updateChoiceSelected(templateConfig);
	if(templateConfig.display_score){
		tempVar.html += ubsScoreTemplate(ubsApp.pages.score[0]); 
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
  		tempVar.html+= ubsAudioTemplate(templateConfig);	
	}
}

ubsApp.getAudioTemplate = function(templateConfig, tempVar){
	if(templateConfig.audioSrc){
		audioConfig = templateConfig;
		tempVar.html+= ubsAudioTemplate(templateConfig);
	}
}

ubsApp.getScoreTemplate = function(templateConfig, tempVar){
	 if(templateConfig.score_animation_req){
		flag=true;
	 }
	tempVar.html += ubsScoreTemplate(templateConfig); 
}

ubsApp.renderPage = function(page) {
	if(page.templates) {
		page=page.templates;
	}
	let html = "";
	let tempVar = {};
	tempVar.html = "";
	tempVar.wheelConfig = {};
	tempVar.timerConfig = {};
	tempVar.scratchCardTemplateConfig = undefined;
	tempVar.decisionConfig = {};
	tempVar.flag=false;

	for(let i=0; i< page.length; i++) {
		let templateConfig = page[i];
		let templateType = templateConfig.templateType;
		eval(templateMap[templateType])(templateConfig,tempVar);
	}

	$("#templateContent").empty();
	$("#templateContent").append(tempVar.html);
		
	if(tempVar.wheelConfig.segments){
		tempVar.wheelConfig.animation.callbackFinished = ubsWheelOfFortune.alertPrize;
	    ubsApp.wheelOfFortune = new Winwheel(tempVar.wheelConfig, true);
	} else if (tempVar.scratchCardTemplateConfig) {
	    initScratchCard(tempVar.scratchCardTemplateConfig);
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

    if(Object.keys(tempVar.decisionConfig).length!=0 && userArray[playerChance].getIsComputer() ){
		ubsApp.playDecisionTemplate(tempVar.decisionConfig);
    }

	if($('#headId').length > 0) {
		if(tempVar.flag){
				ubsApp.animate_score(answerselected);
		}
		document.getElementById("headId").innerHTML=ubsApp.getScore();
	}
		
	if(Object.keys(tempVar.timerConfig).length != 0 && !userArray[playerChance].getIsComputer()	){
		ubsApp.startTimer(tempVar.timerConfig);
		tempVar.timerConfig={};
	}
}

ubsApp.mapTemplatetoFunction = function(){
	
	for(let i=0; i<templateName.length; i++){
	   templateMap[templateName[i]]= "ubsApp.get"+templateName[i].charAt(0).toUpperCase()+templateName[i].substring(1)+"Template";
	}
}
ubsApp.checkPageorBoard= function(page,amount,hideScenarios){
	if(hideScenarios == "true"){
        ubsApp.nextMove();
	}
	else {
		ubsApp.renderPageByName(page,amount);
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
	if(amount === undefined || amount === null|| amount.length===0){	
	}
	else{
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
    template.diceSceneWidth = windowHeight/3;
}



ubsApp.getCurrency=function()
{
	return localStorage.currency;
}



ubsApp.startTimer=function(temp){
    var timeleft = temp.time;
    timeVar = setInterval(function(){
	    timeleft++;
	    document.getElementById(temp.divID).innerHTML = timeleft;
	    if(timeleft === 0 ){
	        clearInterval(timeVar);
	        ubsApp.nextMove();
	    }
    },1000);
}

ubsApp.nextMove = function(){
			playerChance+=1;
	        playerChance%=numplayers;
			$('#templateBase').fadeOut();
			$('#monopolyBase').fadeIn();
			$('#rollIt').attr('disabled',false);
			$("#player").html(userArray[playerChance].getplayerName());
			$("#diceval").html(" ");
			if(userArray[playerChance].getIsComputer()){
				decisionConfig={};
				setTimeout( function(){
					$('#rollIt').trigger('click');
					$('#rollIt').attr('disabled',true);
				},2000);
			}
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

ubsApp.chooseAnswer = function(decisionConfig, correctProbability, number){
	var totalOptions = decisionConfig.options.length;
	var optionConfig={};
	var selectRange = Math.random();
	if(selectRange<=correctProbability){
        number++;
        userArray[playerChance].setCorrectAnswered(number);
		for(let i=0;i<totalOptions; i++){
			if(decisionConfig.options[i].priority == "1"){
				return decisionConfig.options[i].optionValue;
			}
		}
	}
	else{
		 var randomPriority =(Math.floor(Math.random()*(totalOptions-1))+2);
		 for(let i=0;i<totalOptions; i++)
			{
				if(decisionConfig.options[i].priority == ""+randomPriority){
					return decisionConfig.options[i].optionValue;
			}
		}
	}	
}
ubsApp.playStaticTemplate = function(){
	$('#nextQuestion').trigger('click');
}
ubsApp.playDecisionTemplate =function(decisionConfig){
    var player= userArray[playerChance];
	var correctProbability = player.getCorrectProbability();
	var number = player.getCorrectAnswered();
	var answer = ubsApp.chooseAnswer(decisionConfig, correctProbability, number);
	$("input[type=radio]").attr('disabled', true);
	$('#submitQuestion').attr('disabled', true);
	setTimeout(function(){
		$("input[type=radio]").attr('disabled', false);
 		$("input[name='"+ubsDecisionOption+"'][value='"+answer+"']").attr('checked', true);
 		$("input[type=radio]:not(input[name='"+ubsDecisionOption+"'][value='"+answer+"'])").attr('disabled', true);
 		setTimeout(function(){
 			$('#submitQuestion').attr('disabled', false);
 			$("input[type=radio]").attr('disabled', false);
 			$('#submitQuestion').trigger('click');
 			setTimeout(function(){
 				ubsApp.playStaticTemplate();
 			},2000);
 		},decisionConfig.optionsTime);
  	},decisionConfig.questionTime);
}