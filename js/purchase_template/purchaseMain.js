let numberOfPaymentModes=1;

ubsApp.getPurchaseTemplate=function(templateConfig,tempVar){
	var object={};

	object.bankBalance="₹ "+userArray[playerChance].getBankBalance();
	object.cash="₹ "+userArray[playerChance].getplayerScore();
	object.credit="₹ "+userArray[playerChance].getCredit();
	object.sliderValue=userArray[playerChance].getInventoryScore();
	object.currentPlayerName = userArray[playerChance].getplayerName();
	object.inventoryValue="₹ "+userArray[playerChance].getInventoryScore()*1000;
    object.creditLimit="₹ "+userArray[playerChance].getCreditLimit();
    templateConfig=$.extend(templateConfig,object);
	tempVar.html+=ubsPurchaseTemplate(templateConfig);
}


ubsApp.updateInventoryLevel=function(value){
    if(parseFloat(value)<parseFloat(userArray[playerChance].getInventoryScore())){	//instead of 20 write userArray[playerChance].getInventoryScore()
        document.getElementById("mySlider").value=userArray[playerChance].getInventoryScore();	//userArray[playerChance].getInventoryScore()
        document.getElementById("percent").innerHTML=userArray[playerChance].getInventoryScore();	//userArray[playerChance].getInventoryScore()
        document.getElementById("value").innerHTML="₹ "+userArray[playerChance].getInventoryScore()*1000;	//userArray[playerChance].getInventoryScore()*1000;
    }
    else{
        document.getElementById("percent").innerHTML=parseFloat(value).toFixed(2);
        document.getElementById("value").innerHTML="₹ "+parseInt(value*1000);
    }
    
}
ubsApp.fillUp=function(){
var temp=document.getElementById("value").innerHTML;
document.getElementById("newInventoryLevelText").value=document.getElementById("percent").innerHTML;
$("#newCostText").text((parseInt(temp.substring(2))-userArray[playerChance].getInventoryScore()*1000));//-userArray[playerChance].getInventoryScore()*1000;
$("#updatedInventoryValue").text(temp.substring(2));
}

