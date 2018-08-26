ubsApp.getPayTemplate=function(templateConfig,tempVar){
    templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	tempVar.html+=ubsLuckTemplate(templateConfig);
}

ubsApp.payFromBank=function(pageName){
    let initialBankBalance = userArray[playerChance].getBankBalance();
    let initialCashBalance = userArray[playerChance].getplayerScore();
    let initialReputationPoints = userArray[playerChance].getReputationPts();
    let initialInventory = userArray[playerChance].getInventoryScore();

    var credit=ubsApp.pages[pageName].templates[0].credit;
    $.each(credit, function(key, value) {
        if(key=="bankBalance"){
            userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+value);     
                if(userArray[playerChance].getBankBalance()<0){
                    
                    let difference=userArray[playerChance].getBankBalance();
                    userArray[playerChance].setBankBalance(0);
                    
                    
                    difference=userArray[playerChance].getInventoryScore();
                    userArray[playerChance].setInventoryScore(0);
                    if(userArray[playerChance].getCredit()+(difference*(-1))<=userArray[playerChance].getCreditLimit()){
                        userArray[playerChance].setCredit(userArray[playerChance].getCredit()+(difference*(-1)));
                    }
                    else{
                        userArray[playerChance].setCredit(userArray[playerChance].getCreditLimit());
                    }
                }
        }
        else if(key=="reputationPoints"){
            userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
        }
    });

        let message = "";
        let header = ubsApp.getTranslation("paymentResultHeader");
        let endStr = ". ";
        // Bank Balance Compare
        if(initialBankBalance > userArray[playerChance].getBankBalance())
        {
            message = ubsApp.getTranslation("badLuckResultPopUpBankBalance") + userArray[playerChance].getBankBalance() + endStr;
        }
        else if(initialBankBalance < userArray[playerChance].getBankBalance())
        {
            message = ubsApp.getTranslation("goodLuckResultPopUpBankBalance") + userArray[playerChance].getBankBalance() + endStr;
        }

        // Cash Balance Compare
        if(initialCashBalance > userArray[playerChance].getplayerScore())
        {
            message = message + ubsApp.getTranslation("badLuckResultPopUpCash") + userArray[playerChance].getplayerScore() + endStr;
        }
        else if(initialCashBalance < userArray[playerChance].getplayerScore())
        {
            message = message + ubsApp.getTranslation("goodLuckResultPopUpCash") + userArray[playerChance].getplayerScore() + endStr;
        }

        //reputation points compare
        if(initialReputationPoints > userArray[playerChance].getReputationPts())
        {
            message = message + ubsApp.getTranslation("badLuckResultPopUpRepPt") + userArray[playerChance].getReputationPts() + endStr;
        }
        else if(initialReputationPoints < userArray[playerChance].getReputationPts())
        {
            message = message + ubsApp.getTranslation("goodLuckResultPopUpRepPt") + userArray[playerChance].getReputationPts() + endStr;
        }

        //inventory compare
        if(initialInventory > userArray[playerChance].getInventoryScore())
        {
            message = message + ubsApp.getTranslation("badLuckResultPopUpInv") + userArray[playerChance].getInventoryScore() + "%" + endStr;
        }
        else if(initialInventory < userArray[playerChance].getInventoryScore())
        {
            message = message + ubsApp.getTranslation("goodLuckResultPopUpInv") + userArray[playerChance].getInventoryScore() + "%" + endStr;
        }

        ubsApp.openResultPopup({
            "message" : message,
            "header" : header,
            "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
            })

}