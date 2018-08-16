monopoly.ubsBoardTemplate = undefined;
monopoly.ubsSideScoreBoardTemplate = undefined;
monopoly.ubsMonopolyStaticTemplate =undefined;
monopoly.ubsformTemplate = undefined;
monopoly.centerScoreBoardTemplate=undefined;
monopoly.boardConfig={};
monopoly.salesScenarioArray=[];
monopoly.luckScenarioArray=[];
monopoly.purchaseScenarioArray=[];
monopoly.done_initialising=false;
monopoly.surpriseScenarioArray=[];
monopoly.blockCategory=[];
monopoly.scenariosArray=[];
monopoly.tokens = ['Red', 'Blue', 'Green', 'Purple'];
monopoly.difficultyLevel=["easy","medium","hard"];
monopoly.flag2= false;
monopoly.computerDifficulty={};
monopoly.scenario ={};
var harnamSinghProfit=11000;
var ubsBoardTemplate = monopoly.ubsBoardTemplate;
var ubsSideScoreBoardTemplate = monopoly.sideScoreBoardTemplate;
var ubsMonopolyStaticTemplate= monopoly.ubsMonopolyStaticTemplate;
var ubsformTemplate= monopoly.ubsformTemplate;
// var ubsCenterScoreBoardTemplate=monopoly.centerScoreBoardTemplate;
var boardConfig = monopoly.boardConfig;
var salesScenarioArray=monopoly.salesScenarioArray;
var luckScenarioArray=monopoly.luckScenarioArray;
var purchaseScenarioArray=monopoly.purchaseScenarioArray;
var done_initialising=monopoly.done_initialising;
var surpriseScenarioArray=monopoly.surpriseScenarioArray;
var blockCategory=monopoly.blockCategory;
var scenariosArray=monopoly.scenariosArray;
var tokens =monopoly.tokens;
var difficultyLevel=monopoly.difficultyLevel;
var flag2=monopoly.flag2;
var computerDifficulty=monopoly.computerDifficulty;
var scenario =  monopoly.scenario;
ubsApp.maxNumOfWeeks = 12;
var renderTimeOutMiliSec = 3000;
ubsApp.inventoryPerPercentValue = 1000;

$(document).ready(function(){
	monopoly.intitializeTemplates();
  monopoly.initializeScenarios();
  
  monopoly.renderPageforBoard(monopoly.pages.Splash);
  
  //setTimeout(monopoly.renderPageforBoard, 30, monopoly.pages.Splash);
  setTimeout(monopoly.renderPageforBoard, renderTimeOutMiliSec, monopoly.pages.EnterLanguagePage);
  
  
	//monopoly.renderPageforBoard(monopoly.pages.EnterLanguagePage);
});

monopoly.intitializeTemplates = function(){
	ubsBoardTemplate = Template7.compile(monopoly.boardTemplate);
	ubsSideScoreBoardTemplate = Template7.compile(monopoly.sideScoreBoardTemplate);
	rollingDiceTemplate = Template7.compile(monopoly.rollingDiceTemplate);
    ubsMonopolyStaticTemplate = Template7.compile(monopoly.staticTemplate);
    ubsformTemplate = Template7.compile(monopoly.formTemplate);
    // ubsCenterScoreBoardTemplate=Template7.compile(ubsApp.centerScoreBoardTemplate);
}

monopoly.initialiseCategory = function(){
      for(let block = 0; block<boardConfig.top_row.length; block++){
          blockCategory[boardConfig.top_row[block].id]=boardConfig.top_row[block].category;
        }
      for(let block = 0; block<boardConfig.left_col.length; block++){
          blockCategory[boardConfig.left_col[block].id]=boardConfig.left_col[block].category;
        }
      for(let block = 0; block<boardConfig.right_col.length; block++){
          blockCategory[boardConfig.right_col[block].id]=boardConfig.right_col[block].category;
        }
      for(let block = 0; block<boardConfig.bottom_row.length; block++){
          blockCategory[boardConfig.bottom_row[block].id]=boardConfig.bottom_row[block].category;
        }
}

