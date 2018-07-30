ubsApp.paymentConfig={
    "paymentScenario1":{
		"category":"Payment",
		
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion1}}",//question Key
			"scenarioName":"paymentScenario1",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":-1000,
			},
			"resultpage":"quizQ4",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"payTitle":"{{payTitle}}",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"white",
			"background":"#000",
			"wildCard":"true",
			"negative":"true",
			"helpRequired":"true",
		}
	]

	},

	
	"paymentScenario2":{
		"category":"Payment",
		
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion2}}",//question Key
			"scenarioName":"paymentScenario2",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":-1000,
			},
			"resultpage":"quizQ3",
			"negative":"true",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"payTitle":"{{payTitle}}",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"white",
			"background":"#000",
			"wildCard":"true",
			
		}
	]

	},
}