// using http://pojo.sodhanalibrary.com/string.html

ubsApp.staticTemplate ='<div class="{{width}}" id="{{id}}" style="{{style}}" {{#if onClickPage}} onclick="ubsApp.checkPageorBoard(\' {{onClickPage.nextPage}} \',\'{{amount}}\', \'{{onClickPage.hideScenarios}}\')" {{/if}}>'+

'		{{src}}'+
' </div>'+
'<div id={{audioId}}></div>';
	
	

ubsApp.decisionTemplate = '	 <div class="{{width}}" style="{{style}}">'+
'			'+
'		'+
'		<div style="{{questionStyle}}">{{question}}</div><br>'+
'		<div>'+
'				'+
'			{{#each options}}'+
'			 <div  style="color: black;background-color:rgb(153, 230, 255);border-radius: 2vw;padding:.5vw;font-size:0.9vw;"> <input type="radio" style="{{radio_style}}" name="{{optionName}}" value="{{optionValue}}" id={{id}}> {{optionValue}}</div><br>'+
'<span style="display:none" id="{{id}}Amount">{{amount}}</span>' +
'<span style="display:none" id="{{id}}Inventory">{{inventoryScoreToBeChanged}}</span>'+
'			{{/each}}    '+
'				'+
'		</div>'+
'		<div style="text-align:center">'+
'			<button id = "submitQuestion" style=\'background-color: #b3e6ff;color:black;display:inline-block;text-decoration: none;border:1px solid blue;width:8vw;\' onclick="ubsApp.renderDecisonTemplate()" >Submit</button>'+
'		</div>'+
'		  '+
'		'+
'			'+
'		</div>' +
'<div id={{audioId}}></div>';

ubsApp.wheelOfFortuneTemplate =   '<div style="{{style}}"  class="{{width}}" >'+
' <div style="width:100%; text-align: center;">'+
'<img src="images/caret-down.svg" style="height: 30px;" ></img>'+
'<canvas id="canvas"  width="{{wheelWidth}}" height="{{wheelWidth}}" style="padding-bottom:5px; padding-left: 0;padding-right: 0;margin-left: auto;margin-right: auto;display: block;">'+
'<p style="{color: white}" align="center">Sorry, your browser doesn\'t support canvas. Please try another.</p>'+
' </canvas>'+
' </div>'+
' <div style="width:100%; text-align: center;">'+
'	<button onclick="ubsWheelOfFortune.startSpin()"  style="background-color:#ff6600; padding:5px; border-radius:5px; border:0;" >Spin </button>'+
' </div>'+
' </div>'+
'<div id={{audioId}}></div>'+
' '/*+
' <div id= "wheelOfFortuneModal" style="display:none; padding: 30px; background-color: rgba(255, 255, 255, 0.8);position:fixed; z-index:100; width:100%; height:100%; ">'+
' <div style="    display: table-cell; vertical-align: middle;">'+
' <div style="width: 300px; height: 60px; background-color: wheat;padding: 5px; margin: auto; text-align: center; overflow-x: auto;overflow-y: auto;">'+
'   Yay !!! Lets proceed to <span id="wheelOfFortuneIndicatedSegment"> </span> section.'+
'   <div style="border:1px solid;cursor: pointer; width: fit-content;padding: 3px;     margin: auto;" onClick="ubsWheelOfFortune.resetWheel()"> Next </div>'+
' </div>'+
' </div>'+
' </div>'*/;
' ';

/*ubsApp.rollingDiceTemplate = '<body class = "diceBody"><div style="position:absolute; top:35%; left:45%;">'+
'  <div class="rollscene" id="rollscene" style= "height:{{diceSceneWidth}}px; display:table; margin:auto;"}>'+
'    <div onclick="mainroll()" class="cube">'+
'      <div id="class_1" class="cube_face_1">O</div>'+
'        <div id="class_2" class="cube_face_2">O O</div>'+
'      <div id="class_3" class="cube_face_3">  O<br>  O<br>O</div>'+
'      <div id="class_4" class="cube_face_4">O  O<br><br>O  O</div>'+
'      <div id="class_5" class="cube_face_5">O  O<br>  O<br>O  O</div>'+
'      <div id="class_6" class="cube_face_6">O  O<br>O  O<br>O  O</div>'+
'    </div>'+
'    <div class="rollButton">'+
     '<button onclick="mainroll()" id=\"rollItButton\">Roll it </button>'+
'    </div>'+
'  </div>'+
'</div></body>';*/

