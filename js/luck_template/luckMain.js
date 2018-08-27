ubsApp.getLuckTemplate=function(templateConfig,tempVar){
	if(templateConfig.negative){
		templateConfig.payTitle=ubsApp.translation["payTitle"];

	}
	else{
		templateConfig.gainTitle=ubsApp.translation["gainTitle"];
	}

	templateConfig.hasAdvantageCard = userArray[playerChance].getAdvantageCardNumber() > 0 ? true : false;
	templateConfig.currentPlayerName = userArray[playerChance].getplayerName();
	tempVar.html+=ubsLuckTemplate(templateConfig);
}

ubsApp.luckPaymentQuiz=function(page){

	ubsApp.emptyQuizQuestions();
	let config = ubsApp.pages[page].templates[0];
	let noOfQuestions = 1;
	choiceSelected.page = page;
	ubsApp.initializeQuizQuestions(0, config.credit);

	let quizPage = ubsApp.pages[config.resultpage].templates[0];
	quizPage.onClickPage.nextPage = "luckQuizResult";    //quizPage = resultPage
	quizPage.noOfQuestions = noOfQuestions;
	ubsApp.pages[quizPage.onClickPage.nextPage].templates[0].noOfQuestions = noOfQuestions;

    ubsApp.renderFirstQuizPage(config.resultpage);
}

ubsApp.payFromBank=function(){
    console.log("------------------PAY FROM BANK");
    // $.each(credit, function(index, val) {
    //     $.each(credit[index], function(key, value){
    //         if(key=="inventory"){
    //             userArray[playerChance].setInventoryScore(userArray[playerChance].getInventoryScore()+(value/1000));
    //         }
    //         else if(key=="bankBalance"){
    //             userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+value);
    //             if(userArray[playerChance].getBankBalance()<0){
    //                    userArray[playerChance].setBankBalance(0);
    //                 }
    //         }
    //         else if(key=="cash"){
    //             userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()+value);
    //             if(userArray[playerChance].getplayerScore()<0)
    //             {
    //                 userArray[playerChance].setplayerScore(0);
    //             }
    //         }
    //         else if(type=="reputation"){
    //                 userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
    //                 if(userArray[playerChance].getReputationPts()<0)
    //                 {
    //                     userArray[playerChance].setReputationPts(0);
    //                 }
    //         }
    //     });
    // });
    // if(type=="inventory"){
    //     userArray[playerChance].setInventoryScore(userArray[playerChance].getInventoryScore()+(value/1000));
    // }
    // else if(type=="bankBalance"){

    //     userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+value);
    //     if(userArray[playerChance].getBankBalance()<0){
    //         userArray[playerChance].setBankBalance(0);
    //     }
    // }
    // else if(type=="cash"){
    //     userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()+value);
    //     if(userArray[playerChance].getplayerScore()<0)
    //     {
    //         userArray[playerChance].setplayerScore(0);
    //     }
    // }
    // else if(type=="reputation"){
    //     userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
    //     if(userArray[playerChance].getReputationPts()<0)
    //     {
    //         userArray[playerChance].setReputationPts(0);
    //     }
    // }
}


