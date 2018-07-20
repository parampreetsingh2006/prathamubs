ubsApp.getPayOffTemplate=function(templateConfig,tempVar){
	var object={};
	object.title=ubsApp.translation["payDebtTitle"];
	object.cashTitle=ubsApp.translation["cashTitle"];
	object.bankBalanceTitle=ubsApp.translation["bankBalanceTitle"];
	object.debtAmountTitle=ubsApp.translation["debtAmountTitle"];
	object.color=userArray[playerChance].getplayerColor();
	object.cash=userArray[playerChance].getplayerScore();
	object.bankBalance=userArray[playerChance].getBankBalance();
	object.debt=userArray[playerChance].getCredit();
	object.payTitle=ubsApp.translation["payTitle"];
	object.payOff="true";
	object.chequeTitle=ubsApp.translation["cheque"];
	object.modeOfPaymentTitle=ubsApp.translation["modeOfPaymentTitle"];
	object.amountToPayTitle=ubsApp.translation["amountToPayTitle"];
	object.cancelTitle=ubsApp.translation["cancelTitle"];
	if(languageSelected=="hindi"){
		object.hindi=true;
	}
	tempVar.html+=ubsPayOffTemplate(object);
}

ubsApp.payDebt=function(){
	document.getElementById("result").innerHTML="";
	var amountEntered=document.getElementById("debtPaymentText").value;
	if(userArray[playerChance].getCredit()>0){
		if(amountEntered){
				var dropDown=document.getElementById("payOffDropDown");
				var paymentMode=dropDown.options[dropDown.selectedIndex].value;
				if(paymentMode=="cash"){
					if(amountEntered<=userArray[playerChance].getplayerScore()){
						userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()-amountEntered);
						userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+3);
						ubsApp.currentPlayerContents();
						ubsApp.closeCurrentScenario();
						if(userArray[playerChance].getCredit()==0){
							userArray[playerChance].setPayOffDeadline(-1);
						}
						userArray[playerChance].setCredit(userArray[playerChance].getCredit()-amount);
					}
					else{
						document.getElementById("result").innerHTML=ubsApp.translation["moreCash"];		
					}
				}
				else if(paymentMode=="cheque"){
					if(amountEntered<=userArray[playerChance].getBankBalance()){
						userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()-amountEntered);
						userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+3);
						userArray[playerChance].setCredit(userArray[playerChance].getCredit()-amountEntered);
						ubsApp.currentPlayerContents();
						if(userArray[playerChance].getCredit()==0){
							userArray[playerChance].setPayOffDeadline(-1);
						}
						ubsApp.closeCurrentScenario();
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
	else{
			document.getElementById("result").innerHTML=ubsApp.translation["noDebt"]; //break;
	}
}

ubsApp.openPayOffScenario=function(page){
	ubsApp.startCurrentScenario();
	ubsApp.renderPageByName(page);
}