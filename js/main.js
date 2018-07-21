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
let ubsCalculatorTemplate;
let ubsDecisionInsuranceTemplate;
let ubsLeaderBoardTemplate;
let ubsPurchaseTemplate;
let	ubsLuckTemplate;
let ubsPayOffTemplate;
let ubsOrdertemplate;
let ubsQuizTemplate;
let choiceSelected={};
let timeVar;
var answerselected=0;         //whyGlobal
var inventoryToBeUpdated=0;
var minimumInventoryScoreRequired=0;
ubsApp.wheelOfFortune = null;
var scenarioVideo;
var interval;				//whyGlobal
var interval;				
let audioConfig = {};
var count=0;
var calculatorReq=false;
let screenHeight = $(window).height();
let screenWidth = $(window).width();
let userArray=[];
let templateName = ["static", "decision","purchase","luck","pay","payOff", "wheelOfFortune", "timerTemp", "popup", "rollingDice","scratchCard","choice","audio", "score","sales", "quiz","decisionInsurance"];
let templateMap = {};
let offlinePurchaseClicked=false;
monopoly.numplayers=0;
let numplayers = monopoly.numplayers;
monopoly.playerChance = 0;
let playerChance = monopoly.playerChance;



$(document).ready(function(){	
	ubsApp.intitializeTemplates();
	ubsApp.mapTemplatetoFunction();
    
	
});


