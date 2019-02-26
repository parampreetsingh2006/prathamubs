ubsApp.helpConfig={
    "salesHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",

                //"style":"position:absolute;top:47.5%;left:45%;background-repeat: no-repeat;color:white;",
                //"src":"{{SALES HELP}}"

                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{salesVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{salesVideoOnline}} type=\"video/mp4\"></video> <div>"


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
     "salesAnswerHelp":{
            "templates":[
                {
                    "templateId":4,
                    "templateType":"static",
                    "id":"salesHelpAnswer",
                    "style":"position:absolute;background-repeat: no-repeat; overflow:auto; height:{{screenHeight}}px",
                    "src":"{{salesAnswerHelp}}"
                },
                  {
                    "templateId":4,
                    "templateType":"static",
                    "id":"salesHelpAnswerClose",
                    "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                    "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup();\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
                  }
        ]
        },
    "incomeTaxHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video  id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{incomeTaxVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video  id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{incomeTaxVideoOnline}} type=\"video/mp4\"></video> </div>",

            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "propertyTaxHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video  id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{propertyTaxVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video  id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{propertyTaxVideoOnline}} type=\"video/mp4\"></video> <div>"

            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "insuranceHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{insuranceVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{insuranceVideoOnline}} type=\"video/mp4\"></video> <div>"

            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "bankingHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{bankingVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{bankingVideoOnline}} type=\"video/mp4\"></video> </div>"
            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "atmHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{atmVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{atmVideoOnline}} type=\"video/mp4\"></video> </div>",
            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "depositHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{depositsVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{depositsVideoOnline}} type=\"video/mp4\"></video> <div>"

            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "kycPanAadharHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{kycPanAadharVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{kycPanAadharVideoOnline}} type=\"video/mp4\"></video> <div>"

            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "gstHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{gstVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{gstVideoOnline}} type=\"video/mp4\"></video> <div>"

            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "loansHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{loansVideo}} type=\"video/mp4\"></video> </div>",              
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{loansVideoOnline}} type=\"video/mp4\"></video> </div>"
            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "mobileBankingHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{mobileBankingVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{mobileBankingVideoOnline}} type=\"video/mp4\"></video> </div>"
            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "investmentHelp":{
        "templates":[
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "generalHelp":{
        "templates":[
            {
                    "templateId":4,
                    "templateType":"static",
                    "id":"salesHelpAnswer",
                    "style":"position:absolute;background-repeat: no-repeat;  overflow:auto; height:{{screenHeight}}px",
                    "src":"{{quizGeneralHelp}}"
            },
            {
                "templateId":4,
                "templateType":"static",
                "id":"quizClose",
                "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup("+true+");\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{cancelTitle}}</button>"
            }
        ]
    },
    "luckHelp":{
        "templates":[
            
            {
                "templateId":5,
                "templateType":"static",
                "id":"helpContent",
                "style":"position:absolute;background-repeat: no-repeat;color:white;  overflow:auto; height:{{screenHeight}}px",
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
                "id":"helpContentVideo",
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
                "templateId":3,
                "templateType":"static",
                "id":"decisionHelpId",
                "style":"position:absolute;background-repeat: no-repeat;  overflow:auto; height:{{screenHeight}}px",
                "src":"{{decisionHelp}}"
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
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{purchaseVideo}} type=\"video/mp4\"></video> </div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{purchaseVideoOnline}} type=\"video/mp4\"></video> </div>",

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
    "instructionHelp":{
        "templates":[
            {
                "templateId":3,
                "templateType":"static",
                "id":"helpContentVideo",
                "style":"position:absolute;top:2%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{instructionVideo}} type=\"video/mp4\"></video> <div>",
                "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls><source src={{instructionVideoOnline}} type=\"video/mp4\"></video> <div>"

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
     "introHelp":{
            "templates":[
                {

                    "templateId":3,
                    "templateType":"static",
                    "id":"helpContentVideo",
                    "style":"position:absolute;top:1%;left:2%;background-repeat: no-repeat;color:white;height:100vh;",
                    "src":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls autoplay> <source src={{introVideo}} type=\"video/mp4\"></video> </div>",
                    "srcOnline":"<div style=\"width:95%;height:95%\"><video id=\"helpVideo\" width=\"100%\" height=\"100%\" controls autoplay> <source src={{introVideoOnline}} type=\"video/mp4\"></video> <div>"
                },
                {
                    "templateId":4,
                    "templateType":"static",
                    "id":"quizClose",
                    "style":"position:absolute;bottom:5%;left:90%;background-repeat: no-repeat;",
                    "src":"<button onclick=\"ubsApp.closeHelp();ubsApp.closePopup(); ubsApp.startBackgroundMusic(); monopoly.renderPageforBoard(monopoly.pages.WelcomePage);\" style=\"padding:7px; color:white; font-weight:650; border:0; background:orangered;border-radius:5px; \">{{continueTitle}}</button>"
                }
            ]
        },
}