monopoly.renderPageforBoard = function(page) {
    let html = "";
    for(let i=0; i< page.length; i++) {
        let templateConfig = page[i];
        /*if(templateConfig.weekDeadLine){
            numberOfWeeksDeadline=templateConfig.weekDeadLine;
        }*/
        let templateType = templateConfig.templateType;

        if(templateType == "board"){
            flag2=true;
            boardConfig=templateConfig;
            for(let i = 0; i<numplayers; i++){
                templateConfig.top_row[0].players.push({
                    "playerId" : userArray[i].getplayerId(),
                    "tokenColor" : userArray[i].getplayerColor(),
                    "currentPos" :userArray[i].getplayerCurrentPos(),
                    "playerName" :userArray[i].getplayerName(),
                    "score" : userArray[i].getplayerScore()
                });
            }
            for(var j=0;j<templateConfig.bottom_row.length;j++){
                let key=templateConfig.bottom_row[j].title;
                let translatedString=ubsApp.translation[key];
                templateConfig.bottom_row[j].title=translatedString;
            }
            for(var j=0;j<templateConfig.top_row.length;j++){
                templateConfig.top_row[j].title=ubsApp.translation[templateConfig.top_row[j].title];
            }
            for(var j=0;j<templateConfig.left_col.length;j++){
                templateConfig.left_col[j].title=ubsApp.translation[templateConfig.left_col[j].title];
            }
            for(var j=0;j<templateConfig.right_col.length;j++){
                templateConfig.right_col[j].title=ubsApp.translation[templateConfig.right_col[j].title];
            }
            console.log(templateConfig);

            monopoly.initialiseCategory();
            html+=ubsBoardTemplate(templateConfig);

        } else if(templateType == "sideScoreBoard") {
            var object={};
            object.bankBalanceAmount=userArray[playerChance].getBankBalance();
            object.cashAmount=userArray[playerChance].getplayerScore();
            object.debtAmount=userArray[playerChance].getCredit();
            var template=ubsApp.pages["sideScoreBoard"].templates[0];
            template=$.extend(template,object);
            html += ubsSideScoreBoardTemplate(template);
        }
        /* else if(templateType == "rollingDice"){
            rollingDiceConfig.optionPageMap = templateConfig.optionPageMap;
            monopoly.updateRollingDiceTemplate(templateConfig);
            html += rollingDiceTemplate(templateConfig);
        }*/else if(templateType == "static") {
            html += ubsStaticTemplate(templateConfig);
        }/*
            else if(templateType=="centerScoreBoard"){
            var object={};
            object.bankBalanceAmount="Rs. "+userArray[playerChance].getBankBalance();
            object.cashAmount="Rs. "+userArray[playerChance].getplayerScore();
            object.debtAmount="Rs. "+userArray[playerChance].getCredit();
            var template=ubsApp.pages["centerScoreBoard"].templates[0];
            template=$.extend(template,object);
            console.log(template);
            html+=ubsCenterScoreBoardTemplate(template);
        }*/
        else if(templateType=="audioTemplate"){
          html += ubsAudioTemplate(templateConfig);
        }
    }

	$("#monopolyBase").empty();
	$("#monopolyBase").append(html);
	
    if(flag2) {
     ubsApp.initializeLeaderBoard("Score");
     ubsApp.currentPlayerContents();
     //$("#player").html(userArray[playerChance].getplayerName()); 
    }
}
// monopoly.playComputer = function(div){
//     div.addEventListener('playComputer', function (e) {
//         ubsApp.playDecisionTemplate(e.detail);
//     });
//   }


monopoly.startScenarios = function(blockNo){
  setTimeout(function(){
      let category = blockCategory[blockNo];
      if(category) {
        scenario = userArray[playerChance].getScenario(category,playerChance);   //   blockCategory[blockNo]
                let currentTemplateName=scenario.getName();
                let currentTemplate=ubsApp.pages[currentTemplateName].templates;
                let key=ubsApp.pages[currentTemplateName].templates[0].question;

                $('#monopolyBase').css("z-index",-10);
                $('#templateBase').css("z-index",10);

                document.getElementById("templateContent").style.opacity="0.95";

                $('#templateContent').css("height",(screenHeight)+'px')
                $('#templateContent').css("width",(screenWidth)+'px')

                ubsApp.renderPageByName(scenario.getName());
                currentTemplate[0].question=key;
      } else {
        ubsApp.nextMove();
      }

       
  },1000);

}