ubsApp.getStaticTemplate = function(templateConfig, tempVar){

	if(templateConfig.display_score){
		tempVar.html += ubsScoreTemplate(ubsApp.pages.score[0]);
	}
	if(templateConfig.resultId){
		templateConfig.src=templateConfig.src.replace("Message",ubsApp.translation[templateConfig.resultId]);
	}
	if(templateConfig.buttonType){
		templateConfig.src=templateConfig.src.replace("Message",ubsApp.translation[templateConfig.buttonType]);
	}
	if(templateConfig.score_animation_req){
		tempVar.flag=true;
	}
	if(templateConfig.onClickPage){
		tempVar.staticConfig = templateConfig;
	}
	tempVar.html += ubsStaticTemplate(templateConfig);
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
ubsApp.getPurchaseTemplate=function(templateConfig,tempVar){
	var object={};
	object.purchase="PURCHASE";
	object.bankBalance="Rs. "+userArray[playerChance].getBankBalance();
	object.cash="Rs. "+userArray[playerChance].getplayerScore();
	object.credit="Rs. "+userArray[playerChance].getCredit();
	object.sliderValue=userArray[playerChance].getInventoryScore();
	object.inventoryValue=userArray[playerChance].getInventoryScore()*1000;
	object.creditLimit="Rs. "+userArray[playerChance].getCreditLimit();
	tempVar.html+=ubsPurchaseTemplate(object);
}

ubsApp.getLuckTemplate=function(templateConfig,tempVar){
	var object={};
	object.title="LUCK";
	object.color="black";
	object.background="#4DAF7C";
	object.wildCard="true";
	object.helpRequired="true";
	object.scenario=templateConfig.question;
	object.payMessage="YOU CAN";
	object.amount=templateConfig.amount;
	object.alternalteMessage="OR TO WAIVE FINE YOU CAN ";
	tempVar.html+=ubsLuckTemplate(object);
}
ubsApp.getPayTemplate=function(templateConfig,tempVar){
	var object={};
	object.title="PAYMENT";
	object.color="white";
	object.background="#000";
	object.scenario=templateConfig.question;
	object.amount=templateConfig.amount;
	object.payMessage="YOU CAN";
	object.alternalteMessage="OR TO WAIVE FINE YOU CAN ";
	tempVar.html+=ubsLuckTemplate(object);
}


ubsApp.getPayOffTemplate=function(templateConfig,tempVar){
	var object={};
	object.title="PAY DEBT";
	
	object.cash=userArray[playerChance].getplayerScore();
	object.bankBalance=userArray[playerChance].getBankBalance();
	object.debt=userArray[playerChance].getCredit();
	object.payOff="true";
	tempVar.html+=ubsPayOffTemplate(object);
}

ubsApp.getDecisionInsuranceTemplate=function(templateConfig,tempVar){
var object={};
object.balance = userArray[playerChance].getBankBalance();
object.cash = userArray[playerChance].getplayerScore();
object.debt = userArray[playerChance].getCredit();
object.inventory = userArray[playerChance].getInventoryScore();
object.inventoryValue = (userArray[playerChance].getInventoryScore()*1000);
object.reputationPts = userArray[playerChance].getReputationPts();
object = $.extend(true, templateConfig, object);
tempVar.html+=ubsDecisionInsuranceTemplate(object);
}
ubsApp.getWheelOfFortuneTemplate = function(templateConfig, tempVar){
	ubsApp.updateTemplateForFortuneWheel(templateConfig, tempVar.wheelConfig);
	tempVar.html += wheelOfFortuneTemplate(templateConfig);
}

ubsApp.getTimerTempTemplate = function(templateConfig, tempVar){
	if(!userArray[playerChance].getIsComputer())
	{tempVar.html+=ubsTimerTemplate(templateConfig);
	tempVar.timerConfig=templateConfig;}
}

ubsApp.getQuizTemplate = function(templateConfig, tempVar){
	if(templateConfig.options!=undefined){
		ubsDecisionOption = templateConfig.options[0].optionName;
	}
	tempVar.html+=ubsQuizTemplate(templateConfig);
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

ubsApp.getSalesTemplate = function(templateConfig, tempVar){
	tempVar.salesConfig = templateConfig;
	ubsApp.selectAvailableItems(templateConfig);
	tempVar.html += ubsOrdertemplate(templateConfig);
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

	$("#templateContent").empty();
	// if(calculatorReq)
	// {
	// 	tempVar.html+=ubsCalculatorTemplate();
	// }
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


	if(answerselected!=0)
	{
		ubsApp.addScore(parseInt(answerselected));
		document.getElementById("lastBalanceContent").innerHTML="₹"+userArray[playerChance].getplayerScore();
		answerselected=0;
	}	
	if(inventoryToBeUpdated!=0)
	{
		ubsApp.addInventory(parseInt(inventoryToBeUpdated));
		document.getElementById("inventoryContent").innerHTML=userArray[playerChance].getInventoryScore()+"%";
		//ubsApp.animate_score(parseInt(inventoryToBeUpdated),document.getElementById("inventoryContent"));
		inventoryToBeUpdated=0;
	}

	/*if($('#headId').length > 0) {
		if(flag){
				ubsApp.animate_score(answerselected);
		}
		document.getElementById("headId").innerHTML=ubsApp.getScore();
	}*/
}

ubsApp.updateChoiceSelected = function(noOfQuestions) {
	if(jQuery.isEmptyObject(choiceSelected)){
	 for(let i=0; i< noOfQuestions; i++) {
	 choiceSelected[0] = false;
	 }
	}
}
ubsApp.areAllChoicesSelected= function(){

    if(jQuery.isEmptyObject(choiceSelected)) {
        return 0;
    }
   let x=0;
    $.each(choiceSelected, function(key,value){
     if(value == true) {
        x++;
     }
});
    return x;
}

ubsApp.updateChoices = function(choiceId){
	 choiceSelected[choiceId]=true;
}

ubsApp.runQuizTemplate=function(){
	questionNo = ubsApp.initializeQuiz();
	$('#monopolyBase').css("z-index",-10);
    $('#templateBase').css("z-index",10);
    
    document.getElementById("templateContent").style.opacity="0.95";
    
    $('#templateContent').css("height",(screenHeight)+'px');
    $('#templateContent').css("width",(screenWidth)+'px');

    ubsApp.renderPageByName(questionNo);
	$("#correctAnswers").text("0");
	$("#quizQuestionNumber").text("1");
}
ubsApp.atleastOneSelected= function(name){
	var radio = document.getElementsByName(name);
  	for (var i=0; i<radio.length; i++) {
   
    if (radio[i].checked) {
      return true;
    } 
  }
  return false;
}
ubsApp.nextQuizQuestion=function(page, answer, name){

  if(ubsApp.atleastOneSelected(name)){
  	  var c = $("#correctAnswers").html();
	  let checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").attr("id");
	  let questionNo = $("#quizQuestionNumber").html();

	  if(checkedValue==answer){
	  	c = parseInt(c);
	  	c=c+1;
	  	ubsApp.updateChoices(questionNo);
	  }

	  else{
	  	console.log("Answer is wrong");
	  }
	  ubsApp.renderPageByName(page);
	  if(page!="quizResult"){

		  questionNo = parseInt(questionNo);
		  questionNo=questionNo+1;
		  $("#quizQuestionNumber").text(questionNo); 
	  }
	  else{
	  		var correctAnswers = ubsApp.areAllChoicesSelected();
	  		var percent = correctAnswers*100/5.0;
	  		if(percent>=80){												//I have to put minimum cap in every question in config
	   			$("#quizResult").text("Passed with "+percent+"% ");
	  		}
	  		else{
	  			$("#quizResult").text("Failed with "+percent+"% ");
	  		}
	  }
	  $("#correctAnswers").text(c);
  }
}

ubsApp.doneQuiz=function(){
		if(ubsApp.areAllChoicesSelected()>3){
			
			console.log("Passed the Quiz");
		}
		else{
			console.log("Failed in Quiz");
		}
	choiceSelected = {};
	$('#monopolyBase').css("z-index",0)
	$('#templateBase').css("z-index",0)
	$('#templateContent').css("height",0+'px')
	document.getElementById("templateContent").innerHTML="";
}

ubsApp.cancelQuiz=function(){
	choiceSelected = {};
	$('#monopolyBase').css("z-index",0)
	$('#templateBase').css("z-index",0)
	$('#templateContent').css("height",0+'px')
	document.getElementById("templateContent").innerHTML="";
}

ubsApp.initializeQuiz=function(){
	var arr = [];
	let noOfQuestions = 5;
	ubsApp.updateChoiceSelected(noOfQuestions);
	while(arr.length < noOfQuestions){
	    var randomNumber = Math.floor(Math.random()*5+1);
	    if(arr.indexOf(randomNumber) > -1) continue;
	    arr[arr.length] = randomNumber;
	}
	for(let i=0;i<arr.length-1;i++){
		ubsApp.pages["quizQ"+arr[i]].templates[0].onClickPage.nextPage = "quizQ"+arr[i+1];
	}
	ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].onClickPage.nextPage = "quizResult";
	return "quizQ"+arr[0];
}

ubsApp.reduceInventory= function(page,amount,hideScenarios,total,totalTime){

	let time = totalTime - $("#seconds").html();
	let c = userArray[playerChance].getplayerScore();
	let r = userArray[playerChance].getReputationPts();                           
	let s = userArray[playerChance].getInventoryScore();

	s-=0.85*total/(1000);									//Multiplier from Inventory % to cash is 1000
	userArray[playerChance].setInventoryScore(s);
	var userTotal = $("#receiptTotal").val();
	if(userTotal==total){

		userArray[playerChance].setplayerScore(c+total*31);

		if(time*100.0/totalTime<100/3.0)r+=3;
		else if (time*100.0/totalTime<200/3.0)r+=2;
		else if (time*100.0/totalTime<100)r+=1;

		userArray[playerChance].setReputationPts(r);

	}else{

		if(userTotal>total){
			userArray[playerChance].setReputationPts(r-1);
			userArray[playerChance].setplayerScore(c+total*31);
		}
		else{
			userArray[playerChance].setplayerScore(c+userTotal*31);
		}
	}
	ubsApp.checkPageorBoard(page,amount,hideScenarios);
}

ubsApp.calculateBill = function(){
	let total=0;
	var item = document.getElementsByName('amt');
	for(var i=0;i<item.length;i++){
        if(parseInt(item[i].value))
            total += parseFloat(item[i].value);
    }
	document.getElementById("receiptTotal").value=total;
}

ubsApp.selectAvailableItems = function(config){
	let percent = ubsApp.checkInventory();
	percent = 1 - percent;
	let noOfItems =config.order.length;
	var notAvailable = Math.floor(percent*noOfItems);
	var arr = [];
	while(arr.length < notAvailable){
	    var randomNumber = Math.floor(Math.random()*noOfItems);
	    if(arr.indexOf(randomNumber) > -1) continue;
	    arr[arr.length] = randomNumber;
	}
	for(let i = 0; i<arr.length;i++){
		config.order[arr[i]].exclude = true;
	}
	let val=0;
	for(let i=0;i<noOfItems;i++){
		if(config.order[i].exclude==false){
			val+=config.order[i].quantity * ubsApp.salesConfig.itemRate[config.order[i].item];
		}
	}
	config["tempTotal"] = val;
}

ubsApp.checkInventory=function(){

	let percent = 0;
	let invLevel = userArray[playerChance].getInventoryScore();

    if(invLevel > 80 ){
       percent = (Math.random()*1)*0.1+0.9;
    }
    else  if(invLevel >60 ){
       percent = (Math.random()*2)*0.1+0.8;
    }
    else  if(invLevel > 40 ){
       percent = (Math.random()*2)*0.1+0.6;
    }
    else  if(invLevel > 20 ){
       percent = (Math.random()*2)*0.1+0.4;
    }
    else  if(invLevel < 20 ){
       percent = (Math.random()*2)*0.1+0.2;
    }
    return percent;
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
	ubsQuizTemplate = Template7.compile(ubsApp.quizTemplate);
	// ubsCalculatorTemplate=Template7.compile(ubsApp.calculatorTemplate);
	ubsLeaderBoardTemplate=Template7.compile(ubsApp.leaderBoardTemplate);
	ubsPurchaseTemplate=Template7.compile(ubsApp.purchaseTemplate);
	ubsLuckTemplate=Template7.compile(ubsApp.luckyUnluckyTemplate);
	ubsPayOffTemplate=Template7.compile(ubsApp.payOffTemplate);
	ubsOrdertemplate = Template7.compile(ubsApp.salesTemplate);
	ubsDecisionInsuranceTemplate = Template7.compile(ubsApp.decisionInsuranceTemplate);

}

ubsApp.renderDecisonTemplate = function() {
  let checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").attr("id");
  answerselected=$("#" + checkedValue + "Amount").text(); 
  inventoryToBeUpdated=$("#" + checkedValue + "Inventory").text();

  
  clearInterval(interval);
  clearInterval(timeVar);
  this.renderPage(ubsApp.pages[ubsDecisionOptionMap[checkedValue].page]);

}

ubsApp.updateRollingDiceTemplate = function(template){
	let windowHeight =  $(window).height();
    template.diceSceneWidth = windowHeight/3;
}


ubsApp.openCalculator=function(){
	document.write("Calculator Opened");
}


ubsApp.initializeLeaderBoard=function(category)
{
	let leaderBoardObject={}; //new
	 //new
	leaderBoardObject.array=[];
	if(category=="Score")
	{
		leaderBoardObject.title = ubsApp.translation["scoreSideBar"];
		for(var j=0;j<parseInt(numplayers);j++)
    	{ 	//new
			leaderBoardObject.array.push({
				"name":userArray[j].getplayerName(),
				"color":userArray[j].getplayerColor(),
				"score":userArray[j].getplayerScore()
			});

		}
	}
	else if(category=="Document")
	{
		leaderBoardObject.title = ubsApp.translation["documentSideBar"];
		for(var j=0;j<parseInt(numplayers);j++)
    	{
				//new
				leaderBoardObject.array.push({
					"name":userArray[j].getplayerName(),
					"color":userArray[j].getplayerColor(),
					"document":"Dummy Text"
				});
        	//document.getElementById("leaderBoard").innerHTML+="<div style=\"margin-top:15%;border:2px solid;display: block; white-space: nowrap; width:100%;padding:7px;display:inline-block; color:"+userArray[j].getplayerColor()+";\"><span style=\"color:white;white-space: nowrap; transition: width 2s;margin-top:2px;\">"+userArray[j].getplayerName()+": "+ "</span>"+ "<span id=\"score\" style=\"white-space: nowrap;margin-left:1%;margin-left:5%;color:white;\">" +"Dummt Text"+ "</span>"  +  "</div><br>";
		}
	}
	else if(category=="Inventory")
	{
		leaderBoardObject.title = ubsApp.translation["inventorySideBar"];
		for(var j=0;j<parseInt(numplayers);j++)
    	{
			//new
			leaderBoardObject.array.push({
				"name":userArray[j].getplayerName(),
				"color":userArray[j].getplayerColor(),
				"inventory":userArray[j].getInventoryScore()+"%",
			});
        	//document.getElementById("leaderBoard").innerHTML+="<div style=\"margin-top:15%;border:2px solid;display: block; white-space: nowrap; width:100%;padding:7px;display:inline-block; color:"+userArray[j].getplayerColor()+";\"><span style=\"color:white;white-space: nowrap; transition: width 2s;margin-top:2px;\">"+userArray[j].getplayerName()+": "+ "</span>"+ "<span id=\"score\" style=\"white-space: nowrap;margin-left:1%;margin-left:5%;color:white;\">" +"Dummy Text"+ "</span>"  +  "</div><br>";
		}
	}
	else if(category=="Merit")
	{
		leaderBoardObject.title = ubsApp.translation["meritSideBar"];
		for(var j=0;j<parseInt(numplayers);j++)
    	{
			//new
			leaderBoardObject.array.push({
				"name":userArray[j].getplayerName(),
				"color":userArray[j].getplayerColor(),
				"merit":"Dummy Text"
			});
        	//document.getElementById("leaderBoard").innerHTML+="<div style=\"margin-top:15%;border:2px solid;display: block; white-space: nowrap; width:100%;padding:7px;display:inline-block; color:"+userArray[j].getplayerColor()+";\"><span style=\"color:white;white-space: nowrap; transition: width 2s;margin-top:2px;\">"+userArray[j].getplayerName()+": "+ "</span>"+ "<span id=\"score\" style=\"white-space: nowrap;margin-left:1%;margin-left:5%;color:white;\">" +"Dummy Text"+ "</span>"  +  "</div><br>";
		}
	}

	document.getElementById("leaderBoardParent").innerHTML=ubsLeaderBoardTemplate(leaderBoardObject);
}

ubsApp.startTimer=function(temp){
    var timeleft = temp.time;
    timeVar = setInterval(function(){
		if(document.getElementById(temp.divID))
		document.getElementById(temp.divID).innerHTML = timeleft;
		timeleft--;
	    if(timeleft === 0 ){
	        clearInterval(timeVar);
	        choiceSelected={};
	        ubsApp.nextMove();
	    }
    },1000);
}

ubsApp.nextMove = function(){
	playerChance+=1;
    playerChance%=numplayers;
	$('#monopolyBase').css("z-index",0)
	$('#templateBase').css("z-index",0)
	$('#templateContent').css("height",0+'px')
	document.getElementById("templateContent").innerHTML="";
	$('#rollIt').attr('disabled',false);
	
	this.currentPlayerContents();
	$("#diceval").html(" ");
	//$('#lastBalanceContent').html("Rs."+userArray[playerChance].getplayerScore());
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

ubsApp.addInventory=function(inventoryPoints){
	var currentInventory=userArray[playerChance].getInventoryScore();
	userArray[playerChance].setInventoryScore(inventoryPoints+currentInventory);
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
ubsApp.playStaticTemplate = function(staticConfig){
	setTimeout(function(){
		$('#'+staticConfig.id).trigger('click');
	},staticConfig.conclusionTime);
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
 		},decisionConfig.optionsTime);
  	},decisionConfig.questionTime);
}