ubsApp.rollingDiceTemplate = '<link rel="stylesheet" href="roll_dice.css">'+
'  <button id=\'pointRollButton\' class=\'roll-button\'>Roll it</button>'+
'  <div class="dice-board">'+
''+
''+
'    <div class="container-dice">'+
'      <div id=\'dice1\' class="dice dice-one">'+
'        <div id="dice-one-side-one" class=\'side one\'>'+
'          <div class="divot one-1"></div>'+
'        </div>'+
'        <div id="dice-one-side-two" class=\'side two\'>'+
'          <div class="divot two-1"></div>'+
'          <div class="divot two-2"></div>'+
'        </div>'+
'        <div id="dice-one-side-three" class=\'side three\'>'+
'          <div class="divot three-1"></div>'+
'          <div class="divot three-2"></div>'+
'          <div class="divot three-3"></div>'+
'        </div>'+
'        <div id="dice-one-side-four" class=\'side four\'>'+
'          <div class="divot four-1"></div>'+
'          <div class="divot four-2"></div>'+
'          <div class="divot four-3"></div>'+
'          <div class="divot four-4"></div>'+
'        </div>'+
'        <div id="dice-one-side-five" class=\'side five\'>'+
'          <div class="divot five-1"></div>'+
'          <div class="divot five-2"></div>'+
'          <div class="divot five-3"></div>'+
'          <div class="divot five-4"></div>'+
'          <div class="divot five-5"></div>'+
'        </div>'+
'        <div id="dice-one-side-six" class=\'side six\'>'+
'          <div class="divot six-1"></div>'+
'          <div class="divot six-2"></div>'+
'          <div class="divot six-3"></div>'+
'          <div class="divot six-4"></div>'+
'          <div class="divot six-5"></div>'+
'          <div class="divot six-6"></div>'+
'        </div>'+
'      </div>'+
''+
''+
'    </div> '+
''+
''+
'  </div>'+
'    <script type="text/javascript" src="roll_dice.js"></script>';
    




ubsApp.scratchCard ='<canvas id="scratch_card_canvas"'+
                    '	height="{{height}}px"'+
                    '	width="{{width}}px"'+
                    '	style="{{style}}" />';

ubsApp.choiceTemplate =  '<div id = "choiceTemplate" style="height:{{containerHeight}}">'+ '{{#each choices}}'+
''+
'		'+
'				'+
'				<div class="{{width}}" style="{{style}}; height: {{choiceHeight}}; {{#if display}} ;cursor:pointer;{{/if}}" {{#if onClickPage}} {{#if display}} onclick="ubsApp.updateChoices(\'{{choiceID}}\', \'{{onClickPage}}\')" {{/if}}{{/if}}>'+
'					{{#if display}} '+
''+
'					{{notSelectedSrc}} '+
'                   {{else}}'+
'					   {{selectedSrc}}'+
'					{{/if}}'+
'	            </div>'+
''+
'			'+
''+
'			{{/each}}' + '</div>'+
' <div id={{audioId}}></div>';
    
ubsApp.scoreTemplate= //'<style>'+ 
 
// ' .coin{display:block ; width: 35px; height: 35px; -ms-transform-style:preserve-3d;-webkit-transform-style:preserve-3d; transform-style:preserve-3d;  animation: coin 2s linear infinite; }'+

// ' .coin .front{ width: 100%; height: 100%; border-radius: 50%; position: absolute; top: 0; left: 0; z-index: -1; }'+

// ' .coin .back{ width: 100%; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} border-radius: 50%; transform: rotateY(180deg)translateZ(10px); -webkit-transform:rotateY(180deg)translateZ(10px); -ms-transform:rotateY(180deg)translateZ(10px); position: absolute; top: 0; left: 0; z-index: 1; }'+

// ' .coin .front_b{ width: 100%; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} border-radius: 50%; transform: translateZ(-1px); -webkit-transform:translateZ(-1px); position: absolute; top:0; left: 0; z-index: 2;}'+

// ' .coin:before{ content: \"\"; margin-left: -5px; width: 10px; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} position: absolute; top: 0; left: 50%; z-index:1; -webkit-transform:rotateY(-90deg); -webkit-transform-origin:100% 50%; transform:  rotateY(-90deg); transform-origin: 100% 50%;}'+

// ' .coin .front_b:before{ content: \"\"; width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: 3; }'+ 


// ' .coin .back:before{content: \"\";width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: -3;}'+



// ' .print_txt{ display:block;padding: 10px ; font-weight: 500;font-size: 18px;width: 7%;} '+


// ' @keyframes'+ 
// ' coin{'+ 
// 	'0%{}'+ 
// 	'100%{-webkit-transform: rotateY(360deg);}}'+ 


// ' </style>'+


'<div style=\"position: absolute; top: 0%; left: 90%; {{#if textColor}}color:{{textColor}};{{/if}}\"\">'+		
	'<div class=\"print_txt\" id=\"headId\" align=\"center\" > </div>'+

'</div>'+

