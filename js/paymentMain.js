ubsApp.getPayTemplate=function(templateConfig,tempVar){
	tempVar.html+=ubsLuckTemplate(templateConfig);
}

ubsApp.payFromBank=function(pageName){

    var credit=ubsApp.pages[pageName].templates[0].credit;
    $.each(credit, function(key, value) {
        if(key=="balance"){
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
        else if(key=="reputation"){
            userArray[playerChance].setReputationPts(userArray[playerChance].getReputationPts()+value);
        }
    });

    // if(userArray[playerChance].getBankBalance()<amount){
    //     document.getElementById("result").innerHTML=ubsApp.translation["bankBalance"];
    // }
    // else{
    //     userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+amount);
    //     ubsApp.nextMove();
    // }

}