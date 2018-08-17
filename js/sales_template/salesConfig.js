	ubsApp.salesConfig ={

		"itemRate":{

			"1":50,
			"2":110,
			"3":80,
			"4":50,
			"5":45,
			"6":125,
			"7":3.5,
			"8":40,
			"9":5.5,
			"10":25,
			"11":27,
			"12":45,
			"13":37,
			"14":15,
            			"15":100,
            			"16":70,
            			"17":25,
            			"18":120,
            			"19":15,
            			"20":85,
            			"21":70,
            			"22":100,
            			"23":150,
            			"24":46,
                                    			"25":30,
                                    			"26":50,
                                    			"27":120,
                                    			"28":320,
                                    			"29":12,
                                    			"30":60
		},

		"Sales":{
			//"category":"Sales",
			"repeatforuser":true,
			"repeatforall":false,
			"templates":[
			{
				"templateId": 4,
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"{{This item is not available in your Inventory}}",
				"tempTotal":"",
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"Wheat",
					"amount":" Kg",
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":4,
					"item":"Sugar",
					"amount":" Kg",
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":3,
					"item":"Dal",
					"amount":" Kg",
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":2,
					"item":"Rice",
					"amount":" Kg",
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				{
					"no":5,
					"itemId":7,
					"item":"Rope",
					"amount":" m",
					"rate":"₹ 35/10 m",				
					"exclude":false
				},
				{
					"no":6,
					"itemId":5,
					"item":"Milk",
					"amount":" Litre",
					"rate":"₹ 45/litre",				
					"exclude":false
				},
				{
					"no":7,
					"itemId":9,
					"item":"Eggs",
					"amount":"",
					"rate":"₹ 5.5/egg",				
					"exclude":false
				},
				{
					"no":8,
					"itemId":6,
					"item":"Oil",
					"amount":" Litre",
					"rate":"₹ 125/litre",				
					"exclude":false
				},
				{
					"no":9,
					"itemId":8,
					"item":"Chocolate",
					"amount":"",
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				{
					"no":10,
					"itemId":10,
					"item":"Biscuits",
					"amount":" Packets",
					"rate":"₹ 25/Packet",				
					"exclude":false
				},
				{
					"no":11,
					"itemId":11,
					"item":"Soap",
					"amount":"",
					"rate":"₹ 27/soap",				
					"exclude":false
				},
				{
					"no":12,
					"itemId":12,
					"item":"Shampoo",
					"amount":" ml",
					"rate":"₹ 45/100ml",				
					"exclude":false
				},
				{
					"no":13,
					"itemId":13,
					"item":"Detergent",
					"amount":" gm/kg",
					"rate":"₹ 37/500gm",
					"exclude":false
				},
                {
                     "no":14,
                     "itemId":14,
                 	 "item":"Salt",
                     "amount":"kg",
                     "rate":"₹ 15/kg",
                     "exclude":false
                },
                {
                     "no":15,
                     "itemId":15,
                     "item":"Coriander",
                     "amount":" kg",
                     "rate":"₹ 100/kg",
                     "exclude":false
                },
                {
                                     "no":16,
                                     "itemId":16,
                                     "item":"Phenyl",
                                     "amount":" ml",
                                     "rate":"₹ 70/500ml",
                                     "exclude":false
                                },
                                                    {
                                                                         "no":17,
                                                                         "itemId":17,
                                                                         "item":"Broom",
                                                                         "amount":" ",
                                                                         "rate":"₹ 25/broom",
                                                                         "exclude":false
                                 },
                                  {
                                                                                                          "no":18,
                                                                                                          "itemId":18,
                                                                                                          "item":"Tea",
                                                                                                          "amount":"kg",
                                                                                                          "rate":"₹ 120/kg",
                                                                                                          "exclude":false
                                                                  },
                                  {
                                                                                                          "no":19,
                                                                                                          "itemId":19,
                                                                                                          "item":"Bread",
                                                                                                          "amount":"packet",
                                                                                                          "rate":"₹ 15/packet",
                                                                                                          "exclude":false
                                                                  },
,
                                  {
                                                                                                          "no":20,
                                                                                                          "itemId":20,
                                                                                                          "item":"Pepper",
                                                                                                          "amount":"gm/kg",
                                                                                                          "rate":"₹ 85/50gm",
                                                                                                          "exclude":false
                                                                  },
{
"no":21,
"itemId":21,
"item":"Besan Flour",
"amount":"gm/kg",
"rate":"₹ 70/500gm",
"exclude":false
},
{
"no":22,
"itemId":22,
"item":"Almond/Badam",
"amount":"gm/kg",
"rate":"₹ 100/100gm",
"exclude":false
},
{
"no":23,
"itemId":23,
"item":"Organic Cashews",
"amount":"gm/kg",
"rate":"₹ 150/100gm",
"exclude":false
},
 {
 "no":24,
 "itemId":24,
 "item":"Butter",
 "amount":"gm/kg",
 "rate":"₹ 46/100gm",
 "exclude":false
 },
   {
   "no":25,
   "itemId":25,
   "item":"Mustard",
   "amount":"gm/kg",
   "rate":"₹ 30/200gm",
   "exclude":false
   },
     {
     "no":26,
     "itemId":26,
     "item":"Chilli Powder",
     "amount":"gm/kg",
     "rate":"₹ 50/100gm",
     "exclude":false
     },
     ,
      {
      "no":27,
      "itemId":27,
      "item":"Sabudana",
      "amount":"gm/kg",
      "rate":"₹ 120/kg",
      "exclude":false
      },
       {
       "no":28,
       "itemId":28,
       "item":"NuttyCocoa",
       "amount":"Jar",
       "rate":"₹ 320/Jar",
       "exclude":false
       },
       {
                "no":29,
                "itemId":29,
                "item":"Noodles",
                "amount":"gm/kg",
                "rate":"₹ 12/70gm",
                "exclude":false
                },
                {
                       "no":30,
                       "itemId":30,
                       "item":"Jam",
                       "amount":"gm/kg",
                       "rate":"₹ 60/200gms",
                       "exclude":false
                       },

				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales40":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":362.5,
				"order":[
				{
					"no":1,
					"itemId":7,
					"item":"{{Rope}}",
					"amount":"2 m",
					"quantity":2,
					"rate":"₹ 35/10 m",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"3.5 Litre",
					"quantity":3.5,
					"rate":"₹ 45/litre",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"2 Packets",
					"quantity":2,
					"rate":"₹ 25/Packet",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":13,
					"item":"{{Detergent}}",
					"amount":"4 kg",
					"quantity":8,
					"rate":"₹ 37/500gm",				
					"exclude":false
				}
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},


		"Sales39":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"discount":"25% on total",
				"tempTotal":594.38,
				"order":[
				{
					"no":1,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"3 Kg",
					"quantity":3*0.75 ,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"1 Kg",
					"quantity":1*0.75,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":6,
					"item":"{{Oil}}",
					"amount":"2 Litre",
					"quantity":2*0.75,
					"rate":"₹ 125/litre",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"2",
					"quantity":2,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				{
					"no":5,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"250 ml",
					"quantity":2.5,
					"rate":"₹ 45/100ml",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},


		"Sales38":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"helpPageName":"salesHelp",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"discount":"Sugar - Get 1kg free",
				"tempTotal":395,
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"2.5 Kg",
					"quantity":2.5,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"3 Kg",
					"quantity":2,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":7,
					"item":"{{Rope}}",
					"amount":"25 m",
					"quantity":25,
					"rate":"₹ 35/10 m",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":9,
					"item":"{{Eggs}}",
					"amount":"15",
					"quantity":15,
					"rate":"₹ 5.5/egg",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},



		"Sales37":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"helpPageName":"salesHelp",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":408.75,
				"order":[
				{
					"no":1,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"500 gm",
					"quantity":0.5,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"3 Kg",
					"quantity":3,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"500 ml",
					"quantity":0.5,
					"rate":"₹ 45/litre",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":6,
					"item":"{{Oil}}",
					"amount":"250 ml",
					"quantity":0.25,
					"rate":"₹ 125/litre",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},


		"Sales36":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":537,
				"discount":"20% on oil",
				"order":[
				{
					"no":1,
					"itemId":6,
					"item":"{{Oil}}",
					"amount":"5 Litre",
					"quantity":5*0.8,
					"rate":"₹ 125/litre",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":13,
					"item":"{{Detergent}}",
					"amount":"500 gm",
					"quantity":1,
					"rate":"₹ 37/500gm",				
					"exclude":false
				}
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales35":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",	
				"tempTotal":546,
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"3 Kg",
					"quantity":3,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"2 Litre",
					"quantity":2,
					"rate":"₹ 45/litre",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":9,
					"item":"{{Eggs}}",
					"amount":"3 dozen",
					"quantity":36,
					"rate":"₹ 5.5/egg",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"4",
					"quantity":4,
					"rate":"₹ 27/soap",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales34":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"helpPageName":"salesHelp",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"discount":"5% on Total",
				"tempTotal":494,
				"order":[
				{
					"no":1,
					"itemId":7,
					"item":"{{Rope}}",
					"amount":"50 m",
					"quantity":50*.95,
					"rate":"₹ 35/10 m",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"5 Litre",
					"quantity":5*.95,
					"rate":"₹ 45/litre",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"3",
					"quantity":3*.95,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales33":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":549,
				"discount":"10% on Total",
				"order":[
				{
					"no":1,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"4 Kg",
					"quantity":4*.9,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"2 Kg",
					"quantity":2*.9,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":6,
					"item":"{{Oil}}",
					"amount":"2 Litre",
					"quantity":2*.9,
					"rate":"₹ 125/litre",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales32":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"helpPageName":"salesHelp",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"discount":"Buy 500 ml shampoo and get 500 ml shampoo for free",				
				"tempTotal":415.5,
				"order":[
				{
					"no":1,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"5",
					"quantity":5,
					"rate":"₹ 27/soap",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"1 Litre",
					"quantity":5,
					"rate":"₹ 45/100ml",
					"exclude":false
				},
				{
					"no":3,
					"itemId":13,
					"item":"{{Detergent}}",
					"amount":"1.5 kg",
					"quantity":3,
					"rate":"₹ 37/500gm",				
					"exclude":false
				}
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales31":{
			"category":"salesDifficult",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel04",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"helpPageName":"salesHelp",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"discount":"50% on Wheat",
				"tempTotal":430,
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"2 Kg",
					"quantity":2*0.5,
					"rate":"₹ 50/kg",
					"exclude":false
				},
				{
					"no":2,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"2 Kg",
					"quantity":2,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"2 Kg",
					"quantity":2,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales30":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"helpPageName":"salesHelp",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":520,
				"order":[
				{
					"no":1,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"750 gm",
					"quantity":0.75,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":7,
					"item":"{{Rope}}",
					"amount":"100 m",
					"quantity":100,
					"rate":"₹ 35/10 m",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales29":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"helpPageName":"salesHelp",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":585,
				"order":[
				{
					"no":1,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"5",
					"quantity":5,
					"rate":"₹ 27/soap",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"1 Litre",
					"quantity":10,
					"rate":"₹ 45/100ml",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales28":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"helpPageName":"salesHelp",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":534,
				"order":[
				{
					"no":1,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"5.5 Kg",
					"quantity":5.5,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":13,
					"item":"{{Detergent}}",
					"amount":"3.5 kg",
					"quantity":7,
					"rate":"₹ 37/500gm",				
					"exclude":false
				}
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales27":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"helpPageName":"salesHelp",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":422.5,
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"3.5 Kg",
					"quantity":3.5,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"1.5 Kg",
					"quantity":1.5,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":7,
					"item":"{{Rope}}",
					"amount":"5 m",
					"quantity":5,
					"rate":"₹ 35/10 m",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales26":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"helpPageName":"salesHelp",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":296.25,
				"order":[
				{
					"no":1,
					"itemId":7,
					"item":"{{Rope}}",
					"amount":"30 m",
					"quantity":30,
					"rate":"₹ 35/10 m",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":6,
					"item":"{{Oil}}",
					"amount":"250 ml",
					"quantity":0.25,
					"rate":"₹ 125/litre",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"4",
					"quantity":4,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales25":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"helpPageName":"salesHelp",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":276.5,
				"order":[
				{
					"no":1,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"2.5 Kg",
					"quantity":2.5,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"500 ml",
					"quantity":0.5,
					"rate":"₹ 45/litre",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"2",
					"quantity":2,
					"rate":"₹ 27/soap",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales24":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":242.5,
				"order":[
				{
					"no":1,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"2.5 Litre",
					"quantity":2.5,
					"rate":"₹ 45/litre",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":9,
					"item":"{{Eggs}}",
					"amount":"10",
					"quantity":10,
					"rate":"₹ 5.5/egg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"3 Packets",
					"quantity":3,
					"rate":"₹ 25/Packet",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales23":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"helpPageName":"salesHelp",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":422.5,
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"3.5 Kg",
					"quantity":3.5,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"2 Kg",
					"quantity":2,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"500 gm",
					"quantity":0.5,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales22":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":321,
				"order":[
				{
					"no":1,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"1.5 Kg",
					"quantity":1.5,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":9,
					"item":"{{Eggs}}",
					"amount":"12",
					"quantity":12,
					"rate":"₹ 5.5/egg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"200 ml",
					"quantity":2,
					"rate":"₹ 45/100ml",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales21":{
			"category":"salesModerate",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel03",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"helpPageName":"salesHelp",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":293,
				"order":[
				{
					"no":1,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"500 gm",
					"quantity":0.5,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"3",
					"quantity":3,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":13,
					"item":"{{Detergent}}",
					"amount":"2 kg",
					"quantity":4,
					"rate":"₹ 37/500gm",				
					"exclude":false
				}
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales20":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":675,
				"order":[
				{
					"no":1,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"6 Kg",
					"quantity":6,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":6,
					"item":"{{Oil}}",
					"amount":"3 Litre",
					"quantity":3,
					"rate":"₹ 125/litre",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales19":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":410,
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"5 Kg",
					"quantity":5,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"2 Kg",
					"quantity":2,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales18":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"helpPageName":"salesHelp",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":258,
				"order":[
				{
					"no":1,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":9,
					"item":"{{Eggs}}",
					"amount":"8",
					"quantity":8,
					"rate":"₹ 5.5/egg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"2 Packets",
					"quantity":2,
					"rate":"₹ 25/Packet",				
					"exclude":false
				},
				{
					"no":4,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"2",
					"quantity":2,
					"rate":"₹ 27/soap",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales17":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"helpPageName":"salesHelp",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":299,
				"order":[
				{
					"no":1,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"500 ml",
					"quantity":5,
					"rate":"₹ 45/100ml",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":13,
					"item":"{{Detergent}}",
					"amount":"1000 gm",
					"quantity":2,
					"rate":"₹ 37/500gm",				
					"exclude":false
				}
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales16":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":215,
				"order":[
				{
					"no":1,
					"itemId":9,
					"item":"{{Eggs}}",
					"amount":"10",
					"quantity":10,
					"rate":"₹ 5.5/egg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"4",
					"quantity":4,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales15":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"helpPageName":"salesHelp",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":310,
				"order":[
				{
					"no":1,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"2 Kg",
					"quantity":2,
					"rate":"₹ 110/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"200 ml",
					"quantity":2,
					"rate":"₹ 45/100ml",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales14":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"helpPageName":"salesHelp",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":200,
				"order":[
				{
					"no":1,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"2",
					"quantity":2,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"3 Packets",
					"quantity":3,
					"rate":"₹ 25/Packet",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"100 ml",
					"quantity":1,
					"rate":"₹ 45/100ml",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales13":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"helpPageName":"salesHelp",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":310,
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"3 Kg",
					"quantity":3,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"2 Kg",
					"quantity":2,
					"rate":"₹ 80/kg",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales12":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"helpPageName":"salesHelp",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":191,
				"order":[
				{
					"no":1,
					"itemId":7,
					"item":"{{Rope}}",
					"amount":"20 m",
					"quantity":20,
					"rate":"₹ 35/10 m",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"1",
					"quantity":1,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"3",
					"quantity":3,
					"rate":"₹ 27/soap",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales11":{
			"category":"salesEasy",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel02",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":137,
				"order":[
				{
					"no":1,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"2 Litre",
					"quantity":2,
					"rate":"₹ 45/litre",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":9,
					"item":"{{Eggs}}",
					"amount":"4",
					"quantity":4,
					"rate":"₹ 5.5/egg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"1 Packet",
					"quantity":1,
					"rate":"₹ 25/Packet",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},


		"Sales10":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":62,
				"order":[
				{
					"no":1,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"1 Packet",
					"quantity":1,
					"rate":"₹ 25/Packet",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":13,
					"item":"{{Detergent}}",
					"amount":"500 gm",
					"quantity":1,
					"rate":"₹ 37/500gm",				
					"exclude":false
				}

				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales9":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":67,
				"order":[
				{
					"no":1,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"1",
					"quantity":1,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"1",
					"quantity":1,
					"rate":"₹ 27/soap",				
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales8":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":200,
				"order":[
				{
					"no":1,
					"itemId":6,
					"item":"{{Oil}}",
					"amount":"1 Litre",
					"quantity":1,
					"rate":"₹ 125/litre",
					"exclude":false
				},
				{
					"no":2,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 50/kg",
					"exclude":false
				},
				{
					"no":3,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"1 Packet",
					"quantity":1,
					"rate":"₹ 25/Packet",
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales7":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":157,
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 50/kg",
					"exclude":false
				},
				{
					"no":2,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 80/kg",
					"exclude":false
				},
				{
					"no":3,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"1",
					"quantity":1,
					"rate":"₹ 27/soap",
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales6":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"helpPageName":"salesHelp",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":120,
				"order":[
				{
					"no":1,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"1 Litre",
					"quantity":1,
					"rate":"₹ 45/litre",
					"exclude":false
				},
				{
					"no":2,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"1 Packet",
					"quantity":1,
					"rate":"₹ 25/Packet",
					"exclude":false
				},
				{
					"no":3,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 50/kg",
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales5":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":109,
				"order":[
				{
					"no":1,
					"itemId":11,
					"item":"{{Soap}}",
					"amount":"1",
					"quantity":1,
					"rate":"₹ 27/soap",
					"exclude":false
				},
				{
					"no":2,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"100 ml",
					"quantity":1,
					"rate":"₹ 45/100ml",
					"exclude":false
				},
				{
					"no":3,
					"itemId":13,
					"item":"{{Detergent}}",
					"amount":"500 gm",
					"quantity":1,
					"rate":"₹ 37/500gm",
					"exclude":false
				}
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales4":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"helpPageName":"salesHelp",
				"Tools":"{{Tools}}",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":205,
				"order":[
				{
					"no":1,
					"itemId":6,
					"item":"{{Oil}}",
					"amount":"1 Litre",
					"quantity":1,
					"rate":"₹ 125/litre",
					"exclude":false
				},
				{
					"no":2,
					"itemId":3,
					"item":"{{Dal}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 80/kg",
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},


		"Sales3":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":155,
				"order":[
				{
					"no":1,
					"itemId":10,
					"item":"{{Biscuits}}",
					"amount":"1 Packet",
					"quantity":1,
					"rate":"₹ 25/Packet",
					"exclude":false
				},
				{
					"no":2,
					"itemId":7,
					"item":"{{Rope}}",
					"amount":"10 m",
					"quantity":10,
					"rate":"₹ 35/10m",
					"exclude":false
				},
				{
					"no":3,
					"itemId":5,
					"item":"{{Milk}}",
					"amount":"1 Litre",
					"quantity":1,
					"rate":"₹ 45/litre",
					"exclude":false
				},
				{
					"no":4,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 50/kg",
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales2":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":155,
				"order":[
				{
					"no":1,
					"itemId":2,
					"item":"{{Rice}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 110/kg",
					"exclude":false
				},
				{
					"no":2,
					"itemId":12,
					"item":"{{Shampoo}}",
					"amount":"100 ml",
					"quantity":1,
					"rate":"₹ 45/100ml",
					"exclude":false
				},
				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		"Sales1":{

			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":false,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":"140",
				"order":[
				{
					"no":1,
					"itemId":1,
					"item":"{{Wheat}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":2,
					"itemId":4,
					"item":"{{Sugar}}",
					"amount":"1 Kg",
					"quantity":1,
					"rate":"₹ 50/kg",				
					"exclude":false
				},
				{
					"no":3,
					"itemId":8,
					"item":"{{Chocolate}}",
					"amount":"1",
					"quantity":1,
					"rate":"₹ 40/chocolate",				
					"exclude":false
				}],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},
"Sales41":{
			"category":"salesSimple",
			"repeatforuser":true,
			"repeatforall":true,
			"questionTime":3000,
			"optionsTime":2000,
			"templates":[
			{
				"templateId": 4,
				"salesImage":"images/selllevel01",
				"templateType": "sales",
				"profilePicture":"images/Customer/customer1",
				"time":"600",
				"divID":"seconds",
				"Order":"{{Order}}",
				"Customer":"{{Customer}}",
				"receiptHeading":"{{receiptHeading}}",
				"receiptGen":"{{receiptGen}}",
				"Items":"{{Items}}",
				"Quantity":"{{Quantity}}",
				"Rate":"{{Rate}}",
				"Amount":"{{Amount}}",
				"Tools":"{{Tools}}",
				"helpPageName":"salesHelp",
				"tooltipMessage":"This item is not available in your Inventory",
				"tempTotal":80,
				"order":[
				{
					"no":1,
					"itemId":25,
					"item":"{{Mustard}}",
					"amount":"200 gm",
					"quantity":"200 gm",
					"rate":"₹ 30/gm",
					"exclude":false
				},
				{
					"no":2,
					"itemId":26,
					"item":"{{Chilli Powder}}",
					"amount":"100 gm",
					"quantity":"100 gm",
					"rate":"₹ 50/100gm",
					"exclude":false
				}

				],

				"onClickPage": {
					"nextPage" : "",
					"hideScenarios" : true
				}
			}]
		},

		
}