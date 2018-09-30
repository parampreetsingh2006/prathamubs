ubsApp.getPayOffTemplate=function(templateConfig,tempVar){
	var object={};
	
	object.color=userArray[playerChance].getplayerColor();
	object.cash=userArray[playerChance].getplayerScore();
	object.bankBalance=userArray[playerChance].getBankBalance();
	object.debt=userArray[playerChance].getCredit();
	object.payOff="true";
	if(languageSelected=="hindi"){
		object.hindi=true;
	}
	templateConfig=$.extend(templateConfig,object);
	tempVar.html+=ubsPayOffTemplate(templateConfig);
}

ubsApp.payDebt=function(){
	document.getElementById("result").innerHTML="";
	var amountEntered=document.getElementById("debtPaymentText").value;
	if(userArray[playerChance].getCredit()>0){
		if(amountEntered && amountEntered <= userArray[playerChance].getCredit()){
				var dropDown=document.getElementById("payOffDropDown");
				var paymentMode=dropDown.options[dropDown.selectedIndex].value;
				if(paymentMode=="cash"){
					if(amountEntered<=userArray[playerChance].getplayerScore()){
						userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()-amountEntered);
						userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+3);
						userArray[playerChance].setCredit(userArray[playerChance].getCredit()-amountEntered);
						ubsApp.currentPlayerContents();
						ubsApp.closeCurrentScenario();
						if(userArray[playerChance].getCredit()==0){
							userArray[playerChance].setPayOffDeadline(-1);
						}

                        ubsApp.openResultPopup({
                                    "message" : ubsApp.getTranslation("debtPaidSuccessMsg").replace("{{debtAmount}}",amountEntered),
                                    "header" : ubsApp.getTranslation("SUCCESS"),
                                    "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                                    "buttons":[
                                        {
                                            'id':"closePopupButton",
                                            'name' : ubsApp.getTranslation("CLOSE"),
                                            'action': "ubsApp.closePopup();"
                                        }
                                    ]
                     });
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
						ubsApp.openResultPopup({
                                    "message" : ubsApp.getTranslation("debtPaidSuccessMsg").replace("{{debtAmount}}",amountEntered),
                                    "header" : ubsApp.getTranslation("SUCCESS"),
                                    "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                                    "buttons":[
                                        {
                                            'id':"closePopupButton",
                                            'name' : ubsApp.getTranslation("CLOSE"),
                                            'action': "ubsApp.closePopup();"
                                        }
                                    ]
                     });
					}
					else{
						document.getElementById("result").innerHTML=ubsApp.translation["bankBalance"];		
					}
				}

			
		}
		else{
			document.getElementById("result").innerHTML=ubsApp.translation["enterValidAmount"];
		}
		
	}
	else{
			document.getElementById("result").innerHTML=ubsApp.translation["noDebt"]; //break;
	}
}

ubsApp.openPayOffScenario=function(){
	ubsApp.startCurrentScenario();
	ubsApp.renderPageByName("PayOffScenario");
}