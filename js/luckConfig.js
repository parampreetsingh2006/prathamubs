ubsApp.luckConfig={
 //    "luckyUnluckyScenario1":{
	// 	"category":"Luck",
	// 	"templates":[
	// 	{
	// 		"templateId":9,
	// 		"templateType":"luck",
	// 		"scenario":"{{luckQuestion1}}",//question Key
	// 		"scenarioName":"luckyUnluckyScenario1",
	// 		"amount":1000,
	// 		"quizType":"luck",
	// 		"scenarioTitle":"{{pratham_title_luck}}",
	// 		"helpTitle":"{{helpTitle}}",
	// 		"payMessage":"{{youCan}}",
	// 		"checkWildCard":"{{checkWildCard}}",
	// 		"takeQuizTitle":"{{takeQuizTitle}}",
	// 		"or":"{{or}}",
	// 		"alternalteMessage":"{{alternateMessage}}",
	// 		"color":"black",
	// 		"background":"#4DAF7C",
	// 		"wildCard":"true",
			
	// 	}
	// ]
	// },

	"luckyUnluckyScenario2":{
		"category":"Luck",
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion2}}",//question Key
			"scenarioName":"luckyUnluckyScenario2",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":-1000,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"wildCard":"true",
			
		}
	]
	},
}