monopoly.myMove = function(count, pId, currentPos) {
  var temp="#p"+pId;
  var playerToken = $(temp);
  var blockNo = currentPos;   

   var movePlayer = setInterval(frame, 500);
  if(currentPos+count >= boardConfig.blocks){
    let x = userArray[pId].getWeeks();
    if(x < ubsApp.maxNumOfWeeks) {
          userArray[pId].setWeeks(++x);
            if(cashTransfered){
              cashTransfered=false;
              userArray[pId].setTransferReminderOpened(true);
            }
            else{
              userArray[pId].setTransferReminderOpened(false);
            }

            userArray[pId].setOpenWeekSummary(true);
    } else {
        userArray[pId].setWeeks(++x);
        playerToken.remove();
        clearInterval(movePlayer);
        let message = userArray[pId].getplayerName() + " "  + ubsApp.getTranslation("gameFinishedForAUser");
        ubsApp.closeCurrentScenario();
        ubsApp.openPopup({ "message" : message,
                                  "header" : ubsApp.getTranslation("NOTICE"),
                                  "headerStyle" : "text-align: center;  color: green; font-weight: 700; font-size: 3vw;",
                                       });
        setTimeout(function() {ubsApp.nextMove();}, 5000);

    }


  }
  function frame(){
    if (blockNo == (currentPos+count)%boardConfig.blocks){
      userArray[pId].setplayerCurrentPos((currentPos+count)%boardConfig.blocks);
      clearInterval(movePlayer);
      if(userArray[pId].getWeeks() <= ubsApp.maxNumOfWeeks) {
        monopoly.startScenarios(blockNo);
      }
    } 
    else{
      blockNo++;
      
      blockNo %= boardConfig.blocks;
      if(blockNo==0){
        document.getElementById("weekContent").innerHTML=userArray[playerChance].getWeeks();
      }
      $("#" + blockNo).append(playerToken);
      var audioElement = document.getElementById('p'+pId+'');
      ubsApp.raiseAudioEvent(audioElement, 'moveToken');

    }
  }
}

ubsApp.getTranslation = function(key) {
  if(ubsApp.translation[key]) {
    return ubsApp.translation[key];
  }

  return "";
}
monopoly.updateRollingDiceTemplate = function(template){
	let windowHeight =  $(window).height();
    template.diceSceneWidth = windowHeight/3;
}

monopoly.rollDice  = function(){
  $('#rollIt').attr('disabled',true);
  $("#container-dice").css("pointer-events","none");
  
    diceVal = pointRoll();
    //diceVal = 13;
	setTimeout(function(){ 
	if(playerChance >= numplayers){
		playerChance=0;
	}
	$("#player").html(userArray[playerChance].getplayerName());
	$("#diceval").html(diceVal);	
      monopoly.myMove(diceVal, playerChance, userArray[playerChance].getplayerCurrentPos());   //update Real time dice Value
    },1000);
}


monopoly.storePlayerDetails=function(){
    var i=0;
    let computerRequired=false;  //document.getElementById("computer").checked;
    for( i=0;i<numplayers;i++)
    {
        let user=new User();
        user.setplayerName(document.getElementById("name"+i).value);
        user.setplayerScore(initialPlayerCash);
        user.setLastWeekSummary(initialPlayerCash, initialPlayerBankBalance, initialReputation, 0, 0);
        user.setInventoryScore(60.00);
        var color=$('input[name=Radio'+i+']:checked').val();
        user.setplayerColor(color.toLowerCase());
        user.setplayerId("p"+i);
        user.setplayerCurrentPos(0);
        user.setAdvantageCardNumber(0);
        user.setBankBalance(initialPlayerBankBalance);
        user.setReputationPts(initialReputation);
        user.setCredit(0);
        user.setWildCard(0);
        user.setCreditLimit(15000);
        user.setTransferReminderOpened(true);
        user.setScenarioArray(scenariosArray);
        user.setWeeks(1);
        userArray[i]=user;
    }
    if(computerRequired)
    {
      let user=new User();
      user.setplayerName("Computer");
      user.setplayerScore(1000);
      user.setInventoryScore(100);
      user.setIsComputer(true);
      var level=$('input[name=compRadioLevel]:checked').val();
      user.setDifficultyLevel(level.toLowerCase());
      user.setInventoryScore(60);
      user.setCorrectProbability(level);
      user.setplayerCurrentPos(0);
      user.setplayerId("p"+i);
      user.setWeeks(0);
      user.setScenarioArray(scenariosArray);
      user.setplayerColor(tokens[tokens.length-1]);
      user.setCorrectAnswered(0);
      userArray.push(user);
      numplayers++;
    }
    done_initialising=true;
    monopoly.renderPageforBoard(monopoly.pages["monopoly"]);
}