'<div style=\"position: absolute; top: 0.5%; left: 95%; \"> '+
	
	'<div class=\"coin\" id=\"coin\" style=\"float:right; {{#if backgroundColor}}background-color:{{backgroundColor}};\">'+ 
		'<div class=\"front\"></div>'+
		'<div class=\"front_b\"></div>'+
		'<div class=\"back\"></div>'+
	'</div>'+
	
'</div>'


ubsApp.popupTemplate = '<div id="{{id}}"  style=" padding: 30px; background-color: rgba(255, 255, 255, 0.8);position:fixed; z-index:100; width:100%; height:100%;">'+
' 	<div style="display: table-cell; vertical-align: middle;">'+
' 		'+
' 		<div style="{{msg_style}};background-color:#0099ff;">'+
'   			{{message}}'+
'   			<div style="{{button_style}}" onClick="{{onClick}}"> Next </div>'+
' 		</div>'+
' 		'+
' 	</div>'+
' </div>';

ubsApp.modalTemplate = 	'<div class="modal animated zoomIn" id="scenarios" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
'  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">'+
'    <div class="modal-content">'+
'      <div class="modal-body">'+
'      </div>  '+
'    </div>'+
'  </div>'+
'</div>';
    



ubsApp.timerTemplate = '<div style="color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;font-size:2vw ;position:absolute; top:5%; right:6%;" class="timer"> Timer: </div>'+'<div class="timer" style="{{style}}" id="{{divID}}" >'+

''+
'</div>';


ubsApp.audioTemplate = '<div >'+
'	<audio id = "soundtrack">'+
'		<source src={{audioSrc}} type="audio/mp3">'+
'	</audio>'+
'</div>';

ubsApp.boardTemplate='<div class="responsive">'+
    '<div class="mainSquare">'+
        '<div class="row top">'+
            '{{#each top_row}}'+
                '<div class="square1">'+
                    '<div class="header header-top {{color}}"></div>'+
                    '<div class="firstLine firstLine-top rotation2" id={{id}}>'+'{{title}}'+
                        '{{#if start}}'+
                            '{{#each player}}'+
                              '<div id="{{playerId}}"><span class="dot {{pc}}"></span></div>'+
                              '{{/each}}'+
                            '{{/if}}'+
                    '</div>'+
                '</div>'+
            '{{/each}}'+
        '</div>'+
        
        '<div class="row center">'+
            '<div class="square2">'+ 
                '{{#each left_col}}'+
                    '<div class="squareSide">'+
                        '<div class="headerSide header-left {{color}}"></div>'+
                        '<div class="firstLine firstLine-left rotation1">'+'{{title}}'+'</div>'+
                    '</div>'+
                '{{/each}}'+
            '</div>'+    
            '<div class="square9"></div>'+
            
            '<div class="square2">'+
                '{{#each right_col}}'+
                    '<div class="squareSide">'+
                        '<div class="headerSide header-left {{color}}"></div>'+
                        '<div class="firstLine firstLine-right rotation3">'+'{{title}}'+'</div>'+
                    '</div>'+
                '{{/each}}'+
            '</div>'+
        '</div>'+
        '<div class="row top">'+
            '{{#each bottom_row}}'+
                '<div class="square1">'+
                    '<div class="header header-top {{color}}"></div>'+
                    '<div class="firstLine firstLine-top rotation2">'+'{{title}}'+'</div>'+
                '</div>'+
            '{{/each}}'+
        '</div>'+
    '</div>'+
'</div>';

ubsApp.leaderBoardTemplate=
    '<div id=\"leaderBoardTitle\" style=\"color:white;\" >'+
        '{{title}}'+
    '</div>'+
    '<hr style=\"color:white;\"><br>'+
    '<div id=\"leaderBoard\" >'+
        '<button onclick=\"monopoly.closeLeaderBoard()\" style=\"align:center;background-color:black;border:0;color:white;\">Close</button><br>'+
        '{{#each array}}'+
        '<div style=\"margin-top:15%;border:2px solid;display: block; white-space: nowrap; width:100%;padding:7px;display:inline-block; color:{{color}};\">'+
            '<span style=\"color:white;white-space: nowrap; transition: width 2s;margin-top:2px;\">{{name}}:</span>'+
            '<span id=\"score\" style=\"white-space: nowrap;margin-left:1%;margin-left:5%;color:white;\">{{score}}{{inventory}}{{document}}{{merit}}'+
            '{{#if score}}'+
                '<img src=\"images/coin.png\" width=\"25\" height=\"25\" >'+
            '{{/if}}'+
            '</span>'+
            '</div><br>'+
        '{{/each}}'+
        
    '</div><br>';

    ubsApp.salesTemplate=
    '<div class="row" style="height:100%;width:100%">'+