ubsApp.currentPlayerContents=function(){
	$("#player").html(userArray[playerChance].getplayerName());
	document.getElementById("weekContent").innerHTML=userArray[playerChance].getWeeks();	
	document.getElementById("lastBalanceContent").innerHTML="₹"+userArray[playerChance].getplayerScore();
	document.getElementById("insuranceContent").innerHTML="No";
	document.getElementById("inventoryContent").innerHTML=userArray[playerChance].getInventoryScore()+"%";
	document.getElementById("reputationContent").innerHTML=userArray[playerChance].getReputationPts();
}


ubsApp.generateVideo=function(){
	var videoConfiguration={};
	videoConfiguration.message=scenarioVideo;
	console.log(videoConfiguration.message);
	videoConfiguration.msg_style="z-index:100;"
	
	document.getElementById("templateBase").innerHTML+=ubsPopupTemplate(videoConfiguration);
	$('#helpButton').attr('disabled',false);
}


ubsApp.updateInventoryLevel=function(value){
		if(value<userArray[playerChance].getInventoryScore()){	//instead of 20 write userArray[playerChance].getInventoryScore()
			document.getElementById("mySlider").value=userArray[playerChance].getInventoryScore();	//userArray[playerChance].getInventoryScore()
			document.getElementById("percent").innerHTML=userArray[playerChance].getInventoryScore()+"%";	//userArray[playerChance].getInventoryScore()
        	document.getElementById("value").innerHTML="Rs. "+userArray[playerChance].getInventoryScore()*1000;	//userArray[playerChance].getInventoryScore()*1000;
		}
		else{
			document.getElementById("percent").innerHTML=value+"%";
        	document.getElementById("value").innerHTML="Rs. "+parseInt(value*1000); 
		}
		
}
ubsApp.fillUp=function(){
	var temp=document.getElementById("value").innerHTML;
	document.getElementById("newInventoryLevelText").value=document.getElementById("percent").innerHTML;
	document.getElementById("newCostText").value="Rs. "+(parseInt(temp.substring(4))-userArray[playerChance].getInventoryScore()*1000);//-userArray[playerChance].getInventoryScore()*1000;
}



