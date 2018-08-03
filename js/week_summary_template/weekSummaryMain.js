ubsApp.getWeekSummaryTemplate = function(templateConfig, tempVar){
    templateConfig.lastWeekCash = userArray[playerChance].getLastWeekPlayerScore();
    templateConfig.lastWeekBankBalance = userArray[playerChance].getLastWeekBankBalance();
    templateConfig.lastWeekReputationPts = userArray[playerChance].getLastWeekReputationPts();
    templateConfig.lastWeekCredit = userArray[playerChance].getLastWeekCredit();
    templateConfig.lastWeekAdvantageCard = userArray[playerChance].getLastWeekAdvantageCardNumber();

    templateConfig.currentWeekCash = userArray[playerChance].getplayerScore();
    templateConfig.currentWeekBankBalance = userArray[playerChance].getBankBalance();
    templateConfig.currentWeekReputationPts = userArray[playerChance].getReputationPts();
    templateConfig.currentWeekCredit = userArray[playerChance].getCredit();
    templateConfig.currentWeekAdvantageCard = userArray[playerChance].getAdvantageCardNumber();
    userArray[playerChance].setOpenWeekSummary(false);
    userArray[playerChance].copyCurrentSummaryToLastWeek();
    tempVar.html += ubsWeekSummarytemplate(templateConfig);

}


ubsApp.openWeekSummary = function() {

    if(userArray[playerChance].getWeeks() > 1) {
         ubsApp.startCurrentScenario();
         ubsApp.renderPageByName("weekSummaryPage");
    }

}