'    <div class="col-md-2 col-sm-2 col-xs-2 customer">'+
'       <div class = "heading" >'+
'           Customer'+
'       </div>'+
'       <br>'+
'       <div id="profile" >'+
'           <img src="{{profilePicture}}.png" class="photo" >'+
'       </div>'+
'           <br>'+
'       <div id="order">'+
'           <center><b>Order</b></center>'+
'           <div id="orderList">'+
'               <table class="table table-sm">'+
'                   <tbody>'+
'                       {{#each order}}'+
'                         <tr>'+
'                           <td>{{item}}</td>'+
'                           <td>{{amount}}</td>'+
'                         </tr>'+
'                       {{/each}}'+
'                   </tbody>'+
'               </table>'+
'           </div>'+
'       </div>'+
'    </div>'+
'    <div class="col-md-6 col-sm-6 col-xs-6 receipt-gen">'+
'       <div class = "heading">'+
'           Receipt Generation'+
'       </div>'+
'       <br>'+
'       <div class="receipt">'+
'           <div id="title">Super Market Receipt</div>'+
'       '+
'           <div id="bill">'+
'               <div class="table-responsive">          '+
'                 <table class="table table-bordered">'+
'                   <thead>'+
'                     <tr>'+
'                       <th>#</th>'+
'                       <th>Items</th>'+
'                       <th>Quantity</th>'+
'                       <th>Rate</th>'+
'                       <th>Amount</th>'+
'                     </tr>'+
'                   </thead>'+
'                   <tbody>'+
'                       {{#each order}}'+
'                     <tr class = "row{{no}} {{#if exclude}}strikeout{{/if}}" data-toggle="tooltip" data-placement="bottom" {{#if exclude}}title="This item is not available in your Inventory"{{/if}} >'+
'                       <td>{{no}}</td>'+
'                       <td>{{item}}</td>'+
'                       <td id="itemPrice{{no}}">{{amount}}</td>'+
'                       <td>{{rate}}</td>'+
'                       <td ><input id = "input{{no}}" type="number" name="amt" class="amount" oninput="ubsApp.calculateBill()" {{#if exclude}}disabled{{/if}} {{#if exclude}}value="0"{{/if}}></td>  '+
'                     </tr>'+
'                       {{/each}}'+
'                     <tr>'+
'                       <td></td>'+
'                       <td></td>'+
'                       <td></td>'+
'                       <td><b>Total</b></td>'+
'                       <td><input type="number"  id="receiptTotal" class="amount" ></td>    '+
'                     </tr>'+
'                   </tbody>'+
'                 </table>'+
'               </div>'+
'           </div>'+
'       </div>'+
'    </div>'+
'   <div class="col-md-4 col-sm-4 col-xs-4 tools">'+
'       <div class = "heading">'+
'           Tools'+
'       </div>'+
// '       <div id="rateCard">'+
// '           <center><b>Rate Card</b></center>'+
// '           <div id="rateList">'+
// '               <table class="table table-sm">'+
// '                   <thead>'+
// '                     <tr>'+
// '                       <th>Items</th>'+
// '                       <th>Rate</th>'+
// '                     </tr>'+
// '                 </thead>'+
// '                   <tbody>'+
// '                     {{#each itemRate}}'+
// '                     <tr>'+
// '                       <td>{{item}}</td>'+
// '                       <td>{{rate}}</td>'+
// '                     </tr>'+
// '                     {{/each}}'+
// '                   </tbody>'+
// '                 </table>'+
// '           </div>'+
// '       </div>'+
// '       <div id="inventory">'+
// '           <center><b>Inventory</b></center>'+
// '           <div id="inventoryList">'+
// '               <table class="table table-sm">'+
// '                   <thead>'+
// '                     <tr>'+
// '                       <th>Items</th>'+
// '                       <th>Amount</th>'+
// '                     </tr>'+
// '                 </thead>'+
// '                   <tbody>'+
// '                       {{#each inventory}}'+
// '                     <tr>'+
// '                       <td>{{item}}</td>'+
// '                       <td>{{amount}}</td>'+
// '                     </tr>'+
// '                     {{/each}}'+
// '                   </tbody>'+
// '                 </table>'+
// ''+
// '           </div>'+
// '       </div>'+
'           '+
'       <div id="calculator">'+
'           <input type="text" readonly size="10" maxlength="7" id="numberInput">'+
'           <input id="calcButton" class="button gray" type="button" value="7" onclick="addToDisplay(7)">'+
'           <input id="calcButton" class="button gray" type="button" value="8" onclick="addToDisplay(8)">'+
'           <input id="calcButton" class="button gray" type="button" value="9" onclick="addToDisplay(9)">'+
'           <input id="calcButton" class="button pink" type="button" value="/" onclick="addToDisplay(\'/\')">'+
'           <input id="calcButton" class="button gray" type="button" value="4" onclick="addToDisplay(4)">'+
'           <input id="calcButton" class="button gray" type="button" value="5" onclick="addToDisplay(5)">'+
'           <input id="calcButton" class="button gray" type="button" value="6" onclick="addToDisplay(6)">'+
'           <input id="calcButton" class="button pink" type="button" value="*" onclick="addToDisplay(\'*\')">'+
'           <input id="calcButton" class="button gray" type="button" value="1" onclick="addToDisplay(1)">'+
'           <input id="calcButton" class="button gray" type="button" value="2" onclick="addToDisplay(2)">'+
'           <input id="calcButton" class="button gray" type="button" value="3" onclick="addToDisplay(3)">'+
'           <input id="calcButton" class="button pink" type="button" value="+" onclick="addToDisplay(\'+\')">'+
'           <input id="calcButton" class="button orange" type="button" value="C" onclick="addToDisplay(\'C\')">'+
'           <input id="calcButton" class="button gray" type="button" value="0" onclick="addToDisplay(0)">'+
'           <input id="calcButton" class="button orange" type="button" value="=" onclick="addToDisplay(\'=\')">'+
'           <input id="calcButton" class="button pink" type="button" value="-" onclick="addToDisplay(\'-\')">'+
'       </div>'+
'       <span id = "minutes">00'+
'           '+
'       </span>'+
'       <span id = "colon">'+
'           :'+
'       </span>'+
'       <span id = "seconds">'+
'           '+
'       </span>'+
'       <img class="butt" id="help" src="images/help.png" />'+
'       <img class="butt" id="done" src="images/done.png" {{#if onClickPage}} onclick="ubsApp.reduceInventory(\' {{onClickPage.nextPage}} \',\'{{amount}}\', \'{{onClickPage.hideScenarios}}\',\'{{tempTotal}}\',\'{{time}}\')" {{/if}} />    '+
'   </div>'+
'  </div>';