ubsApp.pay=function(){
	var paymentDone=false;
	var cost=document.getElementById("newCostText").value;
	cost=parseInt(cost.substring(4));
	if(cost){
	var creditChanged=userArray[playerChance].getCredit();
	var bankBalanceChanged=userArray[playerChance].getBankBalance();
	var cashChanged=userArray[playerChance].getplayerScore();
	var newLevel=document.getElementById("newInventoryLevelText").value;
	newLevel=parseInt(newLevel.substring(0,newLevel.length));
	var totalAmountEntered=0;
	for(var i=1;i<4;i++){
		if(document.getElementById("parent"+i).style.display!="none"){
			if(document.getElementById("amount"+i).value)
			totalAmountEntered+=parseInt(document.getElementById("amount"+i).value);
			else{
				document.getElementById("result").innerHTML=ubsApp.translation["validAmount"];
				break;		
			}
		}
	}
	if(totalAmountEntered<cost){
		document.getElementById("result").innerHTML=ubsApp.translation["lessMoney"];
	}
	
	else if(totalAmountEntered>cost){
		document.getElementById("result").innerHTML=ubsApp.translation["moreMoney"];
	}
	else{
		document.getElementById("result").innerHTML="";
		for(var i=1;i<4;i++){
			if(document.getElementById("parent"+i).style.display!="none"){
			var dropDown=document.getElementById("pay"+i);
			var paymentMode=dropDown.options[dropDown.selectedIndex].value;
			var amount=parseInt(document.getElementById("amount"+i).value);
			if(paymentMode=="cash"){
				if(amount<=userArray[playerChance].getplayerScore()){
					
					cashChanged=userArray[playerChance].getplayerScore()-amount;
					totalAmountEntered-=amount;
					//userArray[playerChance].setplayerScore();
				}
				else{
					document.getElementById("result").innerHTML=ubsApp.translation["moreCash"];
					break;
				}
			}
			else if(paymentMode=="cheque"){
				if(amount<=userArray[playerChance].getBankBalance()){
					//userArray[playerChance].setInventoryScore(newLevel);
					bankBalanceChanged=userArray[playerChance].getBankBalance()-amount;
					totalAmountEntered-=amount;
					//userArray[playerChance].setBankBalance();
				}
				else{
					document.getElementById("result").innerHTML=ubsApp.translation["bankBalance"];
					break;
				}
			}
			else if(paymentMode=="credit"){
				if(amount<=userArray[playerChance].getCreditLimit()-userArray[playerChance].getCredit()){
					//userArray[playerChance].setInventoryScore(newLevel);
					creditChanged=userArray[playerChance].getCredit()+amount;
					totalAmountEntered-=amount;
					//userArray[playerChance].setCredit();
				}
				else{
					document.getElementById("result").innerHTML=ubsApp.translation["lotDebt"];
					break;
				}
			}
		}
		}
		if(totalAmountEntered==0)
		{
			paymentDone=true;
		}
		if(paymentDone){
			userArray[playerChance].setInventoryScore(newLevel);
			userArray[playerChance].setplayerScore(cashChanged);
			userArray[playerChance].setBankBalance(bankBalanceChanged);
			userArray[playerChance].setCredit(creditChanged);
			var temptimer;
			var temptime=20;	
			temptimer = setInterval(function(){
				temptime--;
				
			document.getElementById("bankBalanceValue").innerHTML="Rs. "+userArray[playerChance].getBankBalance();
			document.getElementById("cashValue").innerHTML="Rs. "+userArray[playerChance].getplayerScore();
			document.getElementById("creditValue").innerHTML="Rs. "+userArray[playerChance].getCredit();
			document.getElementById("creditLimitValue").innerHTML="Rs. "+userArray[playerChance].getCreditLimit();
				if(temptime === 0 ){
					clearInterval(temptimer);
					if(!offlinePurchaseClicked)
						ubsApp.nextMove();
					else{
						$('#monopolyBase').css("z-index",0)
						$('#templateContent').css("z-index",0)
						$('#templateContent').css("height",0+'px')
						document.getElementById("templateContent").innerHTML="";
						$('#rollIt').attr('disabled',false);
						ubsApp.currentPlayerContents();
						offlinePurchaseClicked=false;
					}		
				}
			},50);
			// document.getElementById("bankBalanceValue").innerHTML=userArray[playerChance].getBankBalance();
			// document.getElementById("cashValue").innerHTML=userArray[playerChance].getplayerScore();
			// document.getElementById("creditValue").innerHTML=userArray[playerChance].getCredit();
			// document.getElementById("creditLimitValue").innerHTML=userArray[playerChance].getCreditLimit();
			// ubsApp.wait(3000);
			
			//setTimeout(ubsApp.nextMove(), 3000);
			
		}
			
	}
}
else{
	document.getElementById("result").innerHTML=ubsApp.translation["pleaseConfirm"];
}
/*	var cost=document.getElementById("newCostText").value;
	cost=parseInt(cost.substring(4));
	var newLevel=document.getElementById("newInventoryLevelText").value;
	newLevel=parseInt(newLevel.substring(0,newLevel.length));
	var cash,balance,credit,creditLimit;
	var i=0;
	for(i=1;i<4;i++){

		if(document.getElementById("parent"+i).style.display!="none"){
			var dropDown=document.getElementById("pay"+i);
			var paymentMode=dropDown.options[dropDown.selectedIndex].value;
			if(paymentMode=="cash"){
					cash=userArray[playerChance].getplayerScore()-cost;
					if(cash<0){
						if(i<3){
							if(document.getElementById("parent"+(i+1)).style.display=="none")
							{
								document.getElementById("parent"+(i+1)).style.display="";
								break;
							}
							else{
								cost=cost-userArray[playerChance].getplayerScore();
								cash=0;
							}
						}
						
					}
					else{
						cost=0;
						userArray[playerChance].setInventoryScore(newLevel);
						break;
					}
					
			}
			else if(paymentMode=="cheque"){
				balance=250000;
				balance=balance-cost;
				if(balance<0){
					if(i<3){
						if(document.getElementById("parent"+(i+1)).style.display=="none"){
							document.getElementById("parent"+(i+1)).style.display="";
							break;
						}
						else{
								cost=cost-balance;
								balance=0;
							}
					}
				
				}
				else{
					cost=0;
					userArray[playerChance].setInventoryScore(newLevel);
					break;
				}

			}
			else if(paymentMode=="credit"){
				creditLimit=userArray[playerChance].getCreditLimit();
				credit=userArray[playerChance].getCredit();
				credit=credit+cost;
				if(creditLimit<credit){
					if(i<3){
						if(document.getElementById("parent"+(i+1)).style.display=="none")
						{
							document.getElementById("parent"+(i+1)).style.display="";
							break;
						}
												
					}
					else{
						cost=0;
					}
				}
				else{
					cost=0;
					userArray[playerChance].setInventoryScore(newLevel);
					break;
				}

			}
		}
	}
	if(cost!=0){
		if(i>3){
			console.log("Please Select Sensible Amount");
		}
		console.log("Insufficient Amount");
	}
	else if(cost==0){
		if(cash)
		{
			console.log("Cash");
			
		userArray[playerChance].setplayerScore(cash);
		}
		if(balance)
		userArray[playerChance].setBankBalance(balance);
		if(credit)
		userArray[playerChance].setCredit(credit);
		if(creditLimit)	
		userArray[playerChance].setCreditLimit(creditLimit);
		this.nextMove();
	}*/
}

