ubsApp.getSalesTemplate = function(templateConfig, tempVar){
	tempVar.salesConfig = templateConfig;
	ubsApp.selectAvailableItems(templateConfig);
	templateConfig.SUBMIT = ubsApp.getTranslation("SUBMIT");
	tempVar.html += ubsOrdertemplate(templateConfig);
	ubsApp.raiseAudioEvent(document.getElementById('templateContent'),'spaceLanding');
}
ubsApp.validateAmount = function() {
    var item = document.getElementsByName('amt');
    var salesSubmitButton = document.getElementById('salesSubmitButton');
	for(var i=0;i<item.length;i++){
    	if(!item[i].value) {
    	   ubsApp.raiseAudioEvent(salesSubmitButton, 'wrongAnswer');
    	   ubsApp.openPopup({
               "message" : "Please calculate amount for all items. Do you need Help?",//ubsApp.getTranslation("quizLimitReachedForWeek"),
              "header" : ubsApp.getTranslation("ERROR"),
              "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
              "imageUrl" : "",
               'buttons' : [
                   {
                       'name' : ubsApp.getTranslation("yes"),
                       'action': "ubsApp.closePopup();ubsApp.startHelp(\'salesHelp\');",
                   },

                   {
                               'name' : ubsApp.getTranslation("no"),
                               'action': "ubsApp.closePopup();"
                   }
               ]
           });
           return false;
	    }
	}
    return true;
}
ubsApp.reduceInventory= function(page,amount,hideScenarios,total,totalTime){
	let time = totalTime - $("#seconds").html();
	ubsApp.stopTimer();
	let c = userArray[playerChance].getplayerScore();
	let r = userArray[playerChance].getReputationPts();
	let s = userArray[playerChance].getInventoryScore();

	s-=0.85 * total * ubsApp.getMultiplier() /(1000);									//Multiplier from Inventory % to cash is 1000
	userArray[playerChance].setInventoryScore(s);
	var userTotal = $("#receiptTotal").val();
	if(userTotal==total){

		userArray[playerChance].setplayerScore(c+total*ubsApp.getMultiplier());

        let reputationPointIncrease = ubsApp.getReputationPointsIncreasedInSales(time, totalTime, ubsApp.currentScenarioCategory);

		userArray[playerChance].setReputationPts(r + reputationPointIncrease);
		ubsApp.raiseAudioEvent(document.getElementById('salesSubmitButton'), 'rightAnswer');
		let message = ubsApp.getTranslation("salesCorrectAnswer");
		if(reputationPointIncrease > 0) {
		    message += " " + ubsApp.getTranslation("salesCorrectRptpt") + reputationPointIncrease;
		}
		ubsApp.openResultPopup({
                "message" : message,
                "header" : ubsApp.getTranslation("salesResultHeader"),
                "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                "imageUrl" : "images/wow.jpg",
                "buttons":[
                	{
                		'id':"closePopupButton",
                		'name' : ubsApp.getTranslation("Close"),
              			'action': "ubsApp.raiseAudioEvent(document.getElementById('closePopupButton'), 'saleEnd');ubsApp.closePopup()"
                	}
                ]
                });

	}else{

		if(userTotal>total){
			userArray[playerChance].setReputationPts(r-4);
			userArray[playerChance].setplayerScore(c+total*ubsApp.getMultiplier());
		}
		else{
			userArray[playerChance].setplayerScore(c+userTotal*ubsApp.getMultiplier());
		}
		ubsApp.raiseAudioEvent(document.getElementById('salesSubmitButton'), 'wrongAnswer');
		ubsApp.openResultPopup({
               "message" : ubsApp.getTranslation("salesWrongAnswer") + " " + ubsApp.getTranslation("salesWrongRptpt") + userArray[playerChance].getReputationPts(),
               "header" : ubsApp.getTranslation("salesResultHeader"),
               "headerStyle" : "text-align: center;  color: black; font-weight: 700; ",
               "imageUrl" : "images/wrong.jpg",
               "buttons":[
                	{
                		'id':"closePopupButton",
                		'name' : ubsApp.getTranslation("Close"),
              			'action': "ubsApp.raiseAudioEvent(document.getElementById('closePopupButton'), 'saleEnd');ubsApp.closePopup()"
                	}
                ]
               });
	}
//	ubsApp.checkPageorBoard(page,amount,hideScenarios);
}

ubsApp.getReputationPointsIncreasedInSales = function(time, totalTime, currentScenarioCategory) {

let level1 = 20;
let level2 = 40;
let level3 = 60;
let level4 = 80;

if(currentScenarioCategory == "salesEasy") {
    level1=30;level2=50;level3=70;level4=90;
} else if(currentScenarioCategory == "salesDifficult") {
    level1=40;level2=60;level3=80;level4=100;
} else if(currentScenarioCategory == "salesModerate") {
    level1=50;level2=80;level3=110;level4=140;

}
let reputationPointIncrease = 0;
 if(time*100.0/totalTime<=level1)reputationPointIncrease=4;
 		else if (time*100.0/totalTime<=level2)reputationPointIncrease=3;
 		else if (time*100.0/totalTime<=level3)reputationPointIncrease=2;
 		else if (time*100.0/totalTime<=level4)reputationPointIncrease=1;

 return reputationPointIncrease;
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
	let val=0;
	let percent = 1-ubsApp.checkInventory();
	let notAvailable = Math.floor(percent*noOfItems);
	let arr = [];

	while(arr.length < notAvailable){
	    var randomNumber = Math.floor(Math.random()*noOfItems);
	    if(arr.indexOf(randomNumber) > -1) continue;
	    arr[arr.length] = randomNumber;
	}

	for(let i = 0; i<arr.length;i++){
		config.order[arr[i]].exclude = true;
	}

	for(var i=0;i<noOfItems;i++){
		var x = config.order[i].itemId;
		config.order[i].rate = ubsApp.translation.itemRateDisplay[x];
		if(config.order[i].exclude==false){
			val+=config.order[i].quantity * ubsApp.salesConfig.itemRate[x];
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

ubsApp.getMultiplier = function() {
    return 31;
}