monopoly.initPlayers=function(){
    numplayers=document.getElementById("num_players").value;
    document.getElementById("take_input").innerHTML="";
    if(numplayers<=4)
    {
        for(var i=0;i<numplayers;i++)
        {
            object={};
            object.numberOfTokens=[];
            object.nameTitle=ubsApp.translation["name"]+(i+1);

            var object={};
            object.nameTitle=ubsApp.translation["name"]+(i+1);
            object.numberOfTokens=[];

            object.nameId="name"+(i);
            object.numberOfTokens=[];
            for (var j = 0; j<tokens.length; j++) {
                object.numberOfTokens.push(
                {   "radioName":"Radio"+i,
                    "radioValue":tokens[j],
                    "radioId":"radio"+j,
                    "tokenColor":tokens[j]
                });
            
            }
            document.getElementById("take_input").innerHTML+=ubsformTemplate(object);
      }
      
    }
}
monopoly.initComputerDifficulty=function()
{
  computerDifficulty={};
    computerDifficulty.difficulty=[];
    document.getElementById("computerDetails").innerHTML="";
  if(document.getElementById("computer").checked)
  {
    for(var i=0;i<difficultyLevel.length;i++)
    {
          computerDifficulty.difficulty.push({
          "radioName":"compRadioLevel",
          "radioValue":difficultyLevel[i],
          "radioId":"comp"+i,
          "text":ubsApp.translation[difficultyLevel[i]]
        }
        );
    }
    document.getElementById("computerDetails").innerHTML+=ubsformTemplate(computerDifficulty);
  } 
}

monopoly.initializeScenarios=function()
{
    $.each(ubsApp.pages, function(key, value) {
        if(value.category)
        {
            let scenario = new Scenarios();
            scenario.setCategory(value.category);

            scenario.setRepeatForAllUsers(value.repeatforall);
            scenario.setRepeatforUser(value.repeatforuser);
            scenario.setName(key);
            
            //scenario.setTemplate(value.templates);
            scenario.setIfCalculatorRequired(true);
            if(scenariosArray[value.category]==null)
            {
                scenariosArray[value.category]=[];
            }
            scenariosArray[value.category].push(scenario);
        }
    });
}

monopoly.openLeaderBoard=function(category){
  ubsApp.initializeLeaderBoard(category);
  if(document.getElementById("leaderBoardParent") !=null){
		document.getElementById("leaderBoardParent").style.width="15%";
	}
}

monopoly.closeLeaderBoard=function(){

  if(document.getElementById("leaderBoardParent")) {
    document.getElementById("leaderBoardParent").style.width="0%";
  }


}


monopoly.chooseLanguage=function(){


  var language=$('input[name=languageRadio]:checked').val();
  var jsElm = document.createElement("script");
  jsElm.type = "text/javascript";
  jsElm.src = "js/language_translations/"+language+".js";
  document.head.appendChild(jsElm);
  
  var link  = document.createElement('link');
  languageSelected=language;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/'+language+'.css';
  document.head.appendChild(link);
  link.onload=function(){
    
    
  }
   jsElm.onload=function(){
      ubsApp.translateScenarios();
      monopoly.renderPageforBoard(monopoly.pages.WelcomePage);
    }

  }

monopoly.readInstruction=function(){
	 
	  ubsApp.openPopup({ "message" : ubsApp.getTranslation("instructionsMessage"),
          "header" : ubsApp.getTranslation("instructionHeader"),
          "headerStyle" : "text-align: center;  color: green; font-weight: 700; font-size: 3vw;"
               });
	  }

