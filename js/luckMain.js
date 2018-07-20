ubsApp.getLuckTemplate=function(templateConfig,tempVar){
	var object={};
	object.scenarioTitle=ubsApp.translation["pratham_title_luck"];
	object.color="black";
	object.background="#4DAF7C";
	object.wildCard="true";
	object.helpTitle=ubsApp.translation["helpTitle"];
	object.helpRequired="true";
	if(templateConfig.negative){
		object.negative="true";
		object.payTitle=ubsApp.translation["payTitle"];
	}
	else{
		object.gainTitle=ubsApp.translation["gainTitle"];
	}
	object.scenario=templateConfig.question;
	object.payMessage=ubsApp.translation["youCan"];
	object.amount=templateConfig.amount;
	object.checkWildCard=ubsApp.translation["checkWildCard"];
	object.takeQuizTitle=ubsApp.translation["takeQuizTitle"];
	object.or=ubsApp.translation["or"];
	object.alternalteMessage=ubsApp.translation["alternateMessage"];
	tempVar.html+=ubsLuckTemplate(object);
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