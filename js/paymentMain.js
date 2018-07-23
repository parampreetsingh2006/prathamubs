ubsApp.getPayTemplate=function(templateConfig,tempVar){
	// var object={};
	//object.scenarioTitle=ubsApp.translation["payTitle"];
	//object.color="white";
	// object.background="#000";
	// object.negative="true";
	//object.or=ubsApp.translation["or"];
	// object.scenario=templateConfig.question;
	// object.amount=templateConfig.amount;
	// object.helpTitle=ubsApp.translation["helpTitle"];
	// object.payTitle=ubsApp.translation["payTitle"];
	// object.checkWildCard=ubsApp.translation["checkWildCard"];
	// object.takeQuizTitle=ubsApp.translation["takeQuizTitle"];
	// object.payMessage=ubsApp.translation["youCan"];
	// object.alternalteMessage=ubsApp.translation["alternateMessage"];
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