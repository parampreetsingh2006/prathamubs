ubsApp.getLuckTemplate=function(templateConfig,tempVar){
	if(templateConfig.negative){
		templateConfig.payTitle=ubsApp.translation["payTitle"];
		
	}
	else{
		templateConfig.gainTitle=ubsApp.translation["gainTitle"];
	}
	tempVar.html+=ubsLuckTemplate(templateConfig);
}

ubsApp.payFromBank=function(amount){

    if(userArray[playerChance].getBankBalance()<amount){
        document.getElementById("result").innerHTML=ubsApp.translation["bankBalance"];
    }
    else{
        userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()+amount);
        ubsApp.nextMove();
    }

}