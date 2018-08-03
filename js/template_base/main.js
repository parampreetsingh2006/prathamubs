let ubsApp = {};
ubsApp.monopoly = {};
let monopoly = ubsApp.monopoly;
let ubsStaticTemplate;
let ubsDecisionTemplate;
let ubsDecisionOption;
let ubsDecisionOptionMap;
let wheelOfFortuneTemplate;
let ubsSuccessErrortemplate;
let ubsScoreTemplate;
let ubsPopupTemplate;
let ubsTimerTemplate;
let ubsAudioTemplate;
let ubsCalculatorTemplate;
let ubsLeaderBoardTemplate;
let ubsPurchaseTemplate;
let	ubsLuckTemplate;
let ubsPayOffTemplate;
let ubsOrdertemplate;
let ubsAdvantageCardTemplate;
let ubsQuizTemplate;
let ubsWeekSummarytemplate;
let choiceSelected={};
let timeVar;
var helpScenarioOpen=false;
let numberOfPaymentModes=3;
var numberOfWeeksDeadline=0;
var answerselected=0;       
var inventoryToBeUpdated=0;
var minimumInventoryScoreRequired=0;
ubsApp.wheelOfFortune = null;
var scenarioVideo;
var interval;				
let audioConfig = {};
var count=0;
var languageSelected="hindi";
var calculatorReq=false;
let screenHeight = $(window).height();
let screenWidth = $(window).width();
let userArray=[];
let templateName = ["static", "decision","purchase","withdrawFromBank","advantageCard","luck","pay","payOff", "insurance","transfer","wheelOfFortune", "timerTemp", "popup", "rollingDice","scratchCard","choice","audio", "score","sales", "quiz","quizStarter", "popup", "weekSummary"];
let templateMap = {};
let offlinePurchaseClicked=false;
monopoly.numplayers=0;
let numplayers = monopoly.numplayers;
monopoly.playerChance = 0;
let playerChance = monopoly.playerChance;

let cashTransfered=false;
var initialPlayerCash=1000;
var initialPlayerBankBalance=250000;
var initialInventoryScore=60;
var initialReputation=45;
ubsApp.popupConfig = {};

$(document).ready(function(){	
	ubsApp.intitializeTemplates();
	ubsApp.mapTemplatetoFunction();
	
});


ubsApp.getTimerTempTemplate = function(templateConfig, tempVar){
	if(!userArray[playerChance].getIsComputer())
	{tempVar.html+=ubsTimerTemplate(templateConfig);
	tempVar.timerConfig=templateConfig;}
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
	monopoly.closeLeaderBoard();
	// if(page.minimumInventoryScoreRequired){
	// 	minimumInventoryScoreRequired=page.minimumInventoryScoreRequired;
	// }
	if(page.videoLink){
		scenarioVideo=page.videoLink;
	}

	if(page.templates) {
		page=page.templates;
	}
	let html = "";
	let tempVar = {};
	tempVar.html = "";
	tempVar.salesConfig = "";
	tempVar.quizConfig = {};
	tempVar.wheelConfig = {};
	tempVar.timerConfig = {};
	tempVar.staticConfig = {};
	tempVar.decisionConfig = {};
	tempVar.scratchCardTemplateConfig = undefined;
	tempVar.flag=false;


	for(let i=0; i< page.length; i++) {
		let templateConfig = page[i];
		let templateType = templateConfig.templateType;
		eval(templateMap[templateType])(templateConfig,tempVar);

	}

	if(tempVar.html) {
		$("#templateContent").empty();
	// if(calculatorReq)
	// {
	// 	tempVar.html+=ubsCalculatorTemplate();
	// }
	$("#templateContent").append(tempVar.html);

	}

	

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
		tempVar.decisionConfig={};
    }

    if(Object.keys(tempVar.staticConfig).length!=0 && userArray[playerChance].getIsComputer() ){
    	ubsApp.playStaticTemplate(tempVar.staticConfig);
    	tempVar.staticConfig={};
	}

	if(Object.keys(tempVar.timerConfig).length != 0 && !userArray[playerChance].getIsComputer()	){
		ubsApp.startTimer(tempVar.timerConfig);
		tempVar.timerConfig={};
	}

	if(Object.keys(tempVar.salesConfig).length != 0){
		ubsApp.startTimer(tempVar.salesConfig);
	}


	// if(answerselected!=0)
	// {
	// 	ubsApp.addScore(parseInt(answerselected));
	// 	document.getElementById("lastBalanceContent").innerHTML="₹"+userArray[playerChance].getplayerScore();
	// 	answerselected=0;
	// }	
	// if(inventoryToBeUpdated!=0)
	// {
	// 	ubsApp.addInventory(parseInt(inventoryToBeUpdated));
	// 	document.getElementById("inventoryContent").innerHTML=userArray[playerChance].getInventoryScore()+"%";
	// 	//ubsApp.animate_score(parseInt(inventoryToBeUpdated),document.getElementById("inventoryContent"));
	// 	inventoryToBeUpdated=0;
	// }

	/*if($('#headId').length > 0) {
		if(flag){
				ubsApp.animate_score(answerselected);
		}
		document.getElementById("headId").innerHTML=ubsApp.getScore();
	}*/
}
    
