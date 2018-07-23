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
let numberOfPaymentModes=3;
var numberOfWeeksDeadline=0;
var answerselected=0;         //whyGlobal
var inventoryToBeUpdated=0;
var minimumInventoryScoreRequired=0;
ubsApp.wheelOfFortune = null;
var scenarioVideo;
var interval;				//whyGlobal
var interval;				
let audioConfig = {};
var count=0;
var languageSelected="hindi";
var calculatorReq=false;
let screenHeight = $(window).height();
let screenWidth = $(window).width();
let userArray=[];
let templateName = ["static", "decision","purchase","luck","pay","payOff", "transfer","wheelOfFortune", "timerTemp", "popup", "rollingDice","scratchCard","choice","audio", "score","sales", "quiz","decisionInsurance"];
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

ubsApp.updateChoiceSelected = function(noOfQuestions) {
	if(jQuery.isEmptyObject(choiceSelected)){
	 for(let i=0; i< noOfQuestions; i++) {
	 choiceSelected[i] = false;
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


ubsApp.atleastOneSelected= function(name){
	var radio = document.getElementsByName(name);
  	for (var i=0; i<radio.length; i++) {
   
    if (radio[i].checked) {
      return true;
    } 
  }
  return false;
}


ubsApp.doneQuiz=function(){
	this.currentPlayerContents();
	if(ubsApp.areAllChoicesSelected()>1){
		
		console.log("Passed the Quiz");
	}
	else{
		console.log("Failed in Quiz");
	}
	ubsApp.cancelQuiz();
}

ubsApp.cancelQuiz=function(){
	choiceSelected = {};
	$("#quizCancel").attr("disabled", false);
	$("#quizDone").attr("disabled", true);
	$('#rollIt').attr('disabled',false);
	$('#monopolyBase').css("z-index",0)
	$('#templateBase').css("z-index",0)
	$('#templateContent').css("height",0+'px')
	document.getElementById("templateContent").innerHTML="";
}
ubsApp.runQuizTemplate=function( credits=1, type="general"){   //credits can be amount or points depending on type of quiz
	questionNo = ubsApp.initializeQuiz(type, credits);
	$('#monopolyBase').css("z-index",-10);
    $('#templateBase').css("z-index",10);
    
    document.getElementById("templateContent").style.opacity="0.95";
    
    $('#templateContent').css("height",(screenHeight)+'px');
    $('#templateContent').css("width",(screenWidth)+'px');

    ubsApp.renderPageByName(questionNo);
	$("#correctAnswers").text("0");
	$("#quizQuestionNumber").text("1");
}

ubsApp.checkLuckorGeneral=function(page, percent){

	if(page=="luckQuizResult"){
 		if(percent>=200/3){
   			$("#quizResult").text("Congratulaions!! You passed the quiz with "+percent+"%.\nYour Fine is waived off.");
  		}
  		else{
  			$("#quizResult").text("Oops you couldn't pass the quiz. You got "+percent+"%.\n Your Fine is not Waived off.");
  			var  v =userArray[playerChance].getBankBalance()+parseInt(ubsApp.pages[page].templates[0].amount);
  			userArray[playerChance].setBankBalance(v);
		}
	}
	else if(page=="generalQuizResult"){
		if(percent>=200/3){
  			var pts=ubsApp.pages[page].templates[0].points;
   			$("#quizResult").text("Congratulaions!! You passed the quiz with "+percent+"%.\nYour Reputation points is increased by "+pts+".");
   			var v = userArray[playerChance].getReputationPts()+pts;
   			userArray[playerChance].setReputationPts(v);
  		}
  		else{
  			$("#quizResult").text("Oops!! you couldn't pass the quiz. You got "+percent+"%. \n Your Reputation points won't increase.");
	  	}
	}
}

ubsApp.nextQuizQuestion=function(page, answer, name){

  if(ubsApp.atleastOneSelected(name)){
  	  var c = $("#correctAnswers").html();
	  let checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").attr("id");
	  let questionNo = $("#quizQuestionNumber").html();

	  if(checkedValue==answer){
	  	c = parseInt(c);
	  	c=c+1;
	  	ubsApp.updateChoices(questionNo-1);
	  }
	  else{
	  	// console.log("Answer is wrong");
	  }

	  ubsApp.renderPageByName(page);

	  if(page=="luckQuizResult" || page=="generalQuizResult"){
 
  		$("#quizCancel").attr("disabled", true);
  		$("#quizDone").attr("disabled", false);
  		var correctAnswers = ubsApp.areAllChoicesSelected();
  		var percent = correctAnswers*100/3.0;
  		ubsApp.checkLuckorGeneral(page, percent.toFixed(2) );
	  }
	  else{
		  	questionNo=parseInt(questionNo)+1;
		  	$("#quizQuestionNumber").text(questionNo); 
	  }
	  $("#correctAnswers").text(c);
  }
}
ubsApp.initializeQuiz=function(type,credits){
	var arr = [];
	let noOfQuestions = 3;
	ubsApp.updateChoiceSelected(noOfQuestions);
	while(arr.length < noOfQuestions){
	    var randomNumber = Math.floor(Math.random()*3+1);
	    if(arr.indexOf(randomNumber) > -1) continue;
	    arr[arr.length] = randomNumber;
	}
	for(let i=0;i<arr.length-1;i++){
		ubsApp.pages["quizQ"+arr[i]].templates[0].onClickPage.nextPage = "quizQ"+arr[i+1];
	}
	var str="";
	if(type=="luck"){
		str = "luckQuizResult";
		ubsApp.pages[str].templates[0].amount = credits;
	}
	else if(type=="general") {  
		//no use of credits here
		str ="generalQuizResult";
	}
	ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].onClickPage.nextPage = str;
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
        if(parseFloat(item[i].value) && item[i].id=="input"+(i+1))
            total += parseFloat(item[i].value);
        else if(parseFloat(item[i].value) && item[i].id=="discount")
        	total-= parseFloat(item[i].value);
    }
	document.getElementById("receiptTotal").value=total;
}

ubsApp.selectAvailableItems = function(config){

	let noOfItems =config.order.length;
	for(var i=0;i<noOfItems;i++){
		var x = config.order[i].item;
		config.order[i].rate = ubsApp.translation.itemRateDisplay[x];
	}
	let percent = ubsApp.checkInventory();
	percent = 1 - percent;
	
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
			val+=config.order[i].quantity * ubsApp.salesConfig.itemRate[config.order[i].itemId];
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
			
			ubsApp.closeCurrentScenario();
			this.currentPlayerContents();
			
			$("#diceval").html(" ");
			if(userArray[playerChance].getPayOffDeadline()==0){
				ubsApp.startCurrentScenario();
				ubsApp.renderPageByName("PayOffScenario");
			}
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
	document.getElementById("bankBalance").innerHTML="₹ "+userArray[playerChance].getBankBalance();
	document.getElementById("cash").innerHTML="₹ "+userArray[playerChance].getplayerScore();
	document.getElementById("debt").innerHTML="₹ "+userArray[playerChance].getCredit();
	document.getElementById("inventoryValueContent").innerHTML="₹ "+(userArray[playerChance].getInventoryScore()*1000);
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

ubsApp.closeCurrentScenario=function(){
	$('#monopolyBase').css("z-index",0)
	$('#templateContent').css("z-index",0)
	$('#templateContent').css("height",0+'px')
	document.getElementById("templateContent").innerHTML="";
	$('#rollIt').attr('disabled',false);
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
	console.log(string);
	while(string.indexOf("{{")>=0){
		let translationKey= string.substring(string.indexOf("{{") + 2,string.indexOf("}}",string.indexOf("{{")));//string.substring(string.indexOf("{{")+2,string.indexOf("}}"));
		console.log(translationKey);
		let stringToBeReplaced="{{"+translationKey+"}}";
		string=string.replace(stringToBeReplaced,ubsApp.translation[translationKey]);
	}
	ubsApp.pages=JSON.parse(string);
	string=JSON.stringify(monopoly.pages);
	while(string.indexOf("{{")>=0){
		let translationKey= string.substring(string.indexOf("{{") + 2,string.indexOf("}}",string.indexOf("{{")));//string.substring(string.indexOf("{{")+2,string.indexOf("}}"));
		console.log(translationKey);
		let stringToBeReplaced="{{"+translationKey+"}}";
		string=string.replace(stringToBeReplaced,ubsApp.translation[translationKey]);
	}
	monopoly.pages=JSON.parse(string);
}