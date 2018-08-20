ubsApp.getQuizTemplate = function(templateConfig, tempVar){
	if(templateConfig.options!=undefined){
		ubsDecisionOption = templateConfig.options[0].optionName;
	}
	tempVar.html+=ubsQuizTemplate(templateConfig);
}

ubsApp.doneQuiz=function(){
	this.currentPlayerContents();
	ubsApp.cancelQuiz();
}


ubsApp.atleastOneSelected= function(name){
	var radio = document.getElementsByName(name);
  	for (var i=0; i<radio.length; i++) {

    if (radio[i].checked) {
      return true;
    }
  }
  return false;
}


ubsApp.displayNextQuizQuestion=function(page, updateCorrectAnswerScore){
	  var quizCorrectAnswer = $("#correctAnswers").html();
 	  var questionNo = $("#quizQuestionNumber").html();
	  ubsApp.renderPageByName(page);
  	  questionNo=parseInt(questionNo)+1;
	  $("#quizQuestionNumber").text(questionNo);
	  $("#correctAnswers").text(quizCorrectAnswer);

	  if(ubsApp.pages[page].templates[0].quizResult){
	  		ubsApp.displayResults(page);
	  }
}

ubsApp.checkAnswerAndRenderNextPage=function(page, answer, optionName, questionId, reputationPoints){
  var totalMarks = 1; // each question carries 1 mark
  var date=new Date();
  var startTime=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  if(ubsApp.atleastOneSelected(optionName)){
  	  let quizCorrectAnswer = $("#correctAnswers").html();
	  let checkedValue = $("input[name='" + ubsDecisionOption + "'	]:checked").attr("id");
	  let questionNo = $("#quizQuestionNumber").html();

	  if(checkedValue == answer){
	  		let scoredMarks = 1;
	  		quizCorrectAnswer = parseInt(quizCorrectAnswer) + 1;
		  	ubsApp.updateAnswers(questionNo - 1);
		  	$('#question_answer').hide();
		  	$('#answerDiv').css("display","inline-block");
		  	$('#answerHeader').css("color","green");
		  	$('#answerDiv #answerHeader').text(ubsApp.translation["quizCorrectAnswerHeading"]);
		  	$('#answerDiv #answerMessage').text(ubsApp.formatMessage(ubsApp.translation["quizCorrectAnswerMessage"], [reputationPoints]));
		  	$('#answerDiv').show();
		    var audioElement = document.getElementById('answerDiv');
		    /*ubsApp.openPopup({ 
		    		"header":ubsApp.translation["quizCorrectAnswerHeading"],
		    		"headerStyle":"text-align: center;  color: red; font-size: 1.1vw",
		    		"message" : ubsApp.formatMessage(ubsApp.translation['quizCorrectAnswerMessage'], [reputationPoints]),
         		                
         	});
		    ubsApp.displayNextQuizQuestion(page, true);*/
		    $("#correctAnswers").text(quizCorrectAnswer);
  			ubsApp.raiseAudioEvent(audioElement, 'rightAnswer');


	  		//ubsApp.updateScoreInDB(questionId, scoredMarks,totalMarks, 1, startTime, null)
	  }
	  else{
		  	scoredMarks = 0;
		  	$('#question_answer').hide();
		  	//ubsApp.updateScoreInDB(questionId, scoredMarks,totalMarks, 1, startTime, null)
		  	$('#answerDiv').css("display","inline-block");
		  	$('#answerHeader').css("color","red");
		  	$('#answerDiv #answerHeader').text(ubsApp.translation["quizWrongAnswerHeading"]);
		  	$('#answerDiv #answerMessage').text(ubsApp.formatMessage(ubsApp.translation['quizWrongAnswerMessage'], [reputationPoints]));
		  	$('#answerDiv').show();
		  	var audioElement = document.getElementById('answerDiv');
  			ubsApp.raiseAudioEvent(audioElement, 'wrongAnswer');
	  	
	  }

	  if(ubsApp.pages[page].templates[0].quizResult){
	  	ubsApp.displayResults(page);
	  }
  }
}

ubsApp.updateAnswers = function(questionNo){
	 choiceSelected.answers[questionNo]=true;
}

ubsApp.getTotalCorrectAnswers= function(){

   let x=0;
   for(let i=0; i<choiceSelected.answers.length;i++){
     if(choiceSelected.answers[i] == true) {
        x++;
     }
	}
    return x;
}