monopoly.startGame=function(){
	
	  var jsElm = document.createElement("script");
	  jsElm.type = "text/javascript";
	  jsElm.src = "js/language_translations/"+languageSelected+".js";
	  document.head.appendChild(jsElm);
	  
	  var link  = document.createElement('link');
	  link.rel  = 'stylesheet';
	  link.type = 'text/css';
	  link.href = 'css/'+languageSelected+'.css';
	  document.head.appendChild(link);
	  
	  link.onload=function(){
	    
	  }
	   jsElm.onload=function(){
		   ubsApp.openPopup({
               "message" : ubsApp.getTranslation("loadingGameMessage"),
               "header" : "",
               "headerStyle" : "",
               "showCloseButton" : false,
               });
     ubsApp.translateScenarios();
     monopoly.renderPageforBoard(monopoly.pages.InitialisePlayers);
     ubsApp.closeCurrentScenario();
	    }
}


 ubsApp.endGame=function(){
  	var arr=[];

  	for(var i=0;i<numplayers;i++){
  		var harnamProjectedScore=userArray[i].getWeeks()*harnamSinghProfit;
  		let currentPlayerProfit=0;
  		currentPlayerProfit+=(userArray[i].getplayerScore()-initialPlayerCash);
  		currentPlayerProfit+=(userArray[i].getBankBalance()-initialPlayerBankBalance);
  		currentPlayerProfit-=userArray[i].getCredit();
  		currentPlayerProfit=currentPlayerProfit*0.15;
  		if(currentPlayerProfit<harnamProjectedScore)
  		{
  			arr[i]=false;
  		}
  		else{
  			arr[i]=true;
  		}
  	}

  		var winnerName="";
  		var currentHighScore=0;
  		var atleastOne=false;
  		for(var i=0;i<numplayers;i++)
  		{
  			if(arr[i])
  			{
  				atleastOne=true;
  				var consolidatedScore=userArray[i].getplayerScore()+userArray[i].getBankBalance()-userArray[i].getCredit()+userArray[i].getReputationPts();
  				if(consolidatedScore>currentHighScore){
  					currentHighScore=consolidatedScore;
  					winnerName=userArray[i].getplayerName();
  				}
  			}
  		}

  		if(!atleastOne){
  		winnerName="No One Wins"
  	}
  	console.log(winnerName);
  }

ubsApp.nextMove = function(){
			playerChance+=1;
	        playerChance%=numplayers;
	        let count = 0;
	        let atleastOnePlayerPlaying = false;

            while(!userArray[playerChance].isPlayerEligibleToPlay() && count <= numplayers) {
                count++;
                playerChance+=1;
                playerChance%=numplayers;
            }

            if(count <= numplayers) {
                atleastOnePlayerPlaying = true;
            }

			ubsApp.closeCurrentScenario();
			this.currentPlayerContents();

			$("#diceval").html(" ");

            if(!atleastOnePlayerPlaying) {

                ubsApp.endGame();
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


ubsApp.currentPlayerContents=function(){
	$("#player").html(userArray[playerChance].getplayerName());
	document.getElementById("weekContent").innerHTML=userArray[playerChance].getWeeks();
	document.getElementById("bankBalance").innerHTML="₹ "+userArray[playerChance].getBankBalance();
	document.getElementById("cash").innerHTML="₹ "+userArray[playerChance].getplayerScore();
	document.getElementById("debt").innerHTML="₹ "+userArray[playerChance].getCredit();
	document.getElementById("inventoryValueContent").innerHTML="₹ "+(userArray[playerChance].getInventoryScore()*ubsApp.inventoryPerPercentValue);
	document.getElementById("inventoryContent").innerHTML=userArray[playerChance].getInventoryScore()+"%";
	document.getElementById("reputationContent").innerHTML=userArray[playerChance].getReputationPts();
	document.getElementById("advantageCardContent").innerHTML=userArray[playerChance].getAdvantageCardNumber();
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


ubsApp.openQuizIfValid = function() {

    if(userArray[playerChance].canUserTakeQuiz()) {
        userArray[playerChance].incrementQuizCount();
        ubsApp.renderPageByName('generalQuizStarter');
    } else {
        ubsApp.openPopup({
        "message" : ubsApp.getTranslation("quizLimitReachedForWeek"),
        "header" : ubsApp.getTranslation("ERROR"),
        "headerStyle" : "text-align: center;  color: red; font-weight: 700; font-size: 3vw;",
        })
    }

}