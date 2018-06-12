 ubsApp.pages = {
	"initPage": [
		
		{
			"templateId": 3,
			"templateType": "wheelOfFortune",
			"width": "col-lg-12 col-md-12 col-xs-12",
			"style": "padding:5px",
			"wheelWidthInPercent" : "80",
			"optionPageMap" : {
				"300": "page4",
				"450": "page3",
				"600": "page3",
				"300": "page4",
				"450": "page3",
				"600": "page3"
			},
			"settings" :{
               
                'numSegments'     : 6,         // Specify number of segments.
                'segments'        :             // Define segments including colour and text.
                [                               // font size and test colour overridden on backrupt segments.
                   {'fillStyle' : '#ee1c24', 'text' : '300'},
                   {'fillStyle' : '#3cb878', 'text' : '450'},
                   {'fillStyle' : '#f6989d', 'text' : '600'},
				   {'fillStyle' : '#ee1c24', 'text' : '300'},
				    {'fillStyle' : '#f6989d', 'text' : '600'},
				   {'fillStyle' : '#ee1c24', 'text' : '300'}
                  
                   
                ]
            }
			

		}
	],

	"page2": [{
			"templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyToPbYny02i9LY6pJ7muG13oQFoUarWoWnG6hkxKGNGDuspQR\" >",
			"width": "col-lg-4 col-md-4 col-xs-4",
			"style": "padding:5px"

		},
		{
			"templateId": 2,
			"templateType": "decision",
			"question": "Then we can talk whatever is in your mind.",
			"options": [{
					"optionName": "sample",
					"optionValue": "Happy"
				},
				{
					"optionName": "sample",
					"optionValue": "Not Happy"
				}
			],
			"optionPageMap": {

				"Happy": "rollingDice",
				"Not Happy": "page3"
			},
			"width": "col-lg-4 col-md-4 col-xs-4",
			"style": "padding:5px"

		}
	],

	"page3": [{
			"templateId": 2,
			"templateType": "decision",
			"question": "Lets talk about financial Services",
			"options": [{
					"optionName": "sample",
					"optionValue": "Proceed"
				},
				{
					"optionName": "sample",
					"optionValue": "Change Subject"
				}
			],
			"optionPageMap": {

				"Change Subject": "page2",
				"Proceed": "initPage"
			},
			"width": "col-lg-4 col-md-4",
			"style": "padding:5px"

		},
		{
			"templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIl1xsE1HRQM67ASuV1QgxTeVrJfl4SVhK5R-va_eFYg1dU4cs\" >",
			"width": "col-lg-4 col-md-4 col-xs-4",
			"style": "padding:5px;cursor:pointer",
			"onClickPage" : "initPage"

		}

	],

	"rollingDice":[
		{
			"templateId":4,
			"templateType":"rollingDice",
			"optionPageMap" : {
				"1": "page2",
				"2": "page3",
				"3": "page2",
				"4": "page3",
				"5": "page2",
				"6": "page3",
				"7": "page2",
				"8": "page3",
			},
			
		}
	],
	"page4" : [{
        "templateId": 5,
        "templateType": "scratchCard",
        "initHeight": "30", // for technical reason
        "initWidth": "20", // for technical reason
        "height": "30", // in percentage
        "width": "20", // in percentage
        "backgroundImageList": [
            {image:"images/TRAVEL.jpeg", message: "Congratulations you won a Travel Surprise !"},
            {image:"images/IMG-1.jpeg", message: "Congratulations you won a Hard Cash !"},
            {image:"images/IMG-2.jpeg", message: "Hard Luck dude !"},
         ],
        "initStyle": "background-image: url(${image});top: 50%;left: 50%;", // for technical reason
        "style": "background-image: url(${image});top: 50%;left: 50%;",
        "coverImage": "images/IMG-0.jpeg",
        "successMessage": "Congratulations you won a Travel Surprise !",
        "nextPage": "initPage",
        }
    ],

    "InitPage": [
		
		{
			"templateId": 3,
			"templateType": "wheelOfFortune",
			"width": "col-lg-12 col-md-12 col-xs-12",
			"style": "padding:5px",
			"wheelWidthInPercent" : "80",
			"optionPageMap" : {
				"300": "choicePage",
				"450": "choicePage",
				"600": "choicePage",
				"300": "choicePage",
				"450": "choicePage",
				"600": "choicePage"
			},
			"settings" :{
               
                'numSegments'     : 6,         // Specify number of segments.
                'segments'        :             // Define segments including colour and text.
                [                               // font size and test colour overridden on backrupt segments.
                   {'fillStyle' : '#ee1c24', 'text' : '300'},
                   {'fillStyle' : '#3cb878', 'text' : '450'},
                   {'fillStyle' : '#f6989d', 'text' : '600'},
				   {'fillStyle' : '#ee1c24', 'text' : '300'},
				   {'fillStyle' : '#f6989d', 'text' : '600'},
				   {'fillStyle' : '#ee1c24', 'text' : '300'}
    
                ]
            }			
		}
	],
	
	"choicePage": [
	{ 
			
		"templateId": 4,
		"templateType": "choiceTemplate",
		"choices":[
	  	    {
	  	    	"templateId": 1,
				"choiceID":0,
				"notSelectedSrc": "<img style=\"float:right\" src=\"Images/tl.png\" >",
				"selectedSrc": "<img style=\"float:right;filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"Images/tl.png\" >",
				"width": "col-lg-6 col-md-6 col-xs-6",
				"style": "padding:1px;margin-top:5%",
				"display":false,
				"onClickPage": "q1"
			},
			{
				"templateId": 1,
				"choiceID":1,
				"notSelectedSrc": "<img style=\"\" src=\"Images/tr.png\" >",
				"selectedSrc": "<img style=\"filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"Images/tr.png\" >",
				"width": "col-lg-6 col-md-6 col-xs-6",
				"style": "padding:1px;margin-top:5%",
				"display":false,
				"onClickPage": "q1"
			},
			{
				"templateId": 1,
				"choiceID":2,
				"notSelectedSrc": "<img style=\"float:right\" src=\"Images/lb.png\" >",
				"selectedSrc": "<img style=\"float:right;filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"Images/lb.png\" >",
				"width": "col-lg-6 col-md-6 col-xs-6",
				"style": "padding:1px;",
				"display":false,
				"onClickPage": "q1"
			},
		    {
		    	"templateId": 1,
				"choiceID":3,
				"notSelectedSrc": "<img style=\"\" src=\"Images/rb.png\" >",
				"selectedSrc": "<img style=\"filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"Images/rb.png\" >",
				"width": "col-lg-6 col-md-6 col-xs-6",
				"style": "padding:1px;",
				"display":false,
				"onClickPage": "q1"
			}],
		}],
	
		"q1": [
		{
			"templateId":15,
			"templateType":"score",
			"width":"col-lg-12 col-md-12 col-xs-12",
			"style":" .coin{display:block ; width: 35px; height: 35px; -ms-transform-style:preserve-3d;-webkit-transform-style:preserve-3d; transform-style:preserve-3d;  animation: coin 2s linear infinite; } .coin .front{ width: 100%; height: 100%; border-radius: 50%; position: absolute; top: 0; left: 0; z-index: -1; } .coin .back{ width: 100%; height: 100%; background:#f7941e; border-radius: 50%; transform: rotateY(180deg)translateZ(10px); -webkit-transform:rotateY(180deg)translateZ(10px); -ms-transform:rotateY(180deg)translateZ(10px); position: absolute; top: 0; left: 0; z-index: 1; } .coin .front_b{ width: 100%; height: 100%; background:#f7941e; border-radius: 50%; transform: translateZ(-1px); -webkit-transform:translateZ(-1px); position: absolute; top:0; left: 0; z-index: 2;} .coin:before{ content: \"\"; margin-left: -5px; width: 10px; height: 100%; background:#f7941e; position: absolute; top: 0; left: 50%; z-index:1; -webkit-transform:rotateY(-90deg); -webkit-transform-origin:100% 50%; transform:  rotateY(-90deg); transform-origin: 100% 50%;} .coin .front_b:before{ content: \"\"; width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: 3; } .coin .back:before{content: \"\";width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: -3;} .print_txt{ display:block;padding: 10px ;border-radius: 20px;font-weight: 500;font-size: 18px;width: 7%;} @keyframes coin{ 0%{transform: rotateY(0);} 100%{transform: rotateY(360deg);}}",
			"score_text":"<div class=\"print_txt\" id=\"headId\" align=\"center\"></div>",
			"coin":"<div class=\"coin\" style=\"float:right\"> <div class=\"front\"></div> <div class=\"front_b\"></div> <div class=\"back\"></div> </div>"
		},
		{
			"templateId": 2,
			"templateType": "decision",
			"question": "Looks like one customer wants to purchase items:<br>1.1.5kg Rice<br>2.5kg Dal<br>1 kg rice<br><br> Cost of Rice/Dal/Atta per kg is 60/90/40 rupees respectively.<br> Can you tell how much money will you take from Customer?",
			
			"options": [
			    {
					"optionName":"q1", 
					"optionValue": "355"
				},
				{
					"optionName": "q1",
					"optionValue": "255"
				},
				{
					"optionName":"q1",
					"optionValue": "155"
				}
				
			],
			"optionPageMap": 
			{
				"355":"q1-correct",
				"255": "q1-wrong",
				"155": "q1-vvwrong"
			},
			"width": "col-lg-8 col-md-8 col-xs-8",
			"style": "padding:5px;height:100%; width:100%;textbackground-image:url('C:/Users/UBS/Documents/prathamubs-master/prathamubs-master/js/grocery.jpg');background-repeat:no-repeat;background-size:cover"
		}],
	
	"q1-correct":[
		{
			"templateId":15,
			"templateType":"score",
			"width":"col-lg-12 col-md-12 col-xs-12",
			"style":" .coin{display:block ; width: 35px; height: 35px; -ms-transform-style:preserve-3d;-webkit-transform-style:preserve-3d; transform-style:preserve-3d;  animation: coin 2s linear infinite; } .coin .front{ width: 100%; height: 100%; border-radius: 50%; position: absolute; top: 0; left: 0; z-index: -1; } .coin .back{ width: 100%; height: 100%; background:#f7941e; border-radius: 50%; transform: rotateY(180deg)translateZ(10px); -webkit-transform:rotateY(180deg)translateZ(10px); -ms-transform:rotateY(180deg)translateZ(10px); position: absolute; top: 0; left: 0; z-index: 1; } .coin .front_b{ width: 100%; height: 100%; background:#f7941e; border-radius: 50%; transform: translateZ(-1px); -webkit-transform:translateZ(-1px); position: absolute; top:0; left: 0; z-index: 2;} .coin:before{ content: \"\"; margin-left: -5px; width: 10px; height: 100%; background:#f7941e; position: absolute; top: 0; left: 50%; z-index:1; -webkit-transform:rotateY(-90deg); -webkit-transform-origin:100% 50%; transform:  rotateY(-90deg); transform-origin: 100% 50%;} .coin .front_b:before{ content: \"\"; width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: 3; } .coin .back:before{content: \"\";width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: -3;} .print_txt{ display:block;padding: 10px ;border-radius: 20px;font-weight: 500;font-size: 18px;width: 7%;} @keyframes coin{ 0%{transform: rotateY(0);} 100%{transform: rotateY(360deg);}}",
			"score_text":"<div class=\"print_txt\" id=\"headId\" align=\"center\"></div>",
			"coin":"<div class=\"coin\" style=\"float:right\"> <div class=\"front\"></div> <div class=\"front_b\"></div> <div class=\"back\"></div> </div>"
		},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "Yay, you answered correct. Your balance increases by 355. His new balance is 355." ,
			"width": "col-lg-4 col-md-4 col-xs-4",
			"style": "padding:5px;"
	   
	},	
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIl1xsE1HRQM67ASuV1QgxTeVrJfl4SVhK5R-va_eFYg1dU4cs\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;"	
	},
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" >Next Question!</button>",
			"style": "padding:5px;",
			"onClickOp":"355",
			"nextPage":"choicePage"
	}],

    "q1-wrong":[
		{
			"templateId":15,
			"templateType":"score",
			"width":"col-lg-12 col-md-12 col-xs-12",
			"style":" .coin{display:block ; width: 35px; height: 35px; -ms-transform-style:preserve-3d;-webkit-transform-style:preserve-3d; transform-style:preserve-3d;  animation: coin 2s linear infinite; } .coin .front{ width: 100%; height: 100%; border-radius: 50%; position: absolute; top: 0; left: 0; z-index: -1; } .coin .back{ width: 100%; height: 100%; background:#f7941e; border-radius: 50%; transform: rotateY(180deg)translateZ(10px); -webkit-transform:rotateY(180deg)translateZ(10px); -ms-transform:rotateY(180deg)translateZ(10px); position: absolute; top: 0; left: 0; z-index: 1; } .coin .front_b{ width: 100%; height: 100%; background:#f7941e; border-radius: 50%; transform: translateZ(-1px); -webkit-transform:translateZ(-1px); position: absolute; top:0; left: 0; z-index: 2;} .coin:before{ content: \"\"; margin-left: -5px; width: 10px; height: 100%; background:#f7941e; position: absolute; top: 0; left: 50%; z-index:1; -webkit-transform:rotateY(-90deg); -webkit-transform-origin:100% 50%; transform:  rotateY(-90deg); transform-origin: 100% 50%;} .coin .front_b:before{ content: \"\"; width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: 3; } .coin .back:before{content: \"\";width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: -3;} .print_txt{ display:block;padding: 10px ;border-radius: 20px;font-weight: 500;font-size: 18px;width: 7%;} @keyframes coin{ 0%{transform: rotateY(0);} 100%{transform: rotateY(360deg);}}",
			"score_text":"<div class=\"print_txt\" id=\"headId\" align=\"center\"></div>",
			"coin":"<div class=\"coin\" style=\"float:right\"> <div class=\"front\"></div> <div class=\"front_b\"></div> <div class=\"back\"></div> </div>"
		},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "Oops!! you answered incorrect. You lost money. Your balance decreases by by 255. Your new balance is 1000-255=745." ,
			"width": "col-lg-4 col-md-4 col-xs-4",
			"style": "padding:5px;"
	   
	},	
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIl1xsE1HRQM67ASuV1QgxTeVrJfl4SVhK5R-va_eFYg1dU4cs\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;"	
	},
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" >Next Question!</button>",
			"style": "padding:5px;",
			"onClickOp":"-255",
			"nextPage":"choicePage"
	}
	
	],
	
	"q1-vvwrong":[
		{
			"templateId":15,
			"templateType":"score",
			"width":"col-lg-12 col-md-12 col-xs-12",
			"style":" .coin{display:block ; width: 35px; height: 35px; -ms-transform-style:preserve-3d;-webkit-transform-style:preserve-3d; transform-style:preserve-3d;  animation: coin 2s linear infinite; } .coin .front{ width: 100%; height: 100%; border-radius: 50%; position: absolute; top: 0; left: 0; z-index: -1; } .coin .back{ width: 100%; height: 100%; background:#f7941e; border-radius: 50%; transform: rotateY(180deg)translateZ(10px); -webkit-transform:rotateY(180deg)translateZ(10px); -ms-transform:rotateY(180deg)translateZ(10px); position: absolute; top: 0; left: 0; z-index: 1; } .coin .front_b{ width: 100%; height: 100%; background:#f7941e; border-radius: 50%; transform: translateZ(-1px); -webkit-transform:translateZ(-1px); position: absolute; top:0; left: 0; z-index: 2;} .coin:before{ content: \"\"; margin-left: -5px; width: 10px; height: 100%; background:#f7941e; position: absolute; top: 0; left: 50%; z-index:1; -webkit-transform:rotateY(-90deg); -webkit-transform-origin:100% 50%; transform:  rotateY(-90deg); transform-origin: 100% 50%;} .coin .front_b:before{ content: \"\"; width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: 3; } .coin .back:before{content: \"\";width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: -3;} .print_txt{ display:block;padding: 10px ;border-radius: 20px;font-weight: 500;font-size: 18px;width: 7%;} @keyframes coin{ 0%{transform: rotateY(0);} 100%{transform: rotateY(360deg);}}",
			"score_text":"<div class=\"print_txt\" id=\"headId\" align=\"center\"></div>",
			"coin":"<div class=\"coin\" style=\"float:right\"> <div class=\"front\"></div> <div class=\"front_b\"></div> <div class=\"back\"></div> </div>"
		},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "Oops!! you answered very much incorrect. You lost double money. Your balance decreases by by 2 x 255. Your new balance is 1000-510=490." ,
			"width": "col-lg-4 col-md-4 col-xs-4",
			"style": "padding:5px;"
	   
	},	
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIl1xsE1HRQM67ASuV1QgxTeVrJfl4SVhK5R-va_eFYg1dU4cs\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;"	
	},
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" >Next Question!</button>",
			"style": "padding:5px;",
			"onClickOp":"-155",
			"nextPage":"choicePage"
	}],
		
	"q2": [{
			"templateId": 2,
			"templateType": "decision",
			"question": "Looks like Same Customer is back.he wants to return few items and purchase soem new.<br>He wants to return<br>1kg Rice - Rs.60<br>1 kg of Dal- Rs 90<br><br> He wants to purchase <br>0.5 litre Oil<br> 6 chips packet<br> ! ltr oil/1 chip packet cost Rs 90/10. <br> Can you tell how much money should customer pay?<br> ",			
			"options": [{
					"optionName": "q2",
					"optionValue": "65"
				},
				{
					"optionName": "q2",
					"optionValue": "55"
				},
				{
					"optionName": "q2",
					"optionValue": "45"
				}
				
			],
			"optionPageMap": 
			{
				"65":"q2-correct",
				"55": "q2-wrong" ,
				"45": "q2-vvwrong"
			},
			"width": "col-lg-7 col-md-7 col-xs-7",
			"style": "padding:5px"
		},
		{
			"templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIl1xsE1HRQM67ASuV1QgxTeVrJfl4SVhK5R-va_eFYg1dU4cs\" >",
			"width": "col-lg-5 col-md-5 col-xs-5",
			"style": "padding:5px;cursor:pointer"

		}],
		"popup":[{
		
		"id":"wheelOfFortuneModal",
		"msg_style":"width: 300px; height: 60px; background-color: wheat;padding: 5px; margin: auto; text-align: center; overflow-x: auto;overflow-y: auto;",
		"fortuneID":"wheelOfFortuneIndicatedSegment",
		"button_style":"border:1px solid;cursor: pointer; width: fit-content;padding: 3px;     margin: auto;",
		"onClick":"ubsWheelOfFortune.resetWheel()"
	}]	
}
