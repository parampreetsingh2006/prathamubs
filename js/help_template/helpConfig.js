ubsApp.helpConfig={
    "salesHelp":{
        "templates":[
            {
                "templateId":1,
                "templateType":"static",
                "id":"helpContent",
                "style":"position:absolute;top:47.5%;left:45%;background-repeat: no-repeat;color:white;",
                "src":"SALES HELP!!!"
            },
            {
                "templateId":2,
                "templateType":"static",
                "id":"convertToAdvantage",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp()\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
    ]
    },
    "quizHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContent",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;",
                "src":"<video width=\"80%\" height=\"80%\" controls><source src=\"videos/incomeTax.mp4\" type=\"video/mp4\"></video>"
            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup();\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
    ]
    },
    "luckHelp":{
        "templates":[
            {
                "templateId":4,
                "templateType":"static",
                "id":"helpImage",
                "style":"position:absolute;top:5%;left:45%;background-repeat: no-repeat;color:white;",
                "src":"<image src=\"../../images/luck_screen\"></image>"
            },
            {
                "templateId":5,
                "templateType":"static",
                "id":"helpContent",
                "style":"position:absolute;top:47.5%;left:5%;background-repeat: no-repeat;color:white;",
                "src":"{{LUCK HELP}}"
            },
            {
                "templateId":6,
                "templateType":"static",
                "id":"luckClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp()\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
    ]
    },
    "paymentHelp":{
        "templates":[
            {
                "templateId":7,
                "templateType":"static",
                "id":"helpContent",
                "style":"position:absolute;top:47.5%;left:45%;background-repeat: no-repeat;color:white;",
                "src":"Payment HELP!!!"
            },
            {
                "templateId":8,
                "templateType":"static",
                "id":"Close",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp()\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
    ]
    },
    "decisionHelp":{
        "templates":[
            {
                "templateId":2,
                "templateType":"static",
                "id":"helpImage",
                "style":"position:absolute;top:5%;left:45%;background-repeat: no-repeat;color:white;",
                "src":"<image src=\"../../images/decision_screen\"></image>"
            },
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContent",
                "style":"position:absolute;top:47.5%;left:5%;background-repeat: no-repeat;color:white;",
                "src":"{{DECISION HELP}}"
            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp()\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
    ]
    },
        "purchaseHelp":{
            "templates":[
                {
                    "templateId":10,
                    "templateType":"static",
                    "id":"helpImage",
                    "style":"position:absolute;top:5%;left:45%;background-repeat: no-repeat;color:white;",
                    "src":"<image src=\"../../images/buy_screen\"></image>"
                },

                {
                    "templateId":11,
                    "templateType":"static",
                    "id":"helpContent",
                    "style":"position:absolute;top:47.5%;left:5%;background-repeat: no-repeat;color:white;",
                    "src":"{{PURCHASE HELP}}"
                },
                {
                    "templateId":12,
                    "templateType":"static",
                    "id":"purchaseClose",
                    "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                    "src":"<button onclick=\"ubsApp.closeHelp()\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
                }
        ]
        },
}