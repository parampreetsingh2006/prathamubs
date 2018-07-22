monopoly.ubsBoardTemplate = undefined;
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

var ubsBoardTemplate = monopoly.ubsBoardTemplate;
var ubsMonopolyStaticTemplate= monopoly.ubsMonopolyStaticTemplate;
var ubsformTemplate= monopoly.ubsformTemplate;
var ubsCenterScoreBoardTemplate=monopoly.centerScoreBoardTemplate;
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




$(document).ready(function(){
	monopoly.intitializeTemplates();
  monopoly.initializeScenarios();
	monopoly.renderPageforBoard(monopoly.pages.EnterLanguagePage);
});

monopoly.intitializeTemplates = function(){

	ubsBoardTemplate = Template7.compile(monopoly.boardTemplate);
	rollingDiceTemplate = Template7.compile(monopoly.rollingDiceTemplate);
  ubsMonopolyStaticTemplate = Template7.compile(monopoly.staticTemplate);
  ubsformTemplate = Template7.compile(monopoly.formTemplate);
  ubsCenterScoreBoardTemplate=Template7.compile(ubsApp.centerScoreBoardTemplate);
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
    if(templateConfig.weekDeadLine){
      numberOfWeeksDeadline=templateConfig.weekDeadLine;
    }
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
		}else if(templateType == "rollingDice"){
			rollingDiceConfig.optionPageMap = templateConfig.optionPageMap;
			monopoly.updateRollingDiceTemplate(templateConfig);
			html += rollingDiceTemplate(templateConfig);
		}else if(templateType == "static") {
			html += ubsStaticTemplate(templateConfig);
    }
    else if(templateType=="centerScoreBoard"){
      var object={};
      object.bankBalanceTitle=ubsApp.translation["bankBalanceTitle"]+":  ";
      object.bankBalanceAmount="Rs. "+userArray[playerChance].getBankBalance();
      object.cashAmount="Rs. "+userArray[playerChance].getplayerScore();
      object.cashTitle=ubsApp.translation["cashTitle"]+": ";
      object.debtTitle=ubsApp.translation["debtTitle"]+": ";
      object.transferTitle=ubsApp.translation["transferTitle"];
      object.payOffTitle=ubsApp.translation["payOffTitle"];
      object.debtAmount="Rs. "+userArray[playerChance].getCredit();
      object.playerNameLabel=ubsApp.translation["playerNameTitle"];
      object.diceValueLabel=ubsApp.translation["diceValueTitle"];
      html+=ubsCenterScoreBoardTemplate(object);
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
        scenario = userArray[playerChance].getScenario(blockCategory[blockNo],playerChance);   //   blockCategory[blockNo]
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
       
  },1000);

}

monopoly.myMove = function(count, pId, currentPos) {
  var temp="#p"+pId;
  var playerToken = $(temp);
  var blockNo = currentPos;   
  var movePlayer = setInterval(frame, 500);
  if(currentPos+count >= boardConfig.blocks){
    let x = userArray[pId].getWeeks();
    userArray[pId].setWeeks(++x);
  }
  function frame(){
    if (blockNo == (currentPos+count)%boardConfig.blocks){
      userArray[pId].setplayerCurrentPos((currentPos+count)%boardConfig.blocks);
      clearInterval(movePlayer);
      monopoly.startScenarios(blockNo);
    } 
    else{
      blockNo++;
      
      blockNo %= boardConfig.blocks;
      if(blockNo==0){
        document.getElementById("weekContent").innerHTML=userArray[playerChance].getWeeks();
      }
      $("#" + blockNo).append(playerToken);
    }
  }
}


monopoly.updateRollingDiceTemplate = function(template){
	let windowHeight =  $(window).height();
    template.diceSceneWidth = windowHeight/3;
}

monopoly.rollDice  = function(){
  $('#rollIt').attr('disabled',true);
  $("#container-dice").css("pointer-events","none");
  
  diceVal = pointRoll();
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
    let computerRequired=document.getElementById("computer").checked;
    for( i=0;i<numplayers;i++)
    {
        let user=new User();
        user.setplayerName(document.getElementById("name"+i).value);
        user.setplayerScore(1000);
        user.setInventoryScore(60.00);
        var color=$('input[name=Radio'+i+']:checked').val();
        user.setplayerColor(color.toLowerCase());
        user.setplayerId("p"+i);
        user.setplayerCurrentPos(0);
        user.setBankBalance(250000);
        user.setReputationPts(10);
        user.setCredit(0);
        user.setWildCard(0);
        user.setCreditLimit(15000);
        user.setScenarioArray(scenariosArray);
        user.setWeeks(0);
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
  document.getElementById("leaderBoardParent").style.width="15%";
}

monopoly.closeLeaderBoard=function(){
  document.getElementById("leaderBoardParent").style.width="0%";
}


monopoly.chooseLanguage=function(){
  var language=$('input[name=languageRadio]:checked').val();
  var jsElm = document.createElement("script");
  jsElm.type = "text/javascript";
  jsElm.src = "js/"+language+".js";
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
    monopoly.renderPageforBoard(monopoly.pages.InitialisePlayers);
  }
}


