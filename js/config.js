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
			"imgSrc": "<img style=\"max-width: 100%;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyToPbYny02i9LY6pJ7muG13oQFoUarWoWnG6hkxKGNGDuspQR\" >",
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
			"imgSrc": "<img style=\"max-width: 100%;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIl1xsE1HRQM67ASuV1QgxTeVrJfl4SVhK5R-va_eFYg1dU4cs\" >",
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
}