ubsApp.mapTemplatetoFunction = function(){

	for(let i=0; i<templateName.length; i++){
	   templateMap[templateName[i]]= "ubsApp.get"+templateName[i].charAt(0).toUpperCase()+templateName[i].substring(1)+"Template";
	}
}

ubsApp.checkPageorBoard= function(page,amount,hideScenarios){
	clearInterval(timeVar);
	if(hideScenarios == "true"){
        ubsApp.nextMove();
	}
	else {
		ubsApp.renderPageByName(page);/*,amount);*/
	}
}



ubsApp.renderPageByName = function(pageName)/*,amount)*/ {
	clearInterval(interval);

	/*if(amount === undefined || amount === null|| amount.length===0){	

	}
	else{
		ubsApp.animate_score(amount);
	}*/
	pageName=pageName.trim();
	this.renderPage(ubsApp.pages[pageName]);
}



ubsApp.intitializeTemplates = function() {
	ubsStaticTemplate = Template7.compile(ubsApp.staticTemplate);
	ubsDecisionTemplate = Template7.compile(ubsApp.decisionTemplate);
	wheelOfFortuneTemplate = Template7.compile(ubsApp.wheelOfFortuneTemplate);
	rollingDiceTemplate = Template7.compile(ubsApp.rollingDiceTemplate);
	scratchCardTemplate = Template7.compile(ubsApp.scratchCard);
	ubschoiceTemplate = Template7.compile(ubsApp.choiceTemplate);
	ubsScoreTemplate=Template7.compile(ubsApp.scoreTemplate);
	ubsTimerTemplate = Template7.compile(ubsApp.timerTemplate);
	ubsAudioTemplate = Template7.compile(ubsApp.audioTemplate);
	ubsBoardtemplate = Template7.compile(ubsApp.boardTemplate);
	ubsQuizTemplate = Template7.compile(ubsApp.quizTemplate);
	ubsAdvantageCardTemplate=Template7.compile(ubsApp.advantageCardTemplate);
	ubsWeekSummarytemplate=Template7.compile(ubsApp.weekSummaryTemplate);
	// ubsCalculatorTemplate=Template7.compile(ubsApp.calculatorTemplate);
	ubsLeaderBoardTemplate=Template7.compile(ubsApp.leaderBoardTemplate);
	ubsPurchaseTemplate=Template7.compile(ubsApp.purchaseTemplate);
	ubsLuckTemplate=Template7.compile(ubsApp.luckyUnluckyTemplate);
	ubsPayOffTemplate=Template7.compile(ubsApp.payOffTemplate);
	ubsOrdertemplate = Template7.compile(ubsApp.salesTemplate);
	ubsInsuranceTemplate = Template7.compile(ubsApp.insuranceTemplate);
	ubsPopupTemplate = Template7.compile(ubsApp.popUpTemplate);

}




ubsApp.openCalculator=function(){
	document.write("Calculator Opened");
}




ubsApp.startTimer=function(temp){
	var timeleft = temp.time;
	

    timeVar = setInterval(function(){
		if(document.getElementById(temp.divID))
		document.getElementById(temp.divID).innerHTML = timeleft;
		if(!helpScenarioOpen){
			timeleft--;
		}

	    if(timeleft === 0 ){
	        clearInterval(timeVar);
	        choiceSelected={};
	        ubsApp.nextMove();
	    }
	},1000);

}