ubsApp.payOrGain=function(pageName){

    let initialBankBalance = userArray[playerChance].getBankBalance();
    let initialCashBalance = userArray[playerChance].getplayerScore();
    let initialReputationPoints = userArray[playerChance].getReputationPts();
    let initialInventory = userArray[playerChance].getInventoryScore();

    var credit=ubsApp.pages[pageName].templates[0].credit;
    console.log(credit);
    $.each(credit, function(key, value) {
        if(key=="inventory"){
            if(value=="full"){
                value=-userArray[playerChance].getInventoryScore();
            }
            else if(value=="cash"){
                value=-userArray[playerChance].getplayerScore();
            }

            var newInventoryLevel=parseFloat(parseFloat(userArray[playerChance].getInventoryScore())+(value/1000));
            userArray[playerChance].setInventoryScore(newInventoryLevel);
            if(userArray[playerChance].getInventoryScore()<0){
                done=false;
                let difference=userArray[playerChance].getInventoryScore()*(1000);
                userArray[playerChance].setInventoryScore(0);

                userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+difference);
                if(userArray[playerChance].getBankBalance()<0)
                {
                    userArray[playerChance].setBankBalance(0);
                    difference=userArray[playerChance].getBankBalance();
                    userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()+difference);
                    if(userArray[playerChance].getplayerScore()<0)
                    {
                        difference=userArray[playerChance].getplayerScore();
                        userArray[playerChance].setplayerScore(0);
                        if(userArray[playerChance].getCredit()+(difference*-1)<=userArray[playerChance].getCreditLimit()){
                            userArray[playerChance].setCredit(userArray[playerChance].getCredit()+(difference*-1));
                        }
                        else{
                            userArray[playerChance].setCredit(userArray[playerChance].getCreditLimit());
                        }
                    }
                }
            }

        }
        else if(key=="insurance"){
            if(userArray[playerChance].getInsurance()){
                console.log("Insurance REquired");
            }
        }
        else if(key=="bankBalance"){
            if(value=="full"){
                value=-userArray[playerChance].getBankBalance();
            }

                userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+value);
                if(userArray[playerChance].getBankBalance()<0){
                    done=false;
                    let difference=userArray[playerChance].getBankBalance();
                    userArray[playerChance].setBankBalance(0);
                    userArray[playerChance].setInventoryScore(userArray[playerChance].getInventoryScore()+difference);
                    if(userArray[playerChance].getInventoryScore()<0){
                        difference=userArray[playerChance].getInventoryScore();
                        userArray[playerChance].setInventoryScore(0);
                        userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()+difference);
                        if(userArray[playerChance].getplayerScore()<0){
                            difference=userArray[playerChance].getplayerScore();
                        userArray[playerChance].setplayerScore(0);
                        if(userArray[playerChance].getCredit()+(difference*-1)<=userArray[playerChance].getCreditLimit()){
                            userArray[playerChance].setCredit(userArray[playerChance].getCredit()+(difference*-1));
                        }
                        else{
                            userArray[playerChance].setCredit(userArray[playerChance].getCreditLimit());
                        }
                        }
                    }
                }

        }
        else if(key=="cash"){
            if(value=="full"){
                value=-userArray[playerChance].getplayerScore();
            }
            userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()+value);
            if(userArray[playerChance].getplayerScore()<0)
            {   difference=userArray[playerChance].getplayerScore();
                userArray[playerChance].setplayerScore(0);

                //new

                userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+difference);
                if(userArray[playerChance].getBankBalance()<0){
                    done=false;
                    let difference=userArray[playerChance].getBankBalance();
                    userArray[playerChance].setBankBalance(0);
                    userArray[playerChance].setInventoryScore(userArray[playerChance].getInventoryScore()+difference);
                    if(userArray[playerChance].getInventoryScore()<0){
                        difference=userArray[playerChance].getInventoryScore();
                        userArray[playerChance].setInventoryScore(0);
                        if(userArray[playerChance].getCredit()+(difference*-1)<=userArray[playerChance].getCreditLimit()){
                            userArray[playerChance].setCredit(userArray[playerChance].getCredit()+(difference*-1));
                        }
                        else{
                            userArray[playerChance].setCredit(userArray[playerChance].getCreditLimit());
                        }

                    }
                }

            }
        }
        else if(key=="reputationPoints"){
            userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
            if(userArray[playerChance].getReputationPts()<0)
            {
                userArray[playerChance].setReputationPts(0);
            }
        }
    });

    let message = "";
    let header = "";
    let endStr = ". ";
    // Bank Balance Compare
    if(initialBankBalance > userArray[playerChance].getBankBalance())
    {
        header = ubsApp.getTranslation("badLuckResultHeader");
        message = ubsApp.getTranslation("badLuckResultPopUpBankBalance") + userArray[playerChance].getBankBalance() + endStr;
    }
    else if(initialBankBalance < userArray[playerChance].getBankBalance())
    {
        header = ubsApp.getTranslation("goodLuckResultHeader");
        message = ubsApp.getTranslation("goodLuckResultPopUpBankBalance") + userArray[playerChance].getBankBalance() + endStr;
    }

    // Cash Balance Compare
    if(initialCashBalance > userArray[playerChance].getplayerScore())
    {
        header = ubsApp.getTranslation("badLuckResultHeader");
        message = message + ubsApp.getTranslation("badLuckResultPopUpCash") + userArray[playerChance].getplayerScore() + endStr;
    }
    else if(initialCashBalance < userArray[playerChance].getplayerScore())
    {
        header = ubsApp.getTranslation("goodLuckResultHeader");
        message = message + ubsApp.getTranslation("goodLuckResultPopUpCash") + userArray[playerChance].getplayerScore() + endStr;
    }

    //reputation points compare
    if(initialReputationPoints > userArray[playerChance].getReputationPts())
    {
        header = ubsApp.getTranslation("badLuckResultHeader");
        message = message + ubsApp.getTranslation("badLuckResultPopUpRepPt") + userArray[playerChance].getReputationPts() + endStr;
    }
    else if(initialReputationPoints < userArray[playerChance].getReputationPts())
    {
        header = ubsApp.getTranslation("goodLuckResultHeader");
        message = message + ubsApp.getTranslation("goodLuckResultPopUpRepPt") + userArray[playerChance].getReputationPts() + endStr;
    }

    //inventory compare
    if(initialInventory > userArray[playerChance].getInventoryScore())
    {
        header = ubsApp.getTranslation("badLuckResultHeader");
        message = message + ubsApp.getTranslation("badLuckResultPopUpInv") + userArray[playerChance].getInventoryScore() + "%" + endStr;
    }
    else if(initialInventory < userArray[playerChance].getInventoryScore())
    {
        header = ubsApp.getTranslation("goodLuckResultHeader");
        message = message + ubsApp.getTranslation("goodLuckResultPopUpInv") + userArray[playerChance].getInventoryScore() + "%" + endStr;
    }

    ubsApp.openResultPopup({
        "message" : message,
        "header" : header,
        "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
        })

}

ubsApp.useOneAdvantageCard=function(){
    let header = ubsApp.getTranslation("redeemAdvantageCardHeader");
    if(userArray[playerChance].getAdvantageCardNumber() > 0)
    {
       userArray[playerChance].setAdvantageCardNumber(-1);
       let cardNumber = userArray[playerChance].getAdvantageCardNumber();
       let message= ubsApp.formatMessage(ubsApp.translation["redeemAdvantageCardMessage"], [cardNumber]);
          ubsApp.openResultPopup({
               "message" : message,
               "header" : header,
               "headerStyle" : "text-align: center;  color: black;",
               })
    }
}