ubsApp.quizTemplate = '<div id="quiz">'+
'   <div id="quizTitle">'+
'       <span id="quizEmoji"></span>    '+
'       <span id="quizHeading">Quiz</span>'+
'       <span id="score"> SCORE: <span id="correctAnswers"></span>/5 </span>'+
'   </div>'+
'   <div id="questionHeading">{{questionHeading}}</div>'+
'   <div id="question_answer">'+
'       <span id="quizQuestion">{{question}}</span>'+
'       {{#if quizResult}}<br><b><span id="quizResult"></span></b>{{/if}}'+
'       {{#if options}}'+
'       <span id ="quizQuestionNo">Question <span id="quizQuestionNumber"></span></span>'+
'       <div id="quizOptions">'+
'           {{#each options}}'+
'           <div class="quizOptionsStyle"><input type="radio" style="{{radio_style}}" name="{{optionName}}" value="{{optionValue}}" id="{{id}}">{{optionValue}}</div><br>'+
'           {{/each}}'+
'       </div>'+
'       <div id="quizOk"><input type="submit" class=\'quizButtons\' name="{{optionName}}" onclick="ubsApp.nextQuizQuestion(\'{{onClickPage.nextPage}}\',\'{{answer}}\',\'{{optionName}}\')" value="OK"></div>'+
'       {{/if}}'+
'   </div>'+
'   <button id="quizDone" class=\'quizButtons\' onclick="ubsApp.doneQuiz()">Done</button>'+
'   <button id="quizCancel" class=\'quizButtons\' onclick="ubsApp.cancelQuiz()">Cancel</button>'+
'</div>';

ubsApp.calculatorTemplate = '<script type="text/javascript" src="js/calculator.js"></script>'+
'<link rel="stylesheet" type="text/css" >'+ //href="css/calculator.css"
'<div id="calculator" style="display:none">'+           //remove display None
'   <div id="rateCard"> Rate Card</div>'+
'   <input type="text" id="numberInput">'+
'   <input id="calcButton" type="button" value="7" onclick="addToDisplay(7)">'+
'   <input id="calcButton" type="button" value="8" onclick="addToDisplay(8)">'+
'   <input id="calcButton" type="button" value="9" onclick="addToDisplay(9)">'+
'   <input id="calcButton" type="button" value="/" onclick="addToDisplay(\'/\')">'+
'   <input id="calcButton" type="button" value="4" onclick="addToDisplay(4)">'+
'   <input id="calcButton" type="button" value="5" onclick="addToDisplay(5)">'+
'   <input id="calcButton" type="button" value="6" onclick="addToDisplay(6)">'+
'   <input id="calcButton" type="button" value="*" onclick="addToDisplay(\'*\')">'+
'   <input id="calcButton" type="button" value="1" onclick="addToDisplay(1)">'+
'   <input id="calcButton" type="button" value="2" onclick="addToDisplay(2)">'+
'   <input id="calcButton" type="button" value="3" onclick="addToDisplay(3)">'+
'   <input id="calcButton" type="button" value="+" onclick="addToDisplay(\'+\')">'+
'   <input id="calcButton" type="button" value="C" onclick="addToDisplay(\'C\')">'+
'   <input id="calcButton" type="button" value="0" onclick="addToDisplay(0)">'+
'   <input id="calcButton" type="button" value="=" onclick="addToDisplay(\'=\')">'+
'   <input id="calcButton" type="button" value="-" onclick="addToDisplay(\'-\')">'+
'</div>';
    

