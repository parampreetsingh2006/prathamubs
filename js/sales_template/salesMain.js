ubsApp.getSalesTemplate = function(templateConfig, tempVar){
	tempVar.salesConfig = templateConfig;
	ubsApp.selectAvailableItems(templateConfig);
	tempVar.html += ubsOrdertemplate(templateConfig);
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

		if(time*100.0/totalTime<=20)r+=4;
		else if (time*100.0/totalTime<=40)r+=3;
		else if (time*100.0/totalTime<=60)r+=2;
		else if (time*100.0/totalTime<=80)r+=1;
		else if (time*100.0/totalTime<=100)r+=0;

		userArray[playerChance].setReputationPts(r);

	}else{

		if(userTotal>total){
			userArray[playerChance].setReputationPts(r-4);
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