ubsApp.decisionConfig = {
	
	"decision1" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ1}}",
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q1", 
						"optionValue": "{{decisionQ1O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-1000,
							"reputationPoints":-5,
							"cash":0,
						},
					},
					{
						"optionName":"q1", 
						"optionValue": "{{decisionQ1O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-2500,
							"reputationPoints":5,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision2" : {

		"category":"Decision",
		"repeatforuser":true,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ2}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q2", 
						"optionValue": "{{yes}}",
						"id":1,
						"insurance":true,
						"page":"decisionInsurance",
						"credit":{
							"inventory":0,
							"bankBalance":0,               //bankBalance decreases by premium
							"reputationPoints":30,
							"cash":0,
						},
					},
					{
						"optionName":"q2", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":20,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision3" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ3}}",
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q3", 
						"optionValue": "{{decisionQ3O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q3", 
						"optionValue": "{{decisionQ3O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-5,
							"cash":0,
						},
					},
					{
						"optionName":"q3", 
						"optionValue": "{{decisionQ3O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision4" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ4}}",
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q4", 
						"optionValue": "{{decisionQ4O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-23500,
							"reputationPoints":20,
							"cash":0,
						},
					},
					{
						"optionName":"q4", 
						"optionValue": "{{decisionQ4O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-20,
							"cash":0,
						},
					},
					{
						"optionName":"q4", 
						"optionValue": "{{decisionQ4O3}}",
						"id":3,
						"credit":{
							"inventory":0,
							"bankBalance":-5000,
							"reputationPoints":-20,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},


	"decision5" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ5}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q5", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":1200,
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q5", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":1300,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision6" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ6}}",
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q6", 
						"optionValue": "{{decisionQ6O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-1200,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q6", 
						"optionValue": "{{decisionQ6O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-500,
							"reputationPoints":-5,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision7" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ7}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q7", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-5000,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q7", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":-5,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision8" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ8}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q8", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q8", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":500,
							"reputationPoints":-5,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision9" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ9}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q9", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q9", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":7000,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision10" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ10}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q10", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q10", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":500,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision11" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ11}}",
				"helpPageName":"decisionHelp",
				"inline":false,
				"options": [
				    {
						"optionName":"q11", 
						"optionValue": "{{decisionQ11O1}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-100,
							"reputationPoints":-20,
							"cash":0,
						},
					},
					{
						"optionName":"q6", 
						"optionValue": "{{decisionQ11O2}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-500,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision12" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ12}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q12", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-2250,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q12", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-750,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision13" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ13}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q13", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":-2100,
							"reputationPoints":10,
							"cash":0,
						},
					},
					{
						"optionName":"q13", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":-700,
							"reputationPoints":-10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision14" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ14}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q14", 
						"optionValue": "{{yes}}",
						"pamphlet":true,					//only if pamphlet is true we can do something to change value from
						"id":1,
						"credit":{
							"inventory":0,									
							"bankBalance":-1000,								//pamphlets profit from 500-3000											
							"reputationPoints":5,
							"cash":0,
						},
					},
					{
						"optionName":"q14", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":0,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	"decision15" : {

		"category":"Decision",
		"repeatforuser":false,
		"repeatforall":true,
		"videoLink":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\"> </img>",
	 	"templates":[
	 		{
				"templateId": 1,
				"templateType": "decision",
				"Decision":"{{Decision}}",
				"bankBalanceTitle":"{{bankBalanceTitle}}",
				"debtTitle":"{{debtTitle}}",
				"cashTitle":"{{cashTitle}}",
				"inventoryTitle":"{{inventoryTitle}}",
				"invVal":"{{invVal}}",
				"repPoints":"{{repPoints}}",
				"question": "{{decisionQ15}}",
				"helpPageName":"decisionHelp",
				"inline":true,
				"options": [
				    {
						"optionName":"q15", 
						"optionValue": "{{yes}}",
						"id":1,
						"credit":{
							"inventory":0,
							"bankBalance":2000,
							"reputationPoints":-20,
							"cash":0,
						},
					},
					{
						"optionName":"q15", 
						"optionValue": "{{no}}",
						"id":2,
						"credit":{
							"inventory":0,
							"bankBalance":0,
							"reputationPoints":10,
							"cash":0,
						},
					},
				],
				"optionPageMap": {},
				
			}],
	},

	}