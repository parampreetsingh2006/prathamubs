ubsApp.luckConfig={
// <<<<<<< HEAD
//  //    "luckyUnluckyScenario1":{
// 	// 	"category":"Luck",
// 	// 	"templates":[
// 	// 	{
// 	// 		"templateId":9,
// 	// 		"templateType":"luck",
// 	// 		"scenario":"{{luckQuestion1}}",//question Key
// 	// 		"scenarioName":"luckyUnluckyScenario1",
// 	// 		"amount":1000,
// 	// 		"quizType":"luck",
// 	// 		"scenarioTitle":"{{pratham_title_luck}}",
// 	// 		"helpTitle":"{{helpTitle}}",
// 	// 		"payMessage":"{{youCan}}",
// 	// 		"checkWildCard":"{{checkWildCard}}",
// 	// 		"takeQuizTitle":"{{takeQuizTitle}}",
// 	// 		"or":"{{or}}",
// 	// 		"alternalteMessage":"{{alternateMessage}}",
// 	// 		"color":"black",
// 	// 		"background":"#4DAF7C",
// 	// 		"wildCard":"true",
			
// 	// 	}
// 	// ]
// 	// },

// 	"luckyUnluckyScenario2":{
			// "scenario":"{{luckQuestion2}}",//question Key
			// "scenarioName":"luckyUnluckyScenario2",
			// "positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			// "negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			// "credit":{
			// 	"inventory":0,
			// 	"bankBalance":0,
			// 	"reputationPoints":0,
			// 	"cash":-1000,
			// },
			// "resultpage":"quizQ2",
// =======
    "luckyUnluckyScenario1":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion1}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":500,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ1",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"cashToBeUpdated":true,
			"type":"cash",
			"scenarioName":"luckyUnluckyScenario1",
			// "checkWildCard":"{{checkWildCard}}",
			// "takeQuizTitle":"{{takeQuizTitle}}",
			// "or":"{{or}}",
			// "alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"icon":"luck",
			"background":"#4DAF7C",
			"wildCard":"true",
			
		}
	]
	},

	"luckyUnluckyScenario2":{
		"category":"Luck",
		"repeatforuser":true,
			"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion2}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":100,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			// "checkWildCard":"{{checkWildCard}}",
			// "takeQuizTitle":"{{takeQuizTitle}}",
			// "or":"{{or}}",
			// "alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"scenarioName":"luckyUnluckyScenario2",
			"icon":"luck",
			"type":"cash",
			"background":"#4DAF7C",
			"wildCard":"true",
			
		}
	]
	},
	"luckyUnluckyScenario3":{
		"category":"Luck",
		"repeatforuser":true,
			"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion3}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":2500,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ1",
			// "checkWildCard":"{{checkWildCard}}",
			// "takeQuizTitle":"{{takeQuizTitle}}",
			// "or":"{{or}}",
			// "alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"scenarioName":"luckyUnluckyScenario3",
			"icon":"luck",
			"background":"#4DAF7C",
			"wildCard":"true",
			
		}
	]
	},

	"luckyUnluckyScenario4":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion4}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":-1800,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ1",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario4",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario5":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion5}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":-700,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ1",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario5",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario6":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion6}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":-3800,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"resultPage":"quizQ1",
			"scenarioName":"luckyUnluckyScenario6",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario7":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion7}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":500,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ1",
			"scenarioName":"luckyUnluckyScenario7",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario8":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion8}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-500,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"resultPage":"quizQ1",
			"scenarioName":"luckyUnluckyScenario8",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario9":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion9}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-250,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ1",
			"scenarioName":"luckyUnluckyScenario9",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario10":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion10}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":250,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ2",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"scenarioName":"luckyUnluckyScenario10",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario11":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion11}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			// "insurance":true,
			// "page":"decisionInsurance",                          //need a tab on luckUnlucky page to show Insurance yes/no
			"credit":{
				"inventory":-7800,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"resultPage":"quizQ2",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario11",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario12":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion12}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":-3800,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ2",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario12",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario13":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion13}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":-1800,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ2",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario13",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario14":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion14}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-12000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ2",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario14",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario15":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion15}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":5000,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ2",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario15",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario16":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion16}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":10000,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ2",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"scenarioName":"luckyUnluckyScenario16",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario17":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion17}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-15000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ2",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"scenarioName":"luckyUnluckyScenario17",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario18":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion18}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":8000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ2",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"scenarioName":"luckyUnluckyScenario18",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario19":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion19}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-1000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"negative":"true",
			"quizRequired":true,
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ2",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario19",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario20":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion20}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-800,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ2",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"negative":"true",
			"quizRequired":true,
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			"color":"black",
			"scenarioName":"luckyUnluckyScenario20",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario21":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion21}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":8700,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ3",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"scenarioName":"luckyUnluckyScenario21",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario22":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion22}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":8700,
				"reputationPoints":20,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ3",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"scenarioName":"luckyUnluckyScenario22",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario23":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion23}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-20000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ3",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"negative":"true",
			"quizRequired":true,
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"scenarioName":"luckyUnluckyScenario23",
			"alternalteMessage":"{{alternateMessage}}",
			
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario24":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion24}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":-500,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"negative":"true",
			"quizRequired":true,
			"resultPage":"quizQ3",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			"scenarioName":"luckyUnluckyScenario24",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario25":{

		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion25}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":18000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ3",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"scenarioName":"luckyUnluckyScenario25",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario26":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion26}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":4000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ3",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"color":"black",
			"scenarioName":"luckyUnluckyScenario26",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario27":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion27}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":3000,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ3",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"scenarioName":"luckyUnluckyScenario27",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario28":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion28}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-7800,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"e":"luckyUnluckyScenario28",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"negative":"true",
			"quizRequired":true,
			"scenarioName":"luckyUnluckyScenario28",
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			"resultPage":"quizQ3",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario29":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion29}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":7800,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2", 
			"quizType":"luck",
			"resultPage":"quizQ4",
			"scenarioName":"luckyUnluckyScenario29",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"negative":"true",
			"quizRequired":true,
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario30":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion30}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":-1800,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"scenarioName":"luckyUnluckyScenario30",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"negative":"true",
			"quizRequired":true,
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			"resultPage":"quizQ4",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario31":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion31}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":-12000,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"scenarioName":"luckyUnluckyScenario31",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"negative":"true",
			"quizRequired":true,
			"checkWildCard":"{{checkWildCard}}",
			"takeQuizTitle":"{{takeQuizTitle}}",
			"or":"{{or}}",
			"alternalteMessage":"{{alternateMessage}}",
			"resultPage":"quizQ4",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario32":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion32}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":7000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"scenarioName":"luckyUnluckyScenario32",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ4",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario33":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion33}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":10000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"scenarioName":"luckyUnluckyScenario33",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ4",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario34":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion34}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":10000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ4",
			"scenarioName":"luckyUnluckyScenario34",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario35":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion35}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":20,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ5",
			"scenarioName":"luckyUnluckyScenario35",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
						
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario36":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion36}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":2000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"scenarioName":"luckyUnluckyScenario36",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"resultPage":"quizQ5",
			"color":"black",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
	"luckyUnluckyScenario37":{
		"category":"Luck",
		"repeatforuser":true,
		"repeatforall":true,
		"templates":[
		{
			"templateId":9,
			"templateType":"luck",
			"scenario":"{{luckQuestion37}}",//question Key
			// "value":-1800,
			// "type":"inventory",
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":15,
				"cash":0,
			},
			"resultpage":"quizQ2",
			"quizType":"luck",
			"resultPage":"quizQ5",
			"scenarioTitle":"{{pratham_title_luck}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"color":"black",
			"scenarioName":"luckyUnluckyScenario37",
			"background":"#4DAF7C",
			"icon":"luck",
			"wildCard":"true",
		}
	]
	},
}