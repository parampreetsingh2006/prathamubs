ubsApp.paymentConfig={
    "paymentScenario1":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion1}}",
			"scenarioName":"paymentScenario1",  
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-500,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4", 
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",
			"scenarioName":"paymentScenario1",
			"negative":true,	
			"color":"white",
			"payTitle":"{{payTitle}}",
			"background":"#000",
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
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-1000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ3",
			"quizType":"luck",
			"credit":{"balance":-1000},
			"payTitle":"{{payTitle}}",
			"scenarioName":"paymentScenario2",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"background":"#000",
		}
	]

	},
	"paymentScenario3":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion3}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":0,
				"reputationPoints":0,
				"cash":-1200,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"payTitle":"{{payTitle}}",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario3",
			"background":"#000",
		}
	]

	},
	"paymentScenario4":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion4}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-800,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario4",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]

	},
	"paymentScenario5":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion5}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-1500,
				"reputationPoints":-2,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"credit":{"balance":-1500,"reputation":-2},
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario5",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario6":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion6}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-500,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"scenarioName":"paymentScenario6",
			"payTitle":"{{payTitle}}",
			"negative":true,
			"background":"#000",
		}
	]
	},
	"paymentScenario7":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"payTitle":"{{payTitle}}",
			"scenario":"{{paymentQuestion7}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-1000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"scenarioName":"paymentScenario7",
			"negative":true,
			"background":"#000",
		}
	]
	},
	"paymentScenario8":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion8}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-1000,
				"reputationPoints":2,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario8",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario9":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion9}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-500,
				"reputationPoints":3,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"scenarioName":"paymentScenario9",
			"negative":true,
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario10":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion10}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-5000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario10",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario11":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion11}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-800,
				"reputationPoints":-1,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"scenarioName":"paymentScenario11",
			"payTitle":"{{payTitle}}",
			"negative":true,
			"background":"#000",
		}
	]
	},
	"paymentScenario12":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion12}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-1000,
				"reputationPoints":-2,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"payTitle":"{{payTitle}}",
			"scenarioName":"paymentScenario12",
			"negative":true,
			"background":"#000",
		}
	]
	},

	"paymentScenario13":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion13}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-500,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario13",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario14":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion14}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-2500,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"scenarioName":"paymentScenario14",
			"payTitle":"{{payTitle}}",
			"negative":true,
			"background":"#000",
		}
	]
	},
	"paymentScenario15":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion15}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-1200,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario15",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario16":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion16}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-2200,
				"reputationPoints":-1,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario16",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario17":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion17}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-10000,
				"reputationPoints":2,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario17",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario18":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion18}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-1300,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario18",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario19":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion19}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-750,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario19",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
	"paymentScenario20":{
		"category":"Payment",
		"templates":[
		{
			"templateId":10,
			"templateType":"pay",
			"scenario":"{{paymentQuestion20}}",//question Key
			"positiveMsg":"Congratulations!! You answered correctly.\\n Your fine is Waived off.",
			"negativeMsg":"Oops!! You answeres incorrectly.\\n  You have to pay the fine of 1000 Rs",
			"credit":{
				"inventory":0,
				"bankBalance":-5000,
				"reputationPoints":0,
				"cash":0,
			},
			"resultpage":"quizQ4",
			"quizType":"luck",
			"scenarioTitle":"{{payTitle}}",
			"helpTitle":"{{helpTitle}}",
			"payMessage":"{{youCan}}",	
			"color":"white",
			"negative":true,
			"scenarioName":"paymentScenario20",
			"payTitle":"{{payTitle}}",
			"background":"#000",
		}
	]
	},
}