ubsApp.closeCurrentScenario=function(){
	$('#monopolyBase').css("z-index",0)
	$('#templateContent').css("z-index",0)
	$('#templateContent').css("height",0+'px')
	document.getElementById("templateContent").innerHTML="";
	$('#rollIt').attr('disabled',false);

	if(userArray[playerChance].isOpenWeekSummary()) {
        ubsApp.openWeekSummary();
	}
	else{
	    if(userArray[playerChance].getTransferReminderOpened()==false){
        		userArray[playerChance].setTransferReminderOpened(true);
        		ubsApp.openTransferToBank();
        	}
        if(userArray[playerChance].getPayOffDeadline()==0){
        		ubsApp.openPayOffScenario();
        }
	}

}

ubsApp.startCurrentScenario=function(){
	$('#monopolyBase').css("z-index",-10)
	$('#templateBase').css("z-index",10)
	
	document.getElementById("templateContent").style.opacity="0.95";
	
	$('#templateContent').css("height",(screenHeight)+'px')
	$('#templateContent').css("width",(screenWidth)+'px')
}


ubsApp.translateScenarios=function(){
	var string=JSON.stringify(ubsApp.pages);

	
	while(string.indexOf("{{")>=0){
		let translationKey= string.substring(string.indexOf("{{") + 2,string.indexOf("}}",string.indexOf("{{")));//string.substring(string.indexOf("{{")+2,string.indexOf("}}"));
		
		let stringToBeReplaced="{{"+translationKey+"}}";
		string=string.replace(stringToBeReplaced,ubsApp.translation[translationKey]);
	}
	ubsApp.pages=JSON.parse(string);
	string=JSON.stringify(monopoly.pages);
	while(string.indexOf("{{")>=0){
		let translationKey= string.substring(string.indexOf("{{") + 2,string.indexOf("}}",string.indexOf("{{")));//string.substring(string.indexOf("{{")+2,string.indexOf("}}"));
		
		let stringToBeReplaced="{{"+translationKey+"}}";
		string=string.replace(stringToBeReplaced,ubsApp.translation[translationKey]);
	}
	
	monopoly.pages=JSON.parse(string);
}


ubsApp.openPopup = function(config) {
   ubsApp.popupConfig = $.extend({}, config);
   ubsApp.renderPageByName("generalPopUp");
}




// ubsApp.animate_score=function(amount){


// 	ubsApp.addScore(parseInt(amount));
//     var sc=userArray[playerChance].getplayerScore();
//     var target_score=sc+parseInt(amount);
//     var element=document.getElementById("lastBalanceContent");

//     if(amount<0)
//     {

//         interval=window.setInterval(function () {
//         sc = sc-1;
//         element.innerHTML = "Rs."+sc;
//         if(sc==target_score)
//             clearInterval(interval);
//         }, parseInt(amount)/1000000);
//     }
//     else if(amount>0)
//     {

//             interval=window.setInterval(function () {
//             sc = sc+1;
//             element.innerHTML = "Rs."+sc;
//             if(sc==target_score)
//                 clearInterval(interval);
//             }, parseInt(amount)/1000000);
//     }

// 	element.innerHTML=userArray[playerChance].getplayerScore();

// }

// ubsApp.animateMoney=function(amount){

//     var sc=userArray[playerChance].getplayerScore();
//     var target_score=sc+parseInt(amount);
// 	var element=document.getElementById("lastBalanceContent");
// 	var temp=amount;
//     if(amount<0)
//     {

//         interval=window.setInterval(function () {
//         sc = sc-1;
// 		if(sc>target_score){
// 			userArray[playerChance].setplayerScore(target_score);
// 			clearInterval(interval);
// 		}
// 		element.innerHTML = "Rs."+target_score;
//         }, target_score/1000000);
//     }
//     else if(amount>0)
//     {

//             interval=window.setInterval(function () {
//             sc = sc+1;

// 			if(sc>target_score){
// 				userArray[playerChance].setplayerScore(target_score);
// 				clearInterval(interval);
// 			}
// 			element.innerHTML = "Rs."+target_score;
//             }, target_score/1000000);
//     }
//     //ubsApp.addScore(parseInt(amount));
// 	//element.innerHTML=userArray[playerChance].getplayerScore();
// }








// ubsApp.generateVideo=function(){
// 	var videoConfiguration={};
// 	videoConfiguration.message=scenarioVideo;
// 	console.log(videoConfiguration.message);
// 	videoConfiguration.msg_style="z-index:100;"

// 	document.getElementById("templateBase").innerHTML+=ubsPopupTemplate(videoConfiguration);
// 	$('#helpButton').attr('disabled',false);
// }
