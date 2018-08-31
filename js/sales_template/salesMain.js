ubsApp.getSalesTemplate = function(templateConfig, tempVar){
	tempVar.salesConfig = templateConfig;
	ubsApp.selectAvailableItems(templateConfig);
	templateConfig.SUBMIT = ubsApp.getTranslation("SUBMIT");
	templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	templateConfig.Customer = ubsApp.getTranslation("Customer");
	templateConfig.gameLogo = ubsApp.getTranslation("gameLogo");
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

    if(!$("#receiptTotal").val()) {
         ubsApp.openPopup({
                       "message" : "Please calculate total amount. Do you need any help?",//ubsApp.getTranslation("quizLimitReachedForWeek"),
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
    return true;
}
ubsApp.reduceInventory= function(page,amount,hideScenarios,total,totalTime){
    total = parseFloat(total);
	let time = totalTime - $("#seconds").html();
	ubsApp.stopTimer();
	let c = userArray[playerChance].getplayerScore();
	let r = userArray[playerChance].getReputationPts();
	let s = userArray[playerChance].getInventoryScore();

	s-=0.85 * total * ubsApp.getMultiplier() /(1000);									//Multiplier from Inventory % to cash is 1000
	userArray[playerChance].setInventoryScore(s);
	let userTotal = Math.round(parseFloat($("#receiptTotal").val()) * 100) / 100;
	let cashIncreased = Math.round(total*ubsApp.getMultiplier() * 100)/ 100;
	if(userTotal==total){


		userArray[playerChance].setplayerScore(c+cashIncreased);

        let reputationPointIncrease = ubsApp.getReputationPointsIncreasedInSales(time, totalTime, ubsApp.currentScenarioCategory);

		userArray[playerChance].setReputationPts(r + reputationPointIncrease);
		ubsApp.raiseAudioEvent(document.getElementById('salesSubmitButton'), 'rightAnswer');
		let message = ubsApp.getTranslation("salesCorrectAnswer");
		if(reputationPointIncrease > 0) {
		    message += ubsApp.getTranslation("salesCorrectRptpt1").replace("{{reputationPoints}}",reputationPointIncrease).replace("{{time}}",time);
		}
		message += ubsApp.getTranslation("salesCorrectRptpt2").replace("{{cashincreased}}",cashIncreased);
		ubsApp.openResultPopup({
                "message" : message,
                "header" : ubsApp.getTranslation("salesResultHeader"),
                "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                "imageUrl" : ubsApp.getTranslation("wowImage"),
                "buttons":[
                	{
                		'id':"closePopupButton",
                		'name' : ubsApp.getTranslation("CLOSE"),
              			'action': "ubsApp.raiseAudioEvent(document.getElementById('closePopupButton'), 'saleEnd');ubsApp.closePopup()"
                	}
                ]
                });

	}else{

        let message = ubsApp.getTranslation("salesWrongAnswer");
		if(userTotal>total){
			userArray[playerChance].setReputationPts(r-4);
			userArray[playerChance].setplayerScore(c+cashIncreased);
			message+=ubsApp.getTranslation("salesWrongRptpt") + 4 + ". ";
		}
		else{
		    cashIncreased = Math.round(userTotal*ubsApp.getMultiplier() * 100)/ 100;
			userArray[playerChance].setplayerScore(c+cashIncreased);
			message+=ubsApp.getTranslation("salesWrongRptpt2");
		}

		message+=ubsApp.getTranslation("salesWrongRptpt3").replace("{{cashincreased}}",cashIncreased);
		ubsApp.raiseAudioEvent(document.getElementById('salesSubmitButton'), 'wrongAnswer');
		ubsApp.openResultPopup({
               "message" : message,
               "header" : ubsApp.getTranslation("salesResultHeader"),
               "headerStyle" : "text-align: center;  color: black; font-weight: 700; ",
               "imageUrl" : "images/wrong.jpg",
               "buttons":[
                      {
                           'name' : ubsApp.getTranslation("yes"),
                           'action': "ubsApp.closePopup();ubsApp.startHelp(\'salesHelp\');",
                     },

                	{
                		'id':"closePopupButton",
                		'name' : ubsApp.getTranslation("no"),
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
} else if(currentScenarioCategory == "salesModerate") {
    level1=40;level2=60;level3=80;level4=100;
} else if(currentScenarioCategory == "salesDifficult") {
    level1=50;level2=80;level3=110;level4=140;

}
let reputationPointIncrease = 0;
 if(time<=level1)reputationPointIncrease=4;
 		else if (time<=level2)reputationPointIncrease=3;
 		else if (time<=level3)reputationPointIncrease=2;
 		else if (time<=level4)reputationPointIncrease=1;

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
	//document.getElementById("receiptTotal").value=total;
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

    let orderNo=1;
	for(var i=0;i<noOfItems;i++){
		var x = config.order[i].itemId;
		config.order[i].rate = ubsApp.translation.itemRateDisplay[x];
		if(config.order[i].exclude==false){
		    config.order[i].no = orderNo;
		    orderNo++;
			val+=config.order[i].quantity * ubsApp.salesConfig.itemRate[x];
			if(config.order[i].discountOnItem) {
            	    if(config.order[i].discountOnItem.type == 1) {
            	        val-=config.order[i].discountOnItem.value * config.order[i].quantity * ubsApp.salesConfig.itemRate[x] / 100;
            	    } else {
            	        val-=config.order[i].discountOnItem.value;
            	    }
            }
		}
	}

	if(config.discountOnTotal) {
	    if(config.discountOnTotal.type == 1) {
	        val-=config.discountOnTotal.value * val / 100;
	    } else {
	        val-=config.discountOnTotal.value;
	    }
	}
	config["tempTotal"] = Math.round(val * 100) / 100;
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
    else  if(invLevel > 0 ){
       percent = (Math.random()*2)*0.1+0.2;
    } else  {
        percent = 0;
    }
    return percent;
}

ubsApp.getMultiplier = function() {
    return 31;
}