// ubsApp.showScore=function(){
// 	var element=document.getElementById("purchaseLeaderBoard");
// 	elem
// }
		
ubsApp.addPaymentMode=function(){
	for(var i=1;i<4;i++){
		if(document.getElementById("parent"+i).style.display=="none"){
			document.getElementById("parent"+i).style.display="";
			break;
		}
	}
}

ubsApp.wait=function(ms){
	var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

ubsApp.payFromBank=function(amount){

		if(userArray[playerChance].getBankBalance()<amount){
			document.getElementById("result").innerHTML=ubsApp.translation["bankBalance"];
		}
		else{
			userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+amount);
			ubsApp.nextMove();
		}
	
}

// ubsApp.setAmountTextLimit=function(number){
// 	var element=document.getElementById("amount"+number);
// 	var x = document.getElementById("pay"+number).value;
//     if(x=="cash"||x=="Cash"){
// 		element.max=""+userArray[playerChance].getplayerScore();
// 	}
// 	else if(x=="cheque"||x=="Cheque"){
// 		element.max=""+userArray[playerChance].getBankBalance();
// 	}
// 	else if(x=="credit"||x=="Credit"){
// 		element.max=""+userArray[playerChance].creditLimit()-userArray[playerChance].getCredit();
// 	}
// }