ubsApp.luckQuizResult=function(){

	let infoPage = ubsApp.pages[choiceSelected.page].templates[0];
	let inventory = 0;
	let bankBalance =0;
	let reputationPoints = 0;
	let cash = 0;
	let correctAnswers = ubsApp.getTotalCorrectAnswers();
	for(let i=0;i<choiceSelected.answers.length;i++){
		if(choiceSelected.answers[i]==false){
		   inventory += choiceSelected.credit[i].inventory;
		   bankBalance += choiceSelected.credit[i].bankBalance;
		   reputationPoints += choiceSelected.credit[i].reputationPoints;
		   cash += choiceSelected.credit[i].cash;
		}
	}
	let playerRepPoints = userArray[playerChance].getReputationPts();
	userArray[playerChance].setReputationPts(playerRepPoints+reputationPoints);

	let playerCash = userArray[playerChance].getplayerScore();
	userArray[playerChance].setplayerScore(playerCash+cash);

	let playerBankBalance = userArray[playerChance].getBankBalance();
	userArray[playerChance].setBankBalance(playerBankBalance+bankBalance);

	let playerInventory = userArray[playerChance].getInventoryScore();
	userArray[playerChance].setInventoryScore(playerInventory+inventory);

	if(correctAnswers == 1){
		$("#quizResult").text(infoPage.positiveMsg);

	}else{
		$("#quizResult").text(infoPage.negativeMsg);
		}

}

ubsApp.generalQuizResult=function(page){

	let resultPage = ubsApp.pages[choiceSelected.page].templates[0];
	let inventory = 0;
	let bankBalance =0;
	let reputationPoints = 0;
	let cash = 0;

	let correctAnswers = ubsApp.getTotalCorrectAnswers();
	for(let i=0;i<choiceSelected.answers.length;i++){
		if(choiceSelected.answers[i]==true){
		   inventory += choiceSelected.credit[i].inventory;
		   bankBalance += choiceSelected.credit[i].bankBalance;
		   reputationPoints += choiceSelected.credit[i].reputationPoints;
		   cash += choiceSelected.credit[i].cash;
		}
	}
	let playerRepPoints = userArray[playerChance].getReputationPts();
	userArray[playerChance].setReputationPts(playerRepPoints+reputationPoints);
	$("#quizQuestionNumber").text("");
	if(correctAnswers === resultPage.noOfQuestions){
			/*ubsApp.openPopup({ 
		    		"header":ubsApp.translation["quizCorrectAnswerHeading"],
		    		"headerStyle":"text-align: center;  color: red; font-size: 1.1vw",
		    		"message" : ubsApp.formatMessage(ubsApp.translation['quizAllCorrectAnswers'], [reputationPoints]),
         		                
   			 });*/
   			 $("#quizResult").html(ubsApp.formatMessage(ubsApp.translation['quizAllCorrectAnswers'], [reputationPoints]));
   			 $('#quizResult').append('<img id="quizWowImage" src="'+resultPage.congratulationsImage+'" />')
	}
	else{
			 $("#quizResult").html(ubsApp.formatMessage(ubsApp.translation['quizPartialCorrectMessage'], [reputationPoints]));
	}

	
}


ubsApp.displayResults = function(page){
	$("#quizCancel").attr("disabled", true);
	$("#quizDone").attr("disabled", false);
	if(page == "luckQuizResult"){
		ubsApp.luckQuizResult();
	}
	else if(page == "generalQuizResult"){
		ubsApp.generalQuizResult();
	}
}

//ubsApp.getChoiceTemplate = function(templateConfig, tempVar){
//	if(ubsApp.areAllChoicesSelected() == true) {
//        choiceSelected={};
//        if(templateConfig.nextPage.page){
//        	ubsApp.renderPageByName(templateConfig.nextPage.page);
//        }
//        else{
//        	ubsApp.nextMove();
//        }
//        return;
//    }
//	ubsApp.updateChoiceSelected(templateConfig);
//	if(templateConfig.display_score){
//		tempVar.html += ubsScoreTemplate(ubsApp.pages.score[0]);
//	}
//	let containerHeight = $(window).innerHeight() - 50;
//	for(let i=0; i< templateConfig.choices.length; i++)  {
//		templateConfig.choices[i].display = choiceSelected[i];
//		templateConfig.choices[i].choiceHeight = (containerHeight / templateConfig.choiceHeightFactor) + 'px';
//	}
//	templateConfig.containerHeight= $(window).innerHeight() +'px';
//  	html += ubschoiceTemplate(templateConfig);
//  	if(templateConfig.audioSrc){
//  		audioConfig = templateConfig;
//  		tempVar.html+= ubsAudioTemplate(templateConfig);
//	}
//}


//ubsApp.checkSelected= function(){
//
//   let allSelected = true;
//	$.each(choiceSelected, function(key,value){
//     if(value == true) {
//     	allSelected =  false;
//		return false;
//     }
//});
//	return allSelected;
//}