ubsApp.pay=function(){
var paymentDone=false;
var resultMessage="";
var cost=$("#newCostText").text();
var inventoryPercent=document.getElementById("percent").innerHTML ;
//cost=parseInt(cost.substring(4));
if(cost){
var creditChanged=userArray[playerChance].getCredit();
var bankBalanceChanged=userArray[playerChance].getBankBalance();
var cashChanged=userArray[playerChance].getplayerScore();
var newLevel=document.getElementById("newInventoryLevelText").value;
newLevel=parseInt(newLevel.substring(0,newLevel.length));
var totalAmountEntered=0;
for(var i=1;i<=numberOfPaymentModes;i++){
    if(document.getElementById("parent"+i).style.display!="none"){
        //if(document.getElementById("amount"+i).value)
        if(cost) {
            //totalAmountEntered+=parseInt(document.getElementById("amount"+i).value);
            totalAmountEntered+=parseInt(cost);
        }

        else{
            resultMessage = ubsApp.translation["validAmount"];
            break;		
        }
    }
}
if(totalAmountEntered<cost){
    resultMessage = ubsApp.translation["lessMoney"].replace("<CurrentAmount>",totalAmountEntered).replace("<ActualAmount>",cost);
}

else if(totalAmountEntered>cost){
    resultMessage = ubsApp.translation["moreMoney"].replace("<CurrentAmount>",totalAmountEntered).replace("<ActualAmount>",cost);
}
else{
    for(var i=1;i<=numberOfPaymentModes;i++){
        if(document.getElementById("parent"+i).style.display!="none"){
        var dropDown=document.getElementById("pay"+i);
        var paymentMode=dropDown.options[dropDown.selectedIndex].value;
        //var amount=parseInt(document.getElementById("amount"+i).value);
        let amount = parseInt(cost);
        if(paymentMode=="cash"){
            if(amount<=userArray[playerChance].getplayerScore()){
                
                cashChanged=userArray[playerChance].getplayerScore()-amount;
                totalAmountEntered-=amount;
                //userArray[playerChance].setplayerScore();
            }
            else if(userArray[playerChance].getBankBalance() >= (amount - userArray[playerChance].getplayerScore())){
                cashChanged = 0;
                bankBalanceChanged = userArray[playerChance].getBankBalance() - (amount - userArray[playerChance].getplayerScore());
                totalAmountEntered-=amount;

            } else if((userArray[playerChance].getCredit() + amount - userArray[playerChance].getBankBalance() - userArray[playerChance].getplayerScore()) <= userArray[playerChance].getCreditLimit()){
                 cashChanged = 0;
                 bankBalanceChanged = 0;
                 creditChanged= userArray[playerChance].getCredit() + (amount - userArray[playerChance].getBankBalance() - userArray[playerChance].getplayerScore());
                 totalAmountEntered-=amount;

            } else {
                resultMessage=ubsApp.translation["lotDebt"];
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
            else if((userArray[playerChance].getCredit() + amount - userArray[playerChance].getBankBalance()) <= userArray[playerChance].getCreditLimit()){
                 bankBalanceChanged = 0;
                 creditChanged= userArray[playerChance].getCredit() + (amount - userArray[playerChance].getBankBalance());
                 totalAmountEntered-=amount;
            } else {
                resultMessage=ubsApp.translation["lotDebt"];
                            break;
            }
        }
        else if(paymentMode=="credit"){
            if(amount<=userArray[playerChance].getCreditLimit()-userArray[playerChance].getCredit()){
                //userArray[playerChance].setInventoryScore(newLevel);

                creditChanged=userArray[playerChance].getCredit()+amount;
                userArray[playerChance].setPayOffDeadline(numberOfWeeksDeadline);
                totalAmountEntered-=amount;
                //userArray[playerChance].setCredit();
            }
            else{
                resultMessage=ubsApp.translation["lotDebt"];
                break;
            }
        }
    }
    }
    if(totalAmountEntered==0)
    {
        paymentDone=true;
        resultMessage=ubsApp.translation["purchaseSuccess"].replace("<Percent>",inventoryPercent).replace("<Amount>",cost);
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
            
        document.getElementById("bankBalanceValue").innerHTML="₹ "+userArray[playerChance].getBankBalance();
        document.getElementById("cashValue").innerHTML="₹ "+userArray[playerChance].getplayerScore();
        document.getElementById("creditValue").innerHTML="₹ "+userArray[playerChance].getCredit();
        document.getElementById("creditLimitValue").innerHTML="₹ "+userArray[playerChance].getCreditLimit();
            if(temptime === 0 ){
                clearInterval(temptimer);
                if(!offlinePurchaseClicked)
                    ubsApp.nextMove();
                else{
                    ubsApp.closeCurrentScenario();
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
resultMessage=ubsApp.translation["pleaseConfirm"];
ubsApp.openPopup({
    "message" : resultMessage,
    "header" : ubsApp.getTranslation("purchaseHeader"),
    "headerStyle" : "text-align: center;  color: red; font-weight: 700;",
    'buttons' : [
        {
            'name' : ubsApp.getTranslation("yes"),
            'action': "ubsApp.closePopup();ubsApp.closeCurrentScenario(); ubsApp.nextMove();"
        },

        {
                    'name' : ubsApp.getTranslation("no"),
                    'action': "ubsApp.closePopup();"
        }
    ]
});
resultMessage="";
}
if(resultMessage != "") {
    ubsApp.openPopup({ "message" : resultMessage,
                 "header" : ubsApp.getTranslation("purchaseHeader"),
                 "headerStyle" : "text-align: center;  color: red;"
                      });
}
}

// ubsApp.showScore=function(){
// 	var element=document.getElementById("purchaseLeaderBoard");
// 	elem
// }
    
ubsApp.addPaymentMode=function(){
for(var i=1;i<=numberOfPaymentModes;i++){
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

ubsApp.openPurchaseScenario=function(){
	offlinePurchaseClicked=true;
	ubsApp.startCurrentScenario();
	ubsApp.renderPageByName("purchaseScenario");
}
