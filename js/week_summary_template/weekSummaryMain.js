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


    $('#monopolyBase').css("z-index",-10);
        $('#templateBase').css("z-index",10);

        document.getElementById("templateContent").style.opacity="0.95";

        $('#templateContent').css("height",(screenHeight)+'px');
        $('#templateContent').css("width",(screenWidth)+'px');

    tempVar.html += ubsWeekSummarytemplate(templateConfig);
    userArray[playerChance].copyCurrentSummaryToLastWeek();
}


ubsApp.openWeekSummary() = function() {


}