// ubsApp.purchaseTemplate='<div style="width:100%;height:100%;">'+

// '       <div style="width:50%;height:100%;float:left; border-right:2px solid black; background-color:white;">'+
// '           <div  class="screenTitle" style=" background-color:#ff6600; ">'+
// '               {{purchase}}'+
// '           </div>'+
// '           <div  style="padding:10px;position: absolute;top: 48%;left:0%;">CURRENT <br>INVENTORY<br> LEVEL</div>'+
// '           <div id="percent" style="{{style}}">{{sliderValue}}%</div>'+
// '           <input type="range" value="{{sliderValue}}" id="mySlider"  oninput="ubsApp.updateInventoryLevel(this.value)">'+
// '           <div id="value" style="{{style}}">Rs. {{inventoryValue}}</div>'+
// '           <div style="position:absolute; bottom:3%;left:14.5%; font-weight:600;">'+
// '               INVENTORY'+
// '           </div>'+
// '       </div>'+
// '       <div id="result" ></div>'+
// '       <button class="purchaseScreenButton" style="position: absolute;top: 50%;left: 46%;" onclick="ubsApp.fillUp() ">CONFIRM>></button>'+
// '       <div style="width:50%;height:100%;float:right;background-color: #ffcc00;">'+
// '           <div style="position:absolute; top:0%;right:0%;padding:10px; background-color:orangered; font-weight:600;">'+
// '               BANK BALANCE: '+'<span id="bankBalanceValue">{{bankBalance}}</span><br>'+
// '               CASH:'+ '<span id="cashValue">{{cash}}</span><br>'+
// '               CREDIT: '+'<span id="creditValue">{{credit}}</span><br>'+
// '               CREDIT LIMIT:'+'<span id="creditLimitValue">{{creditLimit}}</span><br>'+
// '           </div>'+

// '       <button class="purchaseScreenButton" style="position:absolute;bottom:2%;right:10%;" onclick="">HELP</button>'+
// '       <button class="purchaseScreenButton" style="position:absolute;bottom:2%;right:5%;" onclick="ubsApp.pay()">DONE</button>'+
// '       <button class="purchaseScreenButton" style="position:absolute;bottom:2%;right:15%;" onclick="ubsApp.closeCurrentScenario()">NO, THANKS</button>'+
// '       </div>'+
// '       <div style="left:65%;top:45%;position: absolute;" >'+
// '           NEW INVENTORY LEVEL:  <input type="text" id="newInventoryLevelText" style="width: 40px; border: 1px solid black;" readonly="readonly"><br><br>'+
// '           COST: <input type="text" id="newCostText" style="width: 90px; border: 1px solid black;" readonly="readonly"><br><br>'+
// '           <div id="parent1" ">PAY BY: <select style="border:1px solid black" id="pay1" ><option value="cash">CASH</option><option value="cheque">CHEQUE</option><option value="credit">CREDIT</option></select>&nbsp&nbsp AMOUNT:<input type="number" class="enterAmountText" id="amount1" min="0">&nbsp&nbsp<button class="purchaseScreenButton" onclick="ubsApp.addPaymentMode()" style="">Add Mode</button></div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
// '           <div id="parent2" style="display:none;">PAY BY: <select style="border:1px solid black" id="pay2" style="display:none;" ><option value="cash">CASH</option><option value="cheque">CHEQUE</option><option value="credit">CREDIT</option></select> &nbsp&nbsp AMOUNT:<input type="number" class="enterAmountText" min="0"   id="amount2"></div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
// '           <div id="parent3" style="display:none;">PAY BY: <select style="border:1px solid black" id="pay3" style="display:none;" ><option value="cash">CASH</option><option value="cheque">CHEQUE</option><option value="credit">CREDIT</option></select>&nbsp&nbsp AMOUNT:<input type="number" class="enterAmountText" min="0" id="amount3"></div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
// '       </div>'+


// '</div>';

ubsApp.purchaseTemplate='<div style="width:100%;height:100%;">'+

