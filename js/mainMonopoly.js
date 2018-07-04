ubsApp.monopoly = {};
var monopoly = ubsApp.monopoly;
var ubsBoardTemplate;
var ubsMonopolyStaticTemplate;
var ubsformTemplate;
var boardConfig;
var numplayers ;
var userArray=[];
var salesScenarioArray=[];
var luckScenarioArray=[];
var playerChance=0;
var purchaseScenarioArray=[];
var done_initialising=false;
var surpriseScenarioArray=[];
var blockCategory=[];
var scenariosArray=[];
var scenario;
var tokens = ['Red', 'Blue', 'Green', 'Purple'];
var difficultyLevel=["Easy","Medium","Hard"];
var languages=["English", "Hindi"];
var flag2= false;

var object={};
object.numberOfTokens=[];
var computerDifficulty={};
computerDifficulty.difficulty=[];
$(document).ready(function(){
	monopoly.intitializeTemplates();
  monopoly.intitializeScenarios();
	monopoly.renderPageforBoard(monopoly.pages.InitialisePlayers);
});

monopoly.intitializeTemplates = function() {

	ubsBoardTemplate = Template7.compile(monopoly.boardTemplate);
	rollingDiceTemplate = Template7.compile(monopoly.rollingDiceTemplate);
  ubsMonopolyStaticTemplate = Template7.compile(monopoly.staticTemplate);
  ubsformTemplate = Template7.compile(monopoly.formTemplate);
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
      monopoly.initialiseCategory();
      }
      /*for(var j=0;j<templateConfig.bottom_row.length;j++){
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
      }*/
      
      console.log(templateConfig);
			html+=ubsBoardTemplate(templateConfig);
		}else if(templateType == "rollingDice"){
			rollingDiceConfig.optionPageMap = templateConfig.optionPageMap;
			monopoly.updateRollingDiceTemplate(templateConfig);
			html += rollingDiceTemplate(templateConfig);
		}else if(templateType == "static") {
			html += ubsStaticTemplate(templateConfig);
		}
  }

	$("#monopolyBase").empty();
	$("#monopolyBase").append(html); 
	
  if(flag2)
  {
    ubsApp.initializeLeaderBoard("Score");
  }
}
monopoly.myMove = function(count, pId, currentPos) {
  var temp="#p"+pId;
  var playerToken = $(temp);
  var blockNo = currentPos;   
  var movePlayer = setInterval(frame, 500);
  function frame() {
    if (blockNo == (currentPos+count)%boardConfig.blocks) {
      clearInterval(movePlayer);
    } else {
      blockNo++;
      blockNo %= boardConfig.blocks;
      
      $("#" + blockNo).append(playerToken);
    }
  }
  userArray[pId].setplayerCurrentPos((currentPos+count)%boardConfig.blocks);
  setTimeout(function(){
  scenario = userArray[playerChance].getScenario("Sales",playerChance);   //blockCategory[blockNo]
  let currentTemplate=scenario.getTemplate();
  if(currentTemplate[0].question){
    //document.write(currentTemplate[0].question);
    let key=currentTemplate[0].question;
    monopoly.generateQuestion(key,currentTemplate);
  }
  ubsApp.renderPage(scenario.getTemplate());
  $('#monopolyBase').css("z-index",-10)
  $('#templateBase').css("z-index",10)
  
  document.getElementById("templateContent").style.opacity="0.95";
  
  $('#templateContent').css("height",(screenHeight)+'px')
  $('#templateContent').css("width",(screenWidth-200)+'px')
 
}, 500*count+2500);
}


monopoly.updateRollingDiceTemplate = function(template){
	let windowHeight =  $(window).height();
    template.diceSceneWidth = windowHeight/3;
}

monopoly.rollDice  = function(){
  diceVal = mainroll();
	setTimeout(function(){ 
	if(playerChance >= numplayers){
		playerChance=0;
	}
	$("#player").html(userArray[playerChance].getplayerName());
	$("#diceval").html(diceVal);	
      monopoly.myMove(diceVal, playerChance, userArray[playerChance].getplayerCurrentPos());   //update Real time dice Value
    },3000);
  
	
}

monopoly.storePlayerDetails=function(){
    
    let computerRequired=document.getElementById("computer").checked;
    for(var i=0;i<numplayers;i++)
    {
        let user=new User();
        user.setplayerName(document.getElementById("name"+i).value);
        user.setplayerScore(1000);
        var color=$('input[name=Radio'+i+']:checked').val();
        user.setplayerColor(color.toLowerCase());
        user.setplayerId("p"+i);
        user.setplayerCurrentPos(0);
        user.setScenarioArray(scenariosArray);
        userArray[i]=user;
    }
    if(computerRequired)
    {
      let user=new User();
      user.setplayerName("Computer");
      user.setplayerScore(1000);
      user.setIsComputer(true);
      var level=$('input[name=compRadioLevel]:checked').val();
      user.setDifficultyLevel(level.toLowerCase());
      user.setplayerCurrentPos(0);
      user.setScenarioArray(scenariosArray);
      user.setplayerColor(tokens[tokens.length-1]);
      userArray.push(user);
      numplayers++;
    }
    var language=$('input[name=languageRadio]:checked').val();
   
      var jsElm = document.createElement("script");
      jsElm.type = "text/javascript";
      // make the script element load file
      jsElm.src = "js/"+language+".js";
      // finally insert the element to the body element in order to load the script
      document.head.appendChild(jsElm);  
    
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
            object.nameTitle="Name"+(i+1);
            object.nameId="name"+(i);
            
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
          "text":difficultyLevel[i]
        }
        );
    }
    document.getElementById("computerDetails").innerHTML+=ubsformTemplate(computerDifficulty);
  }
  
}
monopoly.intitializeScenarios=function()
{
    $.each(ubsApp.pages, function(key, value) {
        if(value.category)
        {
            let scenario = new Scenarios();
            scenario.setCategory(value.category);
            scenario.setTemplate(value.templates);
            scenario.setRepeatForAllUsers(true);
            scenario.setRepeatforUser(false);
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

monopoly.generateQuestion=function(key,template){
    var question=ubsApp.translation[key];
    template[0].question=template[0].question.replace(key,question)
    console.log(question);
    scenario.setTemplate(template);
}