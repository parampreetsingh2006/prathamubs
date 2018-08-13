ubsApp.getWeekSummaryTemplate = function(templateConfig, tempVar){
    templateConfig.lastWeekCash = userArray[playerChance].getLastWeekPlayerScore();
    templateConfig.lastWeekBankBalance = userArray[playerChance].getLastWeekBankBalance();
    templateConfig.lastWeekReputationPts = userArray[playerChance].getLastWeekReputationPts();
    templateConfig.lastWeekCredit = userArray[playerChance].getLastWeekCredit();
    templateConfig.lastWeekAdvantageCard = userArray[playerChance].getLastWeekAdvantageCardNumber();

    templateConfig.currentWeekCash = "₹ "+ userArray[playerChance].getplayerScore();
    templateConfig.currentWeekBankBalance = "₹ "+ userArray[playerChance].getBankBalance();
    templateConfig.currentWeekReputationPts = userArray[playerChance].getReputationPts();
    templateConfig.currentWeekCredit = userArray[playerChance].getCredit();
    templateConfig.currentWeekAdvantageCard = userArray[playerChance].getAdvantageCardNumber();
    templateConfig.userName = userArray[playerChance].getplayerName();
    templateConfig.currentInventory = userArray[playerChance].getInventoryScore() + "%";
    templateConfig.currentInventoryValue = "₹ "+ userArray[playerChance].getInventoryScore() * ubsApp.inventoryPerPercentValue;
    templateConfig.header = ubsApp.getTranslation("ScoreSummary");
    if(ubsApp.openCurrentPlayerConfig && ubsApp.openCurrentPlayerConfig.header) {
        templateConfig.header = ubsApp.openCurrentPlayerConfig.header;
    }
    var week = userArray[playerChance].getWeeks();
    if(ubsApp.openCurrentPlayerConfig && ubsApp.openCurrentPlayerConfig.isWeekSummary) {
        week = week - 1;
    }
    templateConfig.weekNumber = week;
    userArray[playerChance].setOpenWeekSummary(false);
    userArray[playerChance].copyCurrentSummaryToLastWeek();

    tempVar.html += ubsWeekSummarytemplate(templateConfig);

}


ubsApp.openCurrentPlayerSummary = function(config) {
    ubsApp.openCurrentPlayerConfig = config;
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("weekSummaryPage");
    ubsApp.openCurrentPlayerConfig = {};
}