'       <div  class="purchaseLeftContainer">'+
'           <div class="iconContainer">'+
'               <img src="images/purchase.png" class="icon">'+
'           </div>'+
'           <div  class="purchaseScreenTitle screenTitle">'+
'               {{purchase}}'+
'           </div>'+
'           <div class="currentInventoryTitle">{{current}} <br>{{inventoryTitle}}<br> {{level}}</div>'+
'           <div id="percent">{{sliderValue}}%</div>'+
'           <input type="range" value="{{sliderValue}}" id="mySlider"  oninput="ubsApp.updateInventoryLevel(this.value)">'+
'           <div id="value">Rs. {{inventoryValue}}</div>'+
'           <div class="purchaseInventoryLabel">'+
'               {{inventoryTitle}}'+
'           </div>'+
'       </div>'+
'       <div id="result"></div>'+
'       <div><button class="purchaseScreenButton confirmButton" onclick="ubsApp.fillUp() ">{{confirmTitle}}>></button></div>'+
'       <div class="purchaseRightContainer">'+
'           <div style="width:100%;height:40%;">'+
'               <div class="purchaseTopRightScoreBoard">{{bankBalanceTitle}}: '+'<span id="bankBalanceValue">{{bankBalance}}</span><br>'+
'               <span>{{cashTitle}}:</span>'+ '<span id="cashValue">{{cash}}</span><br>'+
'               <span>{{creditTitle}}:</span>'+'<span id="creditValue">{{credit}}</span><br>'+
'               <span>{{creditLimitTitle}}:</span>'+'<span id="creditLimitValue">{{creditLimit}}</span><br>'+
'           </div></div>'+
'       <div class="purchaseInputForm">'+
'           <div style="margin-left:20%;">'+
'           <span>{{newInventoryLevelTitle}}:</span> '+
'           <input type="text" id="newInventoryLevelText"  class="borderB1" readonly="readonly"><br><br>'+
'           <span>{{costTitle}}: <span><input type="text" id="newCostText" class="borderB1" readonly="readonly"><br><br>'+
'           <div id="parent1" >'+
'               {{payByTitle}}: <select class="borderB1" id="pay1" ><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select>&nbsp&nbsp {{amountTitle}}:<input type="number" class="enterAmountText" id="amount1" min="0">&nbsp&nbsp<button class="purchaseScreenButton" onclick="ubsApp.addPaymentMode()" style="">{{addModeTitle}}</button>'+
'           </div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
'           <div id="parent2" style="display:none;">'+
'               {{payByTitle}}: <select class="borderB1" id="pay2"  ><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select> &nbsp&nbsp {{amountTitle}}:<input type="number" class="enterAmountText"  id="amount2">'+
'           </div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
'           <div id="parent3" style="display:none;">'+
'               {{payByTitle}}: <select class="borderB1" id="pay3"  ><option value="cash">{{cashTitle}}</option><option value="cheque">{{chequeTitle}}</option><option value="credit">{{creditTitle}}</option></select>&nbsp&nbsp {{amountTitle}}:<input type="number" class="enterAmountText" id="amount3">'+
'           </div><br>'+ //onchange="ubsApp.setAmountTextLimit(1)"
'       </div></div>'+
'       <div class="purchaseDivBottomThreeButton" >'+
'           <button class="purchaseScreenButton bottomButton"  onclick="">{{helpTitle}}</button>'+
'           <button class="purchaseScreenButton bottomButton"  onclick="ubsApp.pay()">{{doneTitle}}</button>'+
'           <button class="purchaseScreenButton bottomButton"  onclick="ubsApp.closeCurrentScenario()">{{noThanksTitle}}</button>'+
'       </div>'+
'</div>'+



'</div>';

ubsApp.luckyUnluckyTemplate='<div style="width:100%;height:100%;  background-color:white;">'+
'       <div class="screenTitle" style="background-color:{{background}}; color:{{color}}">'+
'            {{scenarioTitle}}'+
'       </div>'+
'           {{#if icon}}<div class="iconContainer">'+
'               <img src="images/{{icon}}.png" class="icon" style="">'+
'           </div>{{/if}}'+
'       <div id="scenario" class="borderB1" style="background-color:{{background}}; color:{{color}};">'+
'           {{scenario}}<br>'+
'           {{#if helpRequired}}'+
'               <button class="luckHelpButton">{{helpTitle}}</button>'+
'           {{/if}}'+
'       </div>'+
'       <div id="result"></div>'+
'       <div class="luckYouCanPayContainer">'+
'          <div style="display:inline-block;">{{payMessage}}</div>'+
'           <div style="display:inline-block; width:43%;">'+
'               <button class="luckPayButton" onclick="ubsApp.payFromBank({{amount}})">{{#if negative}}{{payTitle}}{{else}}{{gainTitle}}{{/if}}</button>'+
'           </div>'+
'       </div>'+
'       {{#if negative}}<div class="alternateMessageContainer">'+
'          {{alternalteMessage}}'+
'           <button  class="takeQuizWildCardButton" style="background-color:orangered;" onclick="ubsApp.runQuizTemplate()">{{takeQuizTitle}}</button>'+
'           {{or}}   <button class="takeQuizWildCardButton" style="background-color:green;">{{checkWildCard}}</button>    '+
'       {{/if}}'+
'       </div>'+
'</div>';

