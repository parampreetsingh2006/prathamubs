 ubsApp.pages = {
	"decisionInsurance":{
		"repeatforuser":true,
		"repeatforall":true,
		"questionTime":3000,
		"displayCalculator":true,
		"minimumInventoryScoreRequired":"0",
		"inventoryScoreToBeChanged":"0",
		"templates":[{
				"templateId": 1,
				"templateType": "insurance",
				"insuranceType":"{{insuranceType}}",
		        "Insurance":"{{Insurance}}",
		        "insurance1":"{{insurance1}}",
		        "insurance2":"{{insurance2}}",
		        "insurance3":"{{insurance3}}",
		        "premium":"{{premium}}",
		        "sumAssured":"{{sumAssured}}",
		        "buy":"{{buy}}",
		        "cancel":"{{cancel}}",
		        "cashTitleName":"{{cashTitleName}}",
		        "chequeTitleName":"{{chequeTitleName}}",
		        "mode":"{{mode}}",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"page":"decision2",
				"premium1":10000,
				"premium2":20000,
				"premium3":30000,
				"sumAssuredvalue1":200000,
				"sumAssuredvalue2":400000,
				"sumAssuredvalue3":600000,
				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
	}]
},
}

ubsApp.pages=$.extend(ubsApp.pages, ubsApp.salesConfig);
ubsApp.pages=$.extend(ubsApp.pages, ubsApp.decisionConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.transferToBankConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.payOffConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.purchaseConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.paymentConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.luckConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.advantageCardConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.centerScoreBoardConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.withdrawFromBankConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.helpConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.quizConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.quizStarterConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.successErrorConfig);
ubsApp.pages=$.extend(ubsApp.pages,ubsApp.weekSummaryConfig);