ubsApp.payDebt=function(){
	var amountEntered=document.getElementById("debtPaymentText").value;
	if(userArray[playerChance].getCredit>0){
		if(amountEntered){
			if(amountEntered<userArray[playerChance].getCredit()){
				var dropDown=document.getElementById("pay"+i);
				var paymentMode=dropDown.options[dropDown.selectedIndex].value;
				if(paymentMode=="cash"){
					if(amountEntered<=userArray[playerChance].getplayerScore()){
						userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()-amountEntered);
						userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+3);
					}
					else{
						document.getElementById("result").innerHTML=ubsApp.translation["moreCash"];		
					}
				}
				else if(paymentMode=="cheque"){
					if(amountEntered<=userArray[playerChance].getBankBalance()){
						userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()-amountEntered);
						userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+3);
					}
					else{
						document.getElementById("result").innerHTML=ubsApp.translation["bankBalance"];		
					}
				}
				
			}
			else{
				document.getElementById("result").innerHTML=ubsApp.translation["moreMoney"];
			}
		}
		
	}
	else{
			document.getElementById("result").innerHTML=ubsApp.translation["noDebt"]; //break;
	}
}

ubsApp.openPurchaseScenario=function(){
	offlinePurchaseClicked=true;
	$('#monopolyBase').css("z-index",-10)
	$('#templateBase').css("z-index",10)
	
	document.getElementById("templateContent").style.opacity="0.95";
	
	$('#templateContent').css("height",(screenHeight)+'px')
	$('#templateContent').css("width",(screenWidth)+'px')
	ubsApp.renderPageByName("purchaseScenario");
}
