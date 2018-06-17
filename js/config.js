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
				"Basic Screen": "choicePage",
				"Customer Cheating": "choicePage",
				"Expired Product": "choicePage",
				"Basic Screen": "choicePage",
				"Customer Cheating": "choicePage",
				"Expired Product": "choicePage"
			},
			"settings" :{
               
                'numSegments'     : 6,         // Specify number of segments.
                'segments'        :             // Define segments including colour and text.
                [                               // font size and test colour overridden on backrupt segments.
                   {'fillStyle' : '#ffcc00', 'text' : 'Basic Screen'},
                   {'fillStyle' : '#ff6600', 'text' : 'Customer Cheating'},
                   {'fillStyle' : '#33cc33', 'text' : 'Expired Product'},
				   {'fillStyle' : '#ffcc00', 'text' : 'Customer Cheating'},
				   {'fillStyle' : '#ff6600', 'text' : 'Basic Screen'},
				   {'fillStyle' : '#33cc33', 'text' : 'Expired Product'}
    
                ]
            },
            "button_style":"background-color:#ff6600; padding:5px; border-radius:5px; border:0;",
            "audioId":"wheelOfFortuneAudio",	
		},
		{
			"templateId": 5,
			"templateType":"popup",
			"id":"wheelOfFortuneModal",
			"msg_style":"width: 43vw; height: 14vw; background-color: wheat;padding: 1vw; margin: auto; text-align: center; overflow-x: auto;overflow-y: auto;",
			"message":"Yay !!! Lets proceed to <span id=\"wheelOfFortuneIndicatedSegment\"> </span> section.",
			"button_style":"border:1px solid;cursor: pointer; width: fit-content;padding: 3px;     margin: auto;",
			"onClick":"ubsWheelOfFortune.resetWheel()"
		},
		{
			"templateType":"audioTemplate",
			"audioSrc":"audio/introMaths.mp3",
			"audioId":"wheelOfFortuneAudio",
		},
	],
	
	"choicePage": [
		{
			"templateId": 1,
			"templateType": "static",
			"src": "<div style=\" text-align:center; color:white;\">Basic Screeen Maths</div>" ,
			"style": "padding:8px;border-radius:5px;position:absolute;top:0%;width:90%;left:0%;height:6%; background-color:black;",
			"display_score":"true"
		},
	{ 
			
		"templateId": 4,
		"templateType": "choiceTemplate",
		"display_score":"true",
		"choiceHeightFactor" : 2,
		"nextPage":"InitPage",
		"choices":[
	  	    {
	  	    	"templateId": 1,
				"choiceID":0,
				"notSelectedSrc": "<img style=\"float:right;max-height: 100%;\" src=\"Images/paani-puri.jpg\" >",
				"selectedSrc": "<img style=\"float:right;;max-height: 100%;filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"Images/paani-puri.jpg\" >",
				"width": "col-lg-6 col-md-6 col-xs-6",
				"style": "padding:1px;margin-top:3.5%",
				"display":false,
				"onClickPage": "q1"
			},
			{
				"templateId": 1,
				"choiceID":1,
				"notSelectedSrc": "<img style=\";max-height: 100%;\" src=\"Images/paani-puri.jpg\" >",
				"selectedSrc": "<img style=\";max-height: 100%;filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"Images/paani-puri.jpg\" >",
				"width": "col-lg-6 col-md-6 col-xs-6",
				"style": "padding:1px;margin-top:3.5%",
				"display":false,
				"onClickPage": "q2"
			},
			{
				"templateId": 1,
				"choiceID":2,
				"notSelectedSrc": "<img style=\"float:right;max-height: 100%;\" src=\"Images/paani-puri.jpg\" >",
				"selectedSrc": "<img style=\";max-height: 100%;float:right;filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"Images/paani-puri.jpg\" >",
				"width": "col-lg-6 col-md-6 col-xs-6",
				"style": "padding:1px;",
				"display":false,
				"onClickPage": "q3"
			},
		    {
		    	"templateId": 1,
				"choiceID":3,
				"notSelectedSrc": "<img style=\";max-height: 100%;\" src=\"Images/paani-puri.jpg\" >",
				"selectedSrc": "<img style=\";max-height: 100%;filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"Images/paani-puri.jpg\" >",
				"width": "col-lg-6 col-md-6 col-xs-6",
				"style": "padding:1px;",
				"display":false,
				"onClickPage": "q4"
			}],
		},
		],
	
		"q1": [
		{
			"templateId": 2,
			"templateType": "decision",
			"display_score":"true",
			"question": "<div style='font-size:1.8vw;background-color:#99ff66;border-radius: 3vw;padding:2vw;'>Looks like one customer wants to purchase items:<br>1.1.5kg Rice<br>2.5kg Dal<br>1 kg rice<br><br> Cost of Rice/Dal/Atta per kg is 60/90/40 rupees respectively.<br> Can you tell how much money will you take from Customer?</div>",
			"answer":"355",
			"options": [
			    {
					"optionName":"q1", 
					"optionValue": "355",
					"id":1,
					"amount":100,
					//"radio_style":"visibility:hidden",
					//"for":"1"
				},
				{
					"optionName": "q1",
					"optionValue": "255",
					"id":2,
					"amount":-100,
					//"radio_style":"visibility:hidden",
					//"for":"2"
				},
				{
					"optionName":"q1",
					"optionValue": "155",
					"id":3,
					"amount":-150,
					//"radio_style":"visibility:hidden",
					//"for":"3"
				}
				
			],
			"optionPageMap": 
			{
				"1":"q1-correct",
				"2": "q1-wrong",
				"3": "q1-vvwrong"
			},
			"width": "col-lg-8 col-md-8 col-xs-8",
			"asnwer":"355",			
			"style": "align:center; position:absolute; top:4%; right:20%; color:black; background-color:rgba(8,8,8,1); box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 5vw; padding:2vw 2vw 1vw 2vw;"
		},
		{
			"templateId":6,
			"templateType":"timerTemp",
			"time":21,
			"divID":"countdowntimer",
			"style":"color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;font-size:2vw ;position:fixed; top:1vw; right:13vw;",
			"redirect":"choicePage"
		}
		],
	
	"q1-correct":[

	{
		"templateType":"audioTemplate",
		"audioSrc":"audio/Buzzercorrect.mp3",
		"audioId":"q1-correct-audio",
	},
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Happy-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"completed":true,
			"style": "padding:5px;position:absolute;top:10%",	
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Yay, you answered correct. Your balance increases by 355. His new balance is 355</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",	
			"display_score":"true",
			"score_animation_req":"true",
			"audioId":"q1-correct-audio",
			"completed":"true",
	},	
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
	}],

    "q1-wrong":[
    {
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Angry-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
	{
		"templateType":"audioTemplate",
		"audioSrc":"audio/wrongbeat.mp3",
		"audioId":"q1-correct-audio",
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Oops!! you answered incorrect. You lost money. Your balance decreases by by 255. Your new balance is 1000-255=745.</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true",
			"audioId":"q1-correct-audio",
	},	
	{
		   "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
	},
	
	
	],
	
	"q1-vvwrong":[

	{
		"templateType":"audioTemplate",
		"audioSrc":"audio/wrongbeat.mp3",
		"audioId":"q1-correct-audio",
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "Oops!! you answered very much incorrect. You lost double money. Your balance decreases by by 2 x 255. Your new balance is 1000-510=490." ,
			"width": "col-lg-4 col-md-4 col-xs-4",
			"style": "padding:5px;",
			"display_score":"true",
			"completed":"true",
			"score_animation_req":"true",
			"style": "padding:5px;",
			"audioId":"q1-correct-audio",
	},	
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Girl/girl-angry.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Oops!! you answered very much incorrect. You lost double money. Your balance decreases by by 2 x 255. Your new balance is 1000-510=490.</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
	},	
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
	}],
		
	"q2": [{
			"templateId": 2,
			"templateType": "decision",
			"display_score":"true",
			"question": "<div style='font-size:1.3vw;background-color:#99ff66;border-radius: 3vw;padding:2vw;'>Looks like Same Customer is back.he wants to return few items and purchase soem new.<br>He wants to return<br>1kg Rice - Rs.60<br>1 kg of Dal- Rs 90<br><br> He wants to purchase <br>0.5 litre Oil<br> 6 chips packet<br> 1 ltr oil/1 chip packet cost Rs 90/10. <br> Can you tell how much money should customer pay?</div>",			
			"options": [{
					"optionName": "q2",
					"optionValue": "65",
					"id":"1",
					"amount":100
				},
				{
					"optionName": "q2",
					"optionValue": "55",
					"id":"2",
					"amount":-100
				},
				{
					"optionName": "q2",
					"optionValue": "45",
					"id":"3",
					"amount":-100
				}
				
			],
			"optionPageMap": 
			{
				"1":"q2-correct",
				"2": "q2-wrong" ,
				"3": "q2-vvwrong"
			},
			"width": "col-lg-7 col-md-7 col-xs-7",
			"style": "align:center; position:absolute; top:4%; right:20%; color:black; background-color:rgba(8,8,8,1); box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 5vw; padding:2vw 2vw 1vw 2vw;"
		},
		{
			"templateId":6,
			"templateType":"timerTemp",
			"time":21,
			"divID":"countdowntimer",
			"style":"color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;font-size:2vw ;position:fixed; top:1vw; right:13vw;",
			"redirect":"choicePage"
		}],

		"q2-vvwrong":[

		{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Girl/girl-angry.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Oops!! You answered incorrectly</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
	},	

        {
                "templateId": 1,
				"templateType": "static",
				"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
				"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
				"style":"position:absolute;text-align: center; top:70%",
				"onClickPage":"choicePage"
        }],
    "q2-wrong":[
    {
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Angry-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},

        {
                "templateId": 1,
                "templateType": "static",
                "completed":"true",
                "src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Oops!! You answered incorrectly. Your money will be deducted!!</div> " ,
                "width": "col-lg-4 col-md-4 col-xs-4",
                "completed":true,
                "style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
                "display_score":"true",
                "score_animation_req":"true",
                "style": "padding:5px;"
        },  
        
        {
                "templateId": 1,
				"templateType": "static",
				"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
				"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
				"style":"position:absolute;text-align: center; top:70%",
				"onClickPage":"choicePage"
        }],
        
    "q2-correct":[
    		{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; height:40vw; \" src=\"images/Girl/Girl_Happy.gif\" >",
			"width": "col-lg-6 col-md-6 col-md-offset-1 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
			},
			{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Yayy!!! you answered correctly</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
	},	

            {
                    "templateId": 1,
					"templateType": "static",
					"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
					"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
					"style":"position:absolute;text-align: center; top:70%",
					"onClickPage":"choicePage"
            }],
            
    
    //Question 3 

    "q3": [{
        "templateId": 2,
        "templateType": "decision",
        "display_score":"true",
        "question": "<div style='font-size:1.35vw;background-color:#99ff66;border-radius: 3vw;padding:2vw;'>Looks like Same Customer is back.He wants to return few items and purchase some new.<br>He wants to return<br>1kg Onion - Rs.19<br>1 kg of Potato- Rs 34<br><br> He wants to purchase <br>1.5kg Tomato<br> 1kg Cabbage<br>Per kg cost of tomato/cabbage is 26/24 rupees<br> Can you tell how much money should you return pay?</div>",           
        "options": [{
                "optionName": "q2",
                "optionValue": "Rs.30",
                "id":"1",
                "amount":-10
            },
            {
                "optionName": "q2",
                "optionValue": "Rs.5",
                "id":"2",
                "amount":-10
            },
            {
                "optionName": "q2",
                "optionValue": "Rs.10",
                "id":"3",
                "amount":10
            }
        ],
        "optionPageMap": 
        {
            "1":"q3-vvwrong",
            "2": "q3-wrong" ,
            "3": "q3-correct"
        },
        "width": "col-lg-7 col-md-7 col-xs-7",
        "style": "align:center; position:absolute; top:4%; right:20%; color:black; background-color:rgba(8,8,8,1); box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 5vw; padding:2vw 2vw 1vw 2vw;"
    },
    {
        "templateId":6,
        "templateType":"timerTemp",
        "time":21,
        "divID":"countdowntimer",
        "style":"color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;font-size:2vw ;position:fixed; top:1vw; right:13vw;",
        "redirect":"choicePage"
    }],

    "q3-vvwrong":[
    {
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Girl/girl-angry.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Oops!! You answered incorrectly. Your money will be deducted!!</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
	},	

        
        {
                "templateId": 1,
				"templateType": "static",
				"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
				"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
				"style":"position:absolute;text-align: center; top:70%",
				"onClickPage":"choicePage"
        }],
    "q3-wrong":[
    {
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Angry-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
	
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Oops!! You answered incorrectly. Your money will be deducted!!</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
	},	
             

            {
                    "templateId": 1,
					"templateType": "static",
					"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
					"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
					"style":"position:absolute;text-align: center; top:70%",
					"onClickPage":"choicePage"
            }],
    "q3-correct":[
    {
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Happy-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
		{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Yayy!! You answered correctly. Your money is increased.</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
	},	
           
            {
                    "templateId": 1,
					"templateType": "static",
					"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
					"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
					"style":"position:absolute;text-align: center; top:70%",
					"onClickPage":"choicePage"
            }],
    
    //Question 4

    "q4": [{
        "templateId": 2,
        "templateType": "decision",
        "display_score":"true",
        "question": "<div style='font-size:1.5vw;background-color:#99ff66;border-radius: 3vw;padding:2vw;'>Looks like a Customer is back.he wants to return few items and purchase soem new.<br>He wants to return<br>1kg Rice - Rs.60<br>1 kg of Potato- Rs 34<br><br> <br> Can you tell how much money should you return?</div>", 
        "options": [{
                "optionName": "q2",
                "optionValue": "Rs.200",
                "id":"1",
                "amount":-150
            },
            {
                "optionName": "q2",
                "optionValue": "Rs.150",
                "id":"2",
                "amount":150
            },
            {
                "optionName": "q2",
                "optionValue": "Rs.100",
                "id":"3",
                "amount":-150
            }
        ],
        "optionPageMap": 
        {
            "1":"q4-vvwrong",
            "2": "q4-correct" ,
            "3": "q4-wrong"
        },
        "width": "col-lg-7 col-md-7 col-xs-7",
        "style": "align:center; position:absolute; top:4%; right:20%; color:black; background-color:rgba(8,8,8,1); box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 5vw; padding:2vw 2vw 1vw 2vw;"
    },
    {
        "templateId":6,
        "templateType":"timerTemp",
        "time":21,
        "divID":"countdowntimer",
        "style":"color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;font-size:2vw ;position:fixed; top:1vw; right:13vw;",
        "redirect":"choicePage"
    }],
    "q4-vvwrong":[
    	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Girl/girl-angry.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
		},
		{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Oops!! You answered incorrectly. Your money will be deducted!!</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
		},
        {
            "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
        }],
    "q4-wrong":[
    	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Angry-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
		},
		{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Oops!! You answered incorrectly. Your money will be deducted!!</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
		},	
        {
            "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
        }],

    "q4-correct":[
    	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Happy-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
		},
		{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Yayy!! You answered correctly. Your money is increased.</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
		},	 
        {
            "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
        }],
	
	"score":[{
		"textColor":"black",
		"background-color":"white",
		"coinColor":"#f7941e"
	}],

