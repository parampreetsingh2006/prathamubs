ubsApp.getQuizStarterTemplate = function(templateConfig, tempVar){

	tempVar.quizConfig = templateConfig;
	tempVar.quizConfig.currentPlayerName = userArray[playerChance].getplayerName();
	ubsApp.generalQuiz(tempVar.quizConfig);
}

ubsApp.initializeQuizQuestions = function(questionNo, credit) {

	 choiceSelected.answers[questionNo] = false;
	 choiceSelected.credit.push({
	 	"inventory":credit.inventory,
	 	 "bankBalance":credit.bankBalance,
	     "cash":credit.cash,
	     "reputationPoints":credit.reputationPoints
	});
}




ubsApp.emptyQuizQuestions = function(){
	choiceSelected={};
	choiceSelected.page ="";
	choiceSelected.answers =[];
	choiceSelected.credit=[];
}



ubsApp.cancelQuiz=function(){
	choiceSelected = {};
	$("#quizCancel").attr("disabled", false);
	$("#quizDone").attr("disabled", true);
	$('#rollIt').attr('disabled',false);
	$('#monopolyBase').css("z-index",0)
	$('#templateBase').css("z-index",0)
	$('#templateContent').css("height",0+'px')
	document.getElementById("templateContent").innerHTML="";
}

ubsApp.generalQuiz=function(config){   //credits can be amount or points depending on type of quiz

	ubsApp.emptyQuizQuestions();

	let arr = [];
	let noOfQuestions = config.noOfQuestions;
	let totalNoOfQuestions =  config.totalNoOfQuestions;
    choiceSelected.page=config.resultPage;

	while(arr.length < noOfQuestions){
	    var randomNumber = Math.floor(Math.random()*totalNoOfQuestions+1);
	    if(arr.indexOf(randomNumber) > -1) continue;
	    arr[arr.length] = randomNumber;
	}

	for(let i=0;i<arr.length-1;i++){
		ubsApp.pages["quizQ"+arr[i]].templates[0].onClickPage.nextPage = "quizQ"+arr[i+1];
		ubsApp.initializeQuizQuestions(i, ubsApp.pages["quizQ"+arr[i]].templates[0].credit);
		ubsApp.pages["quizQ"+arr[i]].templates[0].noOfQuestions = noOfQuestions;
		ubsApp.pages["quizQ"+arr[i]].templates[0].currentPlayerName = config.currentPlayerName;
	}


	ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].onClickPage.nextPage = config.resultPage;
	ubsApp.initializeQuizQuestions(arr.length-1, ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].credit);
	ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].noOfQuestions = config.noOfQuestions;    			//noOfQuestions to be put in quiz config
	ubsApp.pages["quizQ"+arr[arr.length-1]].templates[0].currentPlayerName = config.currentPlayerName;
	ubsApp.pages[config.resultPage].templates[0].noOfQuestions = noOfQuestions;
	ubsApp.renderFirstQuizPage("quizQ"+arr[0]);


}

ubsApp.renderFirstQuizPage = function(page){

	$('#monopolyBase').css("z-index",-10);
    $('#templateBase').css("z-index",10);

    document.getElementById("templateContent").style.opacity="0.95";

    $('#templateContent').css("height","100vh");
    $('#templateContent').css("width","100vw");

    ubsApp.renderPageByName(page);
	$("#correctAnswers").text("0");
	$("#quizQuestionNumber").text("1");

}
