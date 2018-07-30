ubsApp.getAdvantageCardTemplate=function(templateConfig,tempVar){
    var object={};
    object.currentReputationPoint=userArray[playerChance].getReputationPts();
    templateConfig=$.extend(templateConfig,object);
    tempVar.html+=ubsAdvantageCardTemplate(templateConfig);
}

ubsApp.openAdvantageCard=function(){
    ubsApp.startCurrentScenario();
    ubsApp.renderPageByName("advantageCardScenario");
}

ubsApp.checkDetails=function(){
    var numberEntered=document.getElementById("convertText").value;
    if(numberEntered>0){
        if(numberEntered<=userArray[playerChance].getReputationPts()){
            if(numberEntered%15==0){
                document.getElementById("convertedNumber").innerHTML=numberEntered/15;
                document.getElementById("remainingBalance").innerHTML=userArray[playerChance].getReputationPts()-numberEntered;
            }
            else{
                document.getElementById("result").innerHTML=ubsApp.translation["enterInMultipleOf15"];    
            }
        }
        else{
            document.getElementById("result").innerHTML=ubsApp.translation["You have entered more points than you have"];    
        }
    }
    else{
        document.getElementById("result").innerHTML=ubsApp.translation["validReputationPts"];
    }
}

ubsApp.covertReputationToWildCard=function(){
    var numberEntered=parseInt(document.getElementById("convertedNumber").innerHTML);
        console.log(numberEntered);
        if(numberEntered>0)
        {
            userArray[playerChance].setAdvantageCardNumber(numberEntered); 
            var remainingPoints=parseInt(document.getElementById("remainingBalance").innerHTML);                userArray[playerChance].setReputationPts(remainingPoints);
            ubsApp.closeCurrentScenario();
            ubsApp.currentPlayerContents();
        }
    else{
        document.getElementById("result").innerHTML=ubsApp.translation["validReputationPts"];
    }
}