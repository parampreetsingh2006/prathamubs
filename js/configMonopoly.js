monopoly.pages = {
"InitialisePlayers":[{
        "templateId":1,
        "templateType":"static",
        "src": "<div style=\" text-align:center; color:white;\">Welcome to the Game</div>" ,
        "style": "padding:8px;border-radius:5px;position:absolute;top:0%;width:100%;left:0%;height:6%; background-color:black;",
    },
    {
        "templateId":1,
        "templateType":"static",
        "src":"<input type=\"checkbox\" name=\"computer\" id=\"computer\" onclick=\"monopoly.initComputerDifficulty()\">Computer Required?",
        "style": "position:absolute; right:10%;top:10%;color:black;",
    },
    {
        "templateId":1,
        "templateType":"static",
        "src":"<div id=\"computerDetails\"></div>",
        "style": "position:absolute; right:10%;top:20%;"
    },
    {
        "templateId":1,
        "templateType":"static",
        "src": "<div >Enter Number of Players</div>" ,
        "style": "position:absolute; left:29%;top:10%;color:black;",
    },
    {
        "templateId":1,
        "templateType":"static",
        "style":"position:absolute;left:45%;top:10%;",
        "src":"<input type=\"number\"  id=\"num_players\"   oninput=\"monopoly.initPlayers()\"></input><br><br>",
    },
    {
        "templateId":1,
        "templateType":"static",
        "style":" top:15%;left:40%;position:absolute;",
        "src":"<div id=\"take_input\"></div>",
    },
    {
        "templateId":1,
        "templateType":"static",
        "style":" top:85%;left:45%;position:absolute;",
        "src":"<button onclick=\"monopoly.storePlayerDetails()\" style=\"border-radius:5px;border:0;\">Next Page</button>",
    },
],


	"monopoly": [
        {
            "templateId":1,
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:5%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px; cursor:pointer;\" onclick=\"monopoly.openScoreBoard()\" id=\"scoreTitle\">Score</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 5%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"scoreBoard\" ></div>",
            "id" : "scoreBoardParent"
        },
        {
            "templateId":1,
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:20%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px; cursor:pointer;\" vertical-align: text-top; onclick=\"monopoly.openInventory()\" id=\"inventoryTitle\">Inventory</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 20%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"inventoryBoard\" ></div>",
            "id" : "inventoryBoardParent"
        },
        {
            "templateId":1,
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:35%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px; cursor:pointer;\" vertical-align: text-top; onclick=\"monopoly.openDocuments()\" id=\"documentTitle\">Documents</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 35%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"documentBoard\"  ></div>",
            "id" : "documentBoardParent"
        },
        {
            "templateId":1,
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:50%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px; cursor:pointer;\" vertical-align: text-top; onclick=\"monopoly.openMerit()\" id=\"documentTitle\">Merits(Dummy)</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 50%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"meritBoard\"  ></div>",
            "id" : "meritBoardParent"
        },

        {
            "templateId": 3,
            "templateType": "board",
            "blocks":24,
            "top_row":[
            {
                "players":[],
            	"id"   : "0",
                "color":"yellow",
                "title":"Start -->",
                "start": true
            },
            {
            	"id"   : "1",
                "color":"green",
                "title":"Sales",
                "category" : "Sales"
            },
            {
            	"id"   : "2",
                "color":"green",
                "title":"Sales",
                "category" : "Sales"
            },
            {
            	"id"   : "3",
                "color":"dark-green",
                "title":"Surprise",
                "category" : "Surprise"
            },
            {
            	"id"   : "4",
                "color":"red",
                "title":"Purchase",
                "category" : "Purchase"

            },
            {
            	"id"   : "5",
                "color":"green",
                "title":"Sales",
                "category" : "Sales"
            },
            {
            	"id"   : "6",
                "color":"pink",
                "title":"Luck",
                "category" : "Luck"
            }
            ],

            "left_col":[
            {
            	"id"   : "23",
                "color":"green",
                "title":"Sales",
                "category" : "Sales"
            },
            {
            	"id"   : "22",
                "color":"green",
                "title":"Sales",
                "category" : "Sales"
            },
            {
            	"id"   : "21",
                "color":"dark-green",
                "title":"Surprise",
                "category" : "Surprise"
            },
            {
            	"id"   : "20",
                "color":"red",
                "title":"Purchase",
                "category" : "Purchase"
            },
            {
            	"id"   : "19",
                "color":"green",
                "title":"Sales",
                "category" : "Sales"
            }
            ],
            "right_col":[
                {
                	"id"   : "7",
                    "color":"green",
                    "title":"Sales",
                    "category" : "Sales"
                },
                {
                	"id"   : "8",
                    "color":"green",
                    "title":"Sales",
                    "category" : "Sales"
                },
                {
                	"id"   : "9",
                    "color":"dark-green",
                    "title":"Surprise",
                    "category" : "Surprise"
                },
                {
                	"id"   : "10",
                    "color":"red",
                    "title":"Purchase",
                    "category" : "Purchase"
                },
                {
                	"id"   : "11",
                    "color":"green",
                    "title":"Sales",
                    "category" : "Sales"
                }
                ],
            "bottom_row":[
                    {
                    	"id"   : "18",
                        "color":"pink",
                        "title":"Luck",
                        "category" : "Luck"
                    },
                    {
                    	"id"   : "17",
                        "color":"green",
                        "title":"Sales",
                        "category" : "Sales"
                    },
                    {
                    	"id"   : "16",
                        "color":"red",
                        "title":"Purchase",
                        "category" : "Purchase"
                    },
                    {
                    	"id"   : "15",
                        "color":"dark-green",
                        "title":"Surprise",
                        "category" : "Surprise"
                    },
                    {
                    	"id"   : "14",
                        "color":"green",
                        "title":"Sales",
                        "category" : "Sales"
                    },
                    {
                    	"id"   : "13",
                        "color":"green",
                        "title":"Sales",
                        "category" : "Sales"
                    },
                    {
                    	"id"   : "12",
                        "color":"yellow",
                        "title":"Decision Making",
                        "category" : "Decision Making"
                    }
                    ],
                    
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"position:absolute;top:55%;left:40%;",
            "src":"<span> Player Name: <span id='player' style='padding: 1vw'></span></span>&nbsp;<span >Dice Value: <span id='diceval' style='padding: 1vw'></span></span>"
        },
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
            
    ]
}