//Scenario 2 - Agricultue Sector

	"Scene2":[
	    {
			
			"templateId":15,
			"templateType":"score",
			"textColor":"red",
			"abc":"xyz"
		},
		{
			"templateId":1,
			"templateType":"static",
			"style":"align:center;",
			"display_score":true,
			"src":"<img width=\"97%\" height=\"85%\" controls style=\"position:absolute;top:9%; z-index:-1;\" src=\"Images/dummy.gif\"  alt=\"A kid come to shop and asked for a packet of chips. You fetched one packet of chips and gave to the kid. Later that day, kid's parent came to the shop and complained that their kid is now ill after eating staled chips.<br>As the news spread, food inspector visited the shop to enquire about the matter. He asked for shop documents from you. Now as you have messed up big because there was no proper check related to the expiry of the products. So it is a loss and <b>300</b> rupees will be deducted.\" >",
		},
		{
		    "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" align:center; style=\"position:relative;top:50%; left:46%;background-color:orange; color:white; border:0;\">Proceed to Quiz</button>",
			"style":  "padding:5px; position:absolute; top:94%; width:97%; align:center;",
			"onClickPage":"q1s2"
		}],

	"q1s2":[ //question 1 scenario 2
		{
			"templateId": 2,
			"answer":"0",
			"templateType": "decision",
			"display_score":true,
			"question": "<div style='font-size:1.8vw;background-color:#99ff66;border-radius: 3vw;padding:2vw;'>Although, we give you an opportunity to recover part of the loss by taking a small quiz. If you answer correctly, then your loss will be reduced.</div><br><span style=' padding-left:2vw;text-shadow: 2px 2px 5px red;color:white'><i>Note:  If you answer incorrectly then your losses will further increase.</span></i><br><br>",			
			"options": [{
					"optionName": "q1s2",
					"optionValue": "Show license of shop, registration of shop with local authority, permit from food department to keep perishable items.",
					"id":1,
					"amount":100

				},
				{
					"optionName": "q1s2",
					"optionValue": "Say to inspector that you don't have the documents and Bribe the inspector.",
					"id":2,
					"amount":0
				},
				{
					"optionName": "q1s2",
					"optionValue": "Say that documentation is in progress and just show approval from local authority.",
					"id":3,
					"amount":0
				},
				{
					"optionName":"q1s2",
					"optionValue":"None of the above",
					"id":4,
					"amount":0
				}
				],
			"optionPageMap": 
			{
				"1":"q1s2c",
				"2":"q1s2dialog" ,
				"3":"q1s2w",
				"4":"q1s2w"
			},
			"width": "col-lg-7 col-md-7 col-xs-7",
			"radio_style":"visibility:hidden",
			"style": "position:absolute; top:4%; right:20%; color:black; background-color:rgba(8,8,8,1); box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 5vw; padding:2vw 2vw 1vw 2vw;"
		},
		{
			"templateId":6,
			"templateType":"timerTemp",
			"time":21,
			"divID":"countdowntimer",
			"style":"color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;font-size:2vw ;position:fixed; top:1vw; right:13vw;",
			"redirect":"choicePage"
		}
	],

	"q1s2c":[
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Happy-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Yay, you answered correct. Your balance increases by 100 Rupees.<br>Let's learn more about documentation.</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"display_score":"true",
			"score_animation_req":"true"
	},	
	
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
	}
	],

	"q1s2dialog":[
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Happy-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Giving or taking bribe to/from government officer is punishable offence. Never do it.</div> ",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"completed":true,
			"display_score":"true",
			"score_animation_req":"true"
    },
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
	}
],

	"q1s2w":[
	{
		    "templateId": 1,
			"templateType": "static",
			"src": "<img style=\"max-width: 100%; \" src=\"images/Boy/Boy-Angry-1.gif\" >",
			"width": "col-lg-6 col-md-6 col-xs-6",
			"style": "padding:5px;position:absolute;top:10%"	
	},
	{
	        "templateId": 1,
			"templateType": "static",
			"src": "<div style='color: white;background-color:rgb(204, 0, 255);border-radius: 1vw;text-align:center;padding:.9vw;font-size:1.3vw;'>Alas! that is a wrong choice.</div> ",
			"width": "col-lg-4 col-md-4 col-xs-4",
			"style": "position:absolute; top:30%;background-color:rgb(61, 0, 153);border-radius: 2vw;padding:2vw;",
			"display_score":"true",
			"score_animation_req":"true"
	},	

	{
		   "templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" style=\"color:black;display: inline-block; padding:.7vw;background-color:#ff99ff;border:1px solid rgb(230, 0, 230)\">Next Question!</button>",
			"width": "col-lg-6 col-md-offset-5  col-md-4  col-xs-6",
			"style":"position:absolute;text-align: center; top:70%",
			"onClickPage":"choicePage"
	}],


			
	"customerCheating":[
		{
			"templateId": 1,
			"templateType": "static",
			"src": "<div style=\" text-align:center; color:white;\">Basic Screeen Maths</div>" ,
			"style": "padding:8px;border-radius:5px;position:absolute;top:0%;width:100%;left:0%;height:6%; background-color:black;",
		},
		{
			"templateId":1,
			"templateType":"static",
			"style":"align:center;",
			"src":"<img width=\"97%\"  height=\"85%\" controls style=\"position:absolute;top:6%; \" src=\"videos/store.gif\" alt=\"A Teen came to your shop. He places a big order of nultiple products.He said that he will pay you later. Since,you know hima bit, you allowed that.<p>You write that transaction in a book that you maintain for all pending payment.</p><p>Later the teen never came back.When you went to his home.It was locked out.</p>\" > </img>",
 
		},
		{
	    	"templateId": 1,
			"templateType": "static",
			"src": "<button type=\"button\" align:center; style=\"position:absolute;border-radius:2.5px;padding:6.5px;top:10%; left:46%;background-color:orange; color:white; border:0;\">Proceed to NextPage</button>",
			"style": "padding:5px; position:absolute; top:94%; width:97%; align:center;",
			"onClickPage":"customerCheatingResult"	
		}	],

		"customerCheatingResult":[
			{
				"templateId": 1,
				"templateType": "static",
				"src": "<div style=\" text-align:center; color:white;\">Basic Screeen Maths</div>" ,
				"style": "padding:8px;border-radius:2.5px;position:absolute;top:0%;width:100%;left:0%;height:6%; background-color:black;",
			},
			{
				
				"templateId":15,
				"templateType":"score",
				"textColor":"white",
		    },
			{
				"templateId":1,
				"templateType":"static",
				"style":"align:center;",
				"answer":"-100",
				"src":"<img width=\"97%\" height=\"85%\" controls autoplay style=\"position:absolute;top:6%; z-index:-1;\" src=\"videos/store.gif\"alt=\"Did You see,some people promise but they don't pay.<p>Lesson Learnt: Refrain from giving product when customer promises to pay later unless you know him very well.</p>\" > </video>",
			},
			{
		    	"templateId": 1,
				"templateType": "static",
				"src": "<button type=\"button\" align:center; style=\"position:absolute;top:10%;border-radius:2.5px;padding:6.5px; left:46%;background-color:orange; color:white; border:0;\">Proceed to NextPage</button>",
				"style": "padding:5px; position:absolute; top:94%; width:97%; align:center;",
				"amount":"-100",
				"onClickPage":"customerCheatingResult"	//write here the name of the next scenario
			}			
		]


}