ubsApp.payOffTemplate='<div style="width:100%; height:100%; background-color:white; ">'+
'                <span class="imageContainer"><img class="payOffImageToken" src="images/{{color}}.png"></img></span>'+
'                <div class="payOffContainer">'+
'                      <div class="payOffTitle" align="center">'+
'                           {{title}}'+
'                      </div><br><br>'+
'                      <div>'+
'                           <span class="payOffSubTitleLeft">'+
'                               {{cashTitle}}: '+
'                               <span id="cashValue" >Rs. {{cash}}</span>'+
'                           </span>'+
'                           <span class="payOffSubTitleRight">'+
'                               {{bankBalanceTitle}}:'+
'                               <span id="bankBalanceValue">Rs. {{bankBalance}}</span>'+
'                           </span>'+
'                      </div><br>'+
'                      {{#if #payOff}}'+
'                           <div>'+
'                               <span class="payOffSubTitleLeft">{{debtAmountTitle}}:</span>'+
'                                    <span class="payOffLeftSubTitleValue">Rs. <span id="debtValue">{{debt}}<span>'+
'                               </span><br>'+
'                           </div><br>'+
'                      {{/if}}'+
'                      <span class="payOffSubTitleLeft">'+
'                           {{#if payOff}}'+
'                               {{amountToPayTitle}}:'+
'                           {{else}}'+
'                               {{amountToTransferTitle}}:'+
'                           {{/if}}'+
'                      </span>'+
'                      <span class="payOffLeftSubTitleValue">'+
'                           <input type="number" id="debtPaymentText" class="borderB1">'+
'                      </span><br><br>'+
'                      {{#if payOff}}'+
'                           <span class="payOffSubTitleLeft">'+
'                               {{modeOfPaymentTitle}}:'+
'                           </span>'+
'                      {{/if}}'+
'                      {{#if payOff}}'+
'                           <span class="payOffLeftSubTitleValue">'+
'                               <select class="borderB1" id="payOffDropDown">'+
'                                   <option value="cash">{{cashTitle}}</option>'+
'                                   <option value="cheque">{{chequeTitle}}</option>'+
'                               </select>'+
'                           </span><br><br>'+
'                      {{/if}}'+
'                      <div class="payOffButtonContainer" style="left:30%;">'+
'                           <button class="payOffButton" {{#if payOff}}onclick="ubsApp.payDebt()" {{else}}onclick="ubsApp.transferToBank()"{{/if}}>{{#if payOff}}{{payTitle}}{{else}}{{transferTitle}}{{/if}}</button>'+
'                      </div>'+
'                      <div style="left:40%;" class="payOffButtonContainer">'+
'                           <button class="payOffButton" style="margin-left:50%;" onclick="ubsApp.closeCurrentScenario()" >{{cancelTitle}}</button>'+
'                      </div>'+
'                </div>'+
'       <div id="result"></div>'+
'</div>';


ubsApp.centerScoreBoardTemplate='<div class="centerScoreBoardMainContainer">'+
'   <div style="height: 100%;width:100%;">'+
'   <div class="centerScoreBoardContainer" style="margin:0 auto; ">'+
'                <div class="centerScoreBoardContainerDiv1">'+
'                   {{bankBalanceTitle}} '+
'                   <span id="bankBalance">{{bankBalanceAmount}}</span>'+
'               </div>'+
'                <div class="centerScoreBoardContainerDiv2">'+
'                   {{cashTitle}} '+
'                   <span id="cash">{{cashAmount}}</span>'+
'                   <button class="centerScoreBoardButton" onclick="ubsApp.openTransferToBank(\'transferToBank\')">{{transferTitle}}</button>'+
'                </div>'+
'                <div class="centerScoreBoardContainerDiv3">'+
'                   {{debtTitle}}'+
'                   <span id="debt">{{debtAmount}}</span>'+
'                   <button class="centerScoreBoardButton" onclick="ubsApp.openPayOffScenario(\'PayOffScenario\')">'+
'                       {{payOffTitle}}'+
'                   </button>'+
'               </div>'+
'   </div>'+
'   <div id="currentChanceDetails">'+
'       <span id"playernametitle">{{playerNameLabel}}:<span id="player" style="padding: 1vw">masbd</span></span>&nbsp;'+
'       <span id="diceValueTitle">{{diceValueLabel}}:<span id="diceval" style="padding: 1vw"></span></span>'+
'   </div>'+
'  </div>'+
'</div>';