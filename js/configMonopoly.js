monopoly.pages = {
"EnterLanguagePage":[
    
        {
            "templateId":1,
            "templateType":"static",
            "src":"<div id=\"languageDetails\"><input type=\"radio\" name=\"languageRadio\" value=\"english\" id=\"english\"><label style=\"color:white\" for\"english\">English</label></div>",    
            "style": "position:absolute;margin-left:5%;padding:10px;border-radius:5px; background-color:black; width:70%;top:30%;"
        },
        {
            "templateId":1,
            "templateType":"static",
            "src":"<div id=\"languageDetails\"><input type=\"radio\" name=\"languageRadio\" value=\"hindi\" id=\"hindi\"><label style=\"color:white\" for\"hindi\">Hindi || हिंदी</label></div>",    
            "style": "position:absolute; width:70%;padding:10px;border-radius:5px;top:50%;margin-left:5%; background-color:black;"
        },
        {
            "templateId":2,
            "templateType":"static",
            "src":"<button onclick=\"monopoly.chooseLanguage()\" style=\"color:white;background-color:orange;border:0;padding:5px;\">Choose Language</button>",
            "style": "position:absolute;padding:10px;border-radius:5px;top:80%;left:35%;margin-left:5%; "
        }
    ],
"InitialisePlayers":[{
        "templateId":1,
        "templateType":"static",
        "style": "padding:8px;text-align:center; color:white;border-radius:5px;position:absolute;top:0%;width:100%;left:0%;height:6%; background-color:black;",
        "id":"initPageTitle",
    },
    {
        "templateId":1,
        "templateType":"static",
        "src":"<input type=\"checkbox\" name=\"computer\" id=\"computer\" onclick=\"monopoly.initComputerDifficulty()\"><label for=\"computer\" id=\"computerRequiredTitle\"></label>",
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
        "src": "<div id=\"enterPlayers\">Enter Number of Players || खिलाड़ियों की संख्या दर्ज करें</div>" ,
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
        "src":"<button onclick=\"monopoly.storePlayerDetails()\" style=\"border-radius:5px;border:0;\" id=\"storePlayerDetailsButton\">Next Page|| अगला पृष्ठ </button>",
    },
    /*{
        "templateId":1,
        "templateType":"static",
        "src":"<div id=\"languageDetails\"><input type=\"radio\" name=\"languageRadio\" value=\"english\" id=\"english\"><label for\"english\">English</label>&nbsp&nbsp<input type=\"radio\" name=\"languageRadio\" value=\"hindi\" id=\"hindi\"><label for\"hindi\">Hindi</label></div>",
        "style": "position:absolute; left:44%;bottom:3%;"
    }*/
],

	"monopoly": [
        {
            "weekDeadLine":4,
        },
        
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"weekTitle",
        //     "style":"",
        //     "src":"WEEK: <span id=\"weekContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        // },
        {
            "templateId":1,
            "templateType":"static",
            "id":"weekTitle",
            "style":"",
            "src":"weekTitle: <span id=\"weekContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        },
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"weekContent",
        //     "style":"background-color:yellow;border:1px solid black; padding-left:1px;padding-right:1px; ",
        //     "src":"1"
        // },
        {
            "templateId":1,
            "templateType":"static",
            "id":"inventoryTitle",
            "style":"",
            "src":"inventoryTitle: <span id=\"inventoryContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        },
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"inventoryContent",
        //     "style":"background-color:yellow;border:1px solid black; padding:1px;",
        //     "src":"50%"
        // },
       
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"inventoryValueContent",
        //     "style":"background-color:yellow;border:1px solid black; padding:1px;",
        //     "src":"Rs. 250,000"
        // },
        {
            "templateId":1,
            "templateType":"static",
            "id":"reputationTitle",
            "style":"",
            "src":"reputationTitle: <span id=\"reputationContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        },
        {
            "templateId":1,
            "templateType":"static",
            "id":"inventoryValueTitle",
            "style":"",
            "src":"inventoryValueTitle: <span id=\"inventoryValueContent\" style=\"background-color:yellow;border:1px solid black; padding:1px;\">100</span>"
        },
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "id":"reputationContent",
        //     "style":"background-color:yellow;border:1px solid black; padding:1px;",
        //     "src":"10"
        // },
        {
            "templateId":1,
            "templateType":"static",
            "id":"cardWallet",
            "style":"position:absolute;top:47.5%;left:82%;background-repeat: no-repeat;",
            "src":"<button onclick=\"ubsApp.openCardWallet()\" style=\"padding:15px; color:red;font-size:1.1vw; font-weight:650; border:0; background:orange;border-radius:5px; background-size: 60%; background-repeat:no-repeat; background-position: center;background-image: url(images/wallet3.png);\">Card Wallet</button>"
        },
        {
            "templateId":"1",
            "templateType":"static",
            "style":"position:absolute;bottom:10%;left:83%; width:6.5%;",
            "src":"<button onclick=\"ubsApp.openPurchaseScenario()\" style=\"padding:5px; font-size:1.1vw; color:white;width:100%; border:0; background:orange; border-radius:5px; \">Purchase</button>"
        },
        {
            "templateId":"1",
            "templateType":"static",
            "style":"position:absolute;bottom:10%;left:90%;width:7%;",
            "src":"<button onclick=\"\" style=\"padding:5px;width:100%; color:white; border:0;font-size:1.1vw; background:red; border-radius:5px; \">End Game</button>"
        },
        

        //Previous was from here
        {
            "templateId":1,
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:5%;left:90%;width:10%;",
            "src":"<div style=\"color:white;display:none; text-align:center;padding:7px; cursor:pointer;\" onclick=\"monopoly.openLeaderBoard('Score')\" id=\"scoreSideBar\">Score</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1;height:100%; white-space: nowrap;top: 0%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "id" : "leaderBoardParent",
        },
        {
            "templateId":1, //display none is there
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:20%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px;display:none;  cursor:pointer;\" vertical-align: text-top; onclick=\"monopoly.openLeaderBoard('Inventory')\" id=\"inventorySideBar\">Inventory</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 20%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"inventoryBoard\" ></div>",
            "id" : "inventoryBoardParent"
        },
        {
            "templateId":1, //display none is there
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:35%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px;display:none; cursor:pointer;\" vertical-align: text-top; onclick=\"monopoly.openLeaderBoard('Document')\" id=\"documentSideBar\">Documents</div>",

        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 35%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"documentBoard\"  ></div>",
        },
        {
            "templateId":1, //display none is there
            "templateType":"static",
            "score_animation_req":"true",
            "style":"background-color:black;position:absolute;border-radius:2px;top:50%;left:90%;width:10%;",
            "src":"<div style=\"color:white; text-align:center;padding:7px; cursor:pointer; display:none;\" vertical-align: text-top; onclick=\"monopoly.openLeaderBoard('Merit')\" id=\"meritSideBar\">Merits(Dummy)</div>",
        },
        {
            "templateId":1,
            "templateType":"static",
            "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 50%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
            "src":"<div id=\"meritBoard\"  ></div>",
            "id" : "meritBoardParent"
        },
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "style":"width: 0px; position: fixed;z-index: 1; white-space: nowrap;top: 80%;right: 0;background-color: #111;border-radius:2px;overflow-x: hidden;transition: width 0.5s; padding-top: 20px;  ",
        //     "src":"<div id=\"calculator\"  ></div>",
        //     "id" : "calculatorParent"
        // },
        
        {
            "templateId": 3,
            "templateType": "board",
            "blocks":24,
            "top_row":[
            {
                "players":[],
                "id"   : "0",
                "color":"yellow",
                "title":"pratham_title_start",
                "start": true
            },
            {
                "id"   : "1",
                "color":"green",
                "title":"pratham_title_sales",
                "category" : "Sales"
            },
            {
                "id"   : "2",
                "color":"green",
                "title":"pratham_title_sales",
                "category" : "Sales"
            },
            {
                "id"   : "3",
                "color":"dark-green",
                "title":"pratham_title_surprise",
                "category" : "Surprise"
            },
            {
                "id"   : "4",
                "color":"red",
                "title":"pratham_title_purchase",
                "category" : "Purchase"

            },
            {
                "id"   : "5",
                "color":"green",
                "title":"pratham_title_sales",
                "category" : "Sales"
            },
            {
                "id"   : "6",
                "color":"pink",
                "title":"pratham_title_luck",
                "category" : "Luck"
            }
            ],

            "left_col":[
            {
                "id"   : "23",
                "color":"green",
                "title":"pratham_title_sales",
                "category" : "Sales"
            },
            {
                "id"   : "22",
                "color":"green",
                "title":"pratham_title_sales",
                "category" : "Sales"
            },
            {
                "id"   : "21",
                "color":"dark-green",
                "title":"pratham_title_surprise",
                "category" : "Surprise"
            },
            {
                "id"   : "20",
                "color":"red",
                "title":"pratham_title_purchase",
                "category" : "Purchase"
            },
            {
                "id"   : "19",
                "color":"green",
                "title":"pratham_title_sales",
                "category" : "Sales"
            }
            ],
            "right_col":[
                {
                    "id"   : "7",
                    "color":"green",
                    "title":"pratham_title_sales",
                    "category" : "Sales"
                },
                {
                    "id"   : "8",
                    "color":"green",
                    "title":"pratham_title_sales",
                    "category" : "Sales"
                },
                {
                    "id"   : "9",
                    "color":"dark-green",
                    "title":"pratham_title_surprise",
                    "category" : "Surprise"
                },
                {
                    "id"   : "10",
                    "color":"red",
                    "title":"pratham_title_purchase",
                    "category" : "Purchase"
                },
                {
                    "id"   : "11",
                    "color":"green",
                    "title":"pratham_title_sales",
                    "category" : "Sales"
                }
                ],
            "bottom_row":[
                    {
                        "id"   : "18",
                        "color":"pink",
                        "title":"pratham_title_luck",
                        "category" : "Luck"
                    },
                    {
                        "id"   : "17",
                        "color":"green",
                        "title":"pratham_title_sales",
                        "category" : "Sales"
                    },
                    {
                        "id"   : "16",
                        "color":"red",
                        "title":"pratham_title_purchase",
                        "category" : "Purchase"
                    },
                    {
                        "id"   : "15",
                        "color":"dark-green",
                        "title":"pratham_title_surprise",
                        "category" : "Surprise"
                    },
                    {
                        "id"   : "14",
                        "color":"green",
                        "title":"pratham_title_sales",
                        "category" : "Sales"
                    },
                    {
                        "id"   : "13",
                        "color":"green",
                        "title":"pratham_title_sales",
                        "category" : "Sales"
                    },
                    {
                        "id"   : "12",
                        "color":"yellow",
                        "title":"pratham_title_decision",
                        "category" : "Decision Making"
                    }
                    ],
                    
        },
        // {
        //     "templateId":1,
        //     "templateType":"static",
        //     "style":"position:absolute;top:65%;left:33%;",
        //     "id":"currentChanceDetails",
        //     "src":"<span id\"playerNameTitle\"> Player Name: <span id='player' style='padding: 1vw'></span></span>&nbsp;<span id=\"diceValueTitle\">Dice Value: <span id='diceval' style='padding: 1vw'></span></span>"
        // },
        {
            "templateId":4,
            "templateType":"rollingDice",
        },
        {
            "templateId":12,
            "templateType":"centerScoreBoard",
        },
        
            
    ]
}