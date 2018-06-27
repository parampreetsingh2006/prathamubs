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
var tokens = ['Red', 'Blue', 'Green', 'Purple'];
var flag2= false;
var object={};
object.numberOfTokens=[];

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
    ubsApp.initializeScoreBoard();
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
  var scenario = userArray[playerChance].getScenario("Sales",playerChance);   //blockCategory[blockNo]
  ubsApp.renderPage(scenario.getTemplate());
  $("#monopolyBase").fadeOut();
  $('#templateContent').css("height", screenHeight+'px')
  $('#templateContent').css("width", screenWidth+'px')
  $('#templateBase').css("display", "table").fadeIn();
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
    for(var i=0;i<numplayers;i++)
    {
        let user=new User();
        user.setplayerName(document.getElementById("name"+i).value);
        user.setplayerScore(1000);
        user.setplayerColor( $("input[name='" + object.numberOfTokens[i].radioName + "'  ]:checked").attr("radioValue"));
        var index=tokens.indexOf($('#list'+i+' option:selected').text());
        tokens.splice(index,1);
        user.setplayerId("p"+i);
        user.setplayerCurrentPos(0);
        user.setScenarioArray(scenariosArray);
        userArray[i]=user;
    }
    done_initialising=true;
    monopoly.renderPageforBoard(monopoly.pages["monopoly"]);
}

monopoly.initPlayers=function(){
    document.getElementById("take_input").innerHTML="";
    numplayers=document.getElementById("num_players").value;
    if(numplayers<=4)
    {
        for(var i=0;i<numplayers;i++)
        {
            
            object.nameTitle="Name"+(i+1);
            object.nameId="name"+(i);
            object.numberTokens = 4;
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
            if(scenariosArray[value.category]==null)
            {
                scenariosArray[value.category]=[];
            }
            scenariosArray[value.category].push(scenario);
    }
    });
}
