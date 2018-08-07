// using http://pojo.sodhanalibrary.com/string.html

ubsApp.staticTemplate ='<div class="{{width}}" id="{{id}}" style="{{style}}" {{#if onClickPage}} onclick="ubsApp.checkPageorBoard(\' {{onClickPage.nextPage}} \',\'{{amount}}\', \'{{onClickPage.hideScenarios}}\')" {{/if}}>'+

'		{{src}}'+
' </div>'+
'<div id={{audioId}}></div>';
	
	

// ubsApp.decisionTemplate = '	 <div class="{{width}}" style="{{style}}">'+
// '			'+
// '		'+
// '		<div style="{{questionStyle}}">{{question}}</div><br>'+
// '		<div>'+
// '				'+
// '			{{#each options}}'+
// '			 <div  style="color: black;background-color:rgb(153, 230, 255);border-radius: 2vw;padding:.5vw;font-size:0.9vw;"> <input type="radio" style="{{radio_style}}" name="{{optionName}}" value="{{optionValue}}" id={{id}}> {{optionValue}}</div><br>'+
// '<span style="display:none" id="{{id}}Amount">{{amount}}</span>' +
// '<span style="display:none" id="{{id}}Inventory">{{inventoryScoreToBeChanged}}</span>'+
// '			{{/each}}    '+
// '				'+
// '		</div>'+
// '		<div style="text-align:center">'+
// '			<button id = "submitQuestion" style=\'background-color: #b3e6ff;color:black;display:inline-block;text-decoration: none;border:1px solid blue;width:8vw;\' onclick="ubsApp.renderDecisonTemplate()" >Submit</button>'+
// '		</div>'+
// '		  '+
// '		'+
// '			'+
// '		</div>' +
// '<div id={{audioId}}></div>';

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


//ubsApp.popupTemplate = '<div id="{{id}}"  style=" padding: 30px; background-color: rgba(255, 255, 255, 0.8);position:fixed; z-index:100; width:100%; height:100%;">'+
//' 	<div style="display: table-cell; vertical-align: middle;">'+
//' 		'+
//' 		<div style="{{msg_style}};background-color:#0099ff;">'+
//'   			{{message}}'+
//'   			<div style="{{button_style}}" onClick="{{onClick}}"> Next </div>'+
//' 		</div>'+
//' 		'+
//' 	</div>'+
//' </div>';

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
'           {{Customer}}'+
'       </div>'+
'       <br>'+
'       <div id="profile" >'+
'           <img src="{{profilePicture}}.png" class="photo" >'+
'       </div>'+
'           <br>'+
'       <div id="order">'+
'           <center><b>{{Order}}</b></center>'+
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
'           {{receiptGen}}'+
'       </div>'+
'       <br>'+
'       <div class="receipt">'+
'           <div id="title">{{receiptHeading}}</div>'+
'       '+
'           <div id="bill">'+
'               <div class="table-responsive">          '+
'                 <table class="table table-bordered">'+
'                   <thead>'+
'                     <tr>'+
'                       <th>#</th>'+
'                       <th>{{Items}}</th>'+
'                       <th>{{Quantity}}</th>'+
'                       <th>{{Rate}}</th>'+
'                       <th>{{Amount}}</th>'+
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
'                     {{#if discount}}'+
'                     <tr>'+
'                       <td colspan="4" style="color:#009933;vertical-align:middle;"><i> Discount: &nbsp;&nbsp;{{discount}}</i></td>'+
'                       <td ><input id = "discount" type="number" name="amt" class="amount" oninput="ubsApp.calculateBill()" ></td>  '+
'                     </tr>'+
'                     {{/if}}'+
'                     <tr>'+
'                       <td></td>'+
'                       <td></td>'+
'                       <td></td>'+
'                       <td><b>Total</b></td>'+
'                       <td><input type="number"  value="0" id="receiptTotal" class="amount" ></td>    '+
'                     </tr>'+
'                   </tbody>'+
'                 </table>'+
'               </div>'+
'           </div>'+
'       </div>'+
'    </div>'+
'   <div class="col-md-4 col-sm-4 col-xs-4 tools">'+
'       <div class = "heading">'+
'           {{Tools}}'+
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
'           <input id="calcButton" class="button orange" type="button" value="DEL" onclick="addToDisplay(\'DEL\')">'+
'           <input id="calcButton" class="button gray" type="button" value="." onclick="addToDisplay(\'.\')">'+
'           <input id="calcButton" class="button orange" type="button" value="+/-" disabled onclick="addToDisplay(\'\')">'+
'           <input id="calcButton" class="button pink" type="button" value="%" onclick="addToDisplay(\'%\')">'+
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
'       <img class="butt" id="help" onclick="ubsApp.startHelp(\'{{helpPageName}}\')" src="images/help.png" />'+
'       <img class="butt" id="done" src="images/done.png" {{#if onClickPage}} onclick="ubsApp.reduceInventory(\' {{onClickPage.nextPage}} \',\'{{amount}}\', \'{{onClickPage.hideScenarios}}\',\'{{tempTotal}}\',\'{{time}}\')" {{/if}} />    '+
'   </div>'+
'  </div>';

ubsApp.quizTemplate = '<div id="quiz">'+
'   <div id="quizTitle">'+
'       <span id="quizEmoji"></span>    '+
'       <span id="quizHeading">Quiz</span>'+
'       <span id="score"> SCORE: <span id="correctAnswers"></span>/{{noOfQuestions}} </span>'+
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
'       <div id="quizOk"><input type="submit" class=\'quizButtons quizOkButton\' name="{{optionName}}" onclick="ubsApp.nextQuizQuestion(\'{{onClickPage.nextPage}}\',\'{{answer}}\',\'{{optionName}}\')" value="OK"></div>'+
'       {{/if}}'+
'   </div>'+
'   <button id="quizHelp" class=\'quizButtons quizHelpButtons\' onclick="ubsApp.startHelp(\'{{helpPageName}}\')">HELP</button>'+
'   <button id="quizCancel" class=\'quizButtons quizSubmitButtons\' onclick="ubsApp.cancelQuiz()">Cancel</button>'+
'   <button id="quizDone" disabled class=\'quizButtons quizSubmitButtons\' onclick="ubsApp.doneQuiz()">Done</button>'+
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
'           <button class="purchaseScreenButton bottomButton"  onclick="ubsApp.closeCurrentScenario(); ubsApp.nextMove()">{{noThanksTitle}}</button>'+
'       </div>'+
'</div>'+



'</div>';

ubsApp.luckyUnluckyTemplate='<div style="width:100%;height:100%;">'+
'       <img src="images/background.png" style="width:100%;height:100%;">'+
'       <div class="luckScreenTitle" style="color:white">'+
'            {{scenarioTitle}}'+
'       </div>'+
'           {{#if icon}}<div class="luckIconContainer">'+
'               <img src="images/{{icon}}.png" class="icon" style="">'+
'           </div>{{/if}}'+

'       <div id="luckPlayerNameTitle">'+
'       PLAYER:<span id="player" style="padding: 1px">{{currentPlayerName}}</span>'+
'       </div>'+

'       <div id="scenarioOutline">' + /* Wrapper div*/

'       <div id="luckHeaderBorderImage">' +
'            <img src="images/redheadercommon.png" style="width:100%; height:100%">'+
'       </div>' +

'       <div id="scenario" style="background-color:white; color:black;">'+
'           {{scenario}}<br>'+
'           {{#if helpRequired}}'+
'               <button class="luckHelpButton">{{helpTitle}}</button>'+
'           {{/if}}'+
'       </div>'+
'       <div id="result"></div>'+
'       <div class="luckYouCanPayContainer">'+
'           <div style="display:inline-block; width:100%;">'+

'              <div style="display:inline-block; width:33.33%; text-align:left;;float:left">'+
'                  <button class="luckPayButton" onclick="ubsApp.payOrGain(\'{{scenarioName}}\')">'+
'                    {{#if negative}}{{payTitle}}{{else}}{{gainTitle}}{{/if}}</button>'+
'              </div>'+

'               {{#if quizRequired}}'+
'              <div style="display:inline-block; width:33.33%; text-align:left;float:left">'+
'                  <button class="takeQuizButton" style="background-color:orangered;" onclick="ubsApp.luckPaymentQuiz(\'{{scenarioName}}\')">{{takeQuizTitle}}</button>'+
'              </div>'+
'           {{#if hasAdvantageCard}}'+
'              <div style="display:inline-block; width:33.33%; text-align:right;float:left">'+
'                  <button class="wildCardButton" style="background-color:green;" onclick="">{{checkWildCard}}</button>    '+
'              </div>'+
'           {{/if}}'+
'               {{/if}}'+
'       </div>'+
'           </div>'+
'       </div>'+
'</div>';

ubsApp.payOffTemplate='<div style="width:100%; height:100%; background-color:white; ">'+
'                <span class="imageContainer"><img class="payOffImageToken" src="images/{{color}}.png"></img></span>'+
'                <div class="payOffContainer">'+
'                      <div class="payOffTitle" align="center">'+
'                           {{title}}'+
'                      </div>'+
'                      <div align="center"><img class="" src="images/redheadersellreceipt.png"></div>'+
'                      <br><br>'+
'                      <div>'+
'                           <span class="payOffSubTitleLeft">'+
'                               {{cashTitle}} '+
'                               <span id="cashValue" >₹ {{cash}}</span>'+
'                           </span>'+
'                           <span class="payOffSubTitleRight">'+
'                               {{bankBalanceTitle}} '+
'                               <span id="bankBalanceValue">₹ {{bankBalance}}</span>'+
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
'                           <button class="payOffButton" {{#if payOff}}onclick="ubsApp.payDebt()"{{/if}} {{#if transfer}}onclick="ubsApp.transferToBank()"{{/if}} {{#if withdraw}}onclick="ubsApp.withdrawFromBank()"{{/if}}>{{#if payOff}}{{payTitle}}{{/if}} {{#if transfer}}{{transferTitle}}{{/if}} {{#if withdraw}}{{withdrawTitle}}{{/if}}</button>'+
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
'                   {{bankBalanceTitle}}: '+
'                   <span id="bankBalance">{{bankBalanceAmount}}</span>'+
'                   <button class="centerScoreBoardButton" onclick="ubsApp.openWithdrawFromBank()">{{withdrawTitle}}</button>'+
'               </div>'+
'                <div class="centerScoreBoardContainerDiv2">'+
'                   {{cashTitle}}: '+
'                   <span id="cash">{{cashAmount}}</span>'+
'                   <button class="centerScoreBoardButton" onclick="ubsApp.openTransferToBank()">{{transferTitle}}</button>'+
'                </div>'+
'                <div class="centerScoreBoardContainerDiv3">'+
'                   {{debtTitle}}:'+
'                   <span id="debt">{{debtAmount}}</span>'+
'                   <button class="centerScoreBoardButton" onclick="ubsApp.openPayOffScenario()">'+
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

ubsApp.insuranceTemplate = '<div id="decisonInsurance">'+
'   <div id="insuranceHeaderTitle">'+
'       <span id="insuranceEmoji"></span>    '+
'       <span id="insuranceHeading">{{Insurance}}</span>'+
'   </div>'+
''+
'   <div id="insuranceSelection">'+
'           <div id="insuranceTypesTitle">{{insuranceType}}</div>'+
'           <div id="typesOfInsurance">'+
'           <fieldset id="insuranceTypesSelection">'+
'               <label for="insurance1" class="col-md-3"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium1}}" id="insurance1" name="insuranceTypes">{{insurance1}}</label>'+
'               <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue1}} id="suminsurance1">'+
'               <label for="insurance2" class="col-md-3"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium2}}" id="insurance2" name="insuranceTypes">{{insurance2}}</label>'+
'               <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue2}} id="suminsurance2">'+
'               <label for="insurance3" class="col-md-4"><input type="checkbox" onchange="ubsApp.increasePremium()" value="{{premium3}}" id="insurance3" name="insuranceTypes">{{insurance3}}</label>'+
'               <input type="checkbox" style="visibility:hidden" value={{sumAssuredvalue3}} id="suminsurance3">'+

'           </fieldset>'+
'       </div>'+
'       <div id="insurancePayment" class="row">'+
'           <label for="annualPremium" class="insuranceValue">{{premium}}</label>'+
'           <input type="number" id="annualPremium" name="premium" value="0" readonly >'+
'           <label for="annualPremium" class="insuranceValue">{{sumAssured}}</label>'+
'           <input type="number" id="sumAssured" name="sum"  value="0" readonly >'+
'       </div>'+
'       <div id="modeOfPayment">'+
'           <span id="modeOfPaymentTitle">{{mode}}</span>'+
'           <select id="modeOfPaymentOptions">'+
'             <option value="cash"><span id="cashInsurance">{{cashTitleName}}</span></option>'+
'             <option value="cheque"><span id="chequeInsurance">{{chequeTitleName}}</span></option>'+
'           </select>'+
'       </div>'+
'           <div id="buy_cancel">'+
'           <span id="decisionBuy"><button  class=\'insuranceButtons\' onclick="ubsApp.buyInsurance(\'{{page}}\')">{{buy}}</button></span>'+
'           <span id="decisionCancel"><button  class=\'insuranceButtons\' onclick="ubsApp.nextMove()">{{cancel}}</button></span>'+
'           </div>'+
'       </div>'+
'       '+
'       <div class="row" id="leftInfo">'+
'           <div class="col-md-6">'+
'               {{bankBalanceTitle}}  <br>'+
'               {{cashTitle}}          <br>'+
'               {{debtTitle}}          <br>'+
'           </div>'+
'           <div class="col-md-1">'+
'               : <br>'+
'               : <br>'+
'               : <br>'+
'           </div>'+
'           <div class="col-md-5">'+
'               <span>₹ {{balance}}</span><br>'+
'               <span>₹ {{cash}}</span><br>'+
'               <span>₹ {{debt}}</span><br>'+
'           </div>'+
'       </div>'+
'       <div class="row" id="rightInfo">'+
'           <div class="col-md-7" >'+
'               {{inventoryTitle}}         <br>'+
'               {{invVal}}   <br>'+
'               {{repPoints}} <br>'+
'           </div>'+
'           <div class="col-md-1">'+
'               : <br>'+
'               : <br>'+
'               : <br>'+
'           </div>'+
'           <div class="col-md-4">'+
'               <span id="decisionMakingInv">{{inventory}}%</span><br>'+
'               <span id="decisionMakingInvValue">{{inventoryValue}}</span><br>'+
'               <span id="decisionMakingReputation">{{reputationPts}}</span><br>'+
'           </div>'+
'       </div>'+
'</div>';

ubsApp.decisionTemplate = '<div id="decisonMaking">'+
'   <div id="decisionTitle">'+
'       <span id="decisionEmoji"></span>    '+
'       <span id="decisionHeading">{{Decision}}</span>'+
'   </div>'+
''+
'   <div id="question_answer_decision">'+
'       <div id="Decision Description">'+
'           {{question}}'+
'       </div>'+
'       {{#if inline}}'+
'       <div id="yes_no">'+
'       {{#each options}}'+
'           <span id="option{{id}}"><button class=\'decisionButtons\' onclick="ubsApp.decisionOptions(\'{{credit.reputationPoints}}\', \'{{credit.bankBalance}}\',{{#if insurance}}\'{{insurance}}\', \'{{page}}\'{{/if}} {{#if pamphlet}}\'false\', \'undefined\', \'{{pamphlet}}\'{{/if}})">{{optionValue}}</button></span>'+
'       {{/each}}'+
'       </div>'+
'       {{else}}'+
'       {{#each options}}'+
'           <span id="option{{id}}"><button  class=\'inlineDecisionButtons\' onclick="ubsApp.decisionOptions(\'{{credit.reputationPoints}}\', \'{{credit.bankBalance}}\')">{{optionValue}}</button></span>'+
'       {{/each}}'+
'       {{/if}}'+
'   </div>'+
'       '+
'       <div class="row" id="leftInfo">'+
'           <div class="col-md-6">'+
'               {{bankBalanceTitle}}  <br>'+
'               {{cashTitle}}          <br>'+
'               {{debtTitle}}          <br>'+
'           </div>'+
'           <div class="col-md-1">'+
'               : <br>'+
'               : <br>'+
'               : <br>'+
'           </div>'+
'           <div class="col-md-5">'+
'               <span>₹ {{balance}}</span><br>'+
'               <span>₹ {{cash}}</span><br>'+
'               <span>₹ {{debt}}</span><br>'+
'           </div>'+
'       </div>'+
'       <div class="row" id="rightInfo">'+
'           <div class="col-md-7" >'+
'               {{inventoryTitle}}         <br>'+
'               {{invVal}}   <br>'+
'               {{repPoints}} <br>'+
'           </div>'+
'           <div class="col-md-1">'+
'               : <br>'+
'               : <br>'+
'               : <br>'+
'           </div>'+
'           <div class="col-md-4">'+
'               <span id="decisionMakingInv">{{inventory}}%</span><br>'+
'               <span id="decisionMakingInvValue">Rs. {{inventoryValue}}</span><br>'+
'               <span id="decisionMakingReputation">{{reputationPts}}</span><br>'+
'           </div>'+
'       </div>'+
'</div>';

ubsApp.advantageCardTemplate='<div style="width:100%;height:100%;  background-color:white;">'+
'       <div class="screenTitle" style="background-color:{{background}}; color:{{color}}">'+
'            {{advantageCardTitle}}'+
'       </div>'+
'       <div id="advantageCardScenario" class="borderB1" style="background-color:{{background}}; color:{{color}};">'+
'           {{reputationPointAvailableTitle}}:<span id="currentReputationPoint">{{currentReputationPoint}}</span>&nbsp ({{conversionTitle}})<br>'+
'           {{numberToConvertTitle}}: <input type="number" style="width:15%;" class="borderB1" id="convertText"></input> &nbsp <button id="checkButton" onclick="ubsApp.checkDetails()">{{checkTitle}}</button><br><br>'+
'            {{numberOfAdvantageCardTitle}}: <span id="convertedNumber"></span><br>'+
'            {{reputationPointBalance}}: <span id="remainingBalance"></span>'+
'       </div>'+
'       <div class="advantageCardButtonContainer">'+
'           <button onclick="ubsApp.covertReputationToWildCard()" class="advantageCardButton">{{convertTitle}}</button>'+
'           <button onclick="ubsApp.closeCurrentScenario()" class="advantageCardButton" >{{cancelTitle}}</button>'+
'       </div>'+
'       <div id="result"></div>'+
'</div>';



ubsApp.popUpTemplate = '<div style="{{style}}">'+
                       '    <div style="background-color: white;margin:5%;padding: 10px;position: relative; overflow: auto;   ">'+
                       ''+
                       '        <div>'+
                       ''+
                       '            <div style="{{headerStyle}}" >{{header}}</div>'+
                       ''+
                       '        </div>'+
                       ''+
                       '        <div>'+
                       ''+
                       '            <div style="    text-align: center;     padding-top: 19px;">{{message}}</div>'+
                       '        {{#if showCloseButton}}'+
                       '            </div> <div style="text-align: center;margin-top: 10px;"> <button onclick="ubsApp.closeCurrentScenario()" >{{Close}}</button> </div>'+
                       '        {{/if}}'+
                       '        </div>'+
                       '    </div>'+
                       '</div>';





ubsApp.weekSummaryTemplate =  '<div style="{{style}}">'+
                             '    <div style="background-color: white;margin:5%;padding: 10px;position: relative; overflow: auto;   ">'+
                             ''+
                             '        <div>'+
                             ''+
                             '            <div style="{{headerStyle}}" >{{WeeklySummary}}</div>'+
                             ''+
                             '        </div>'+
                             ''+
                             ''+
                             '        <div>'+
                             '            <table class="table table-bordered">'+
                             '                <thead>'+
                             '                <tr>'+
                             '                    <th></th>'+
                             '                    <th>{{LastWeek}}</th>'+
                             '                    <th>{{CurrentWeek}}</th>'+
                             '                </tr>'+
                             '                </thead>'+
                             '                <tbody>'+
                             '                <tr>'+
                             '                    <td>{{Cash}}</td>'+
                             '                    <td>{{lastWeekCash}}</td>'+
                             '                    <td>{{currentWeekCash}}</td>'+
                             '                </tr>'+
                             '                <tr>'+
                             '                    <td>{{BankBalance}}</td>'+
                             '                    <td>{{lastWeekBankBalance}}</td>'+
                             '                    <td>{{currentWeekBankBalance}}</td>'+
                             '                </tr>'+
                             '                <tr>'+
                             '                    <td>{{Credit}}</td>'+
                             '                    <td>{{lastWeekCredit}}</td>'+
                             '                    <td>{{currentWeekCredit}}</td>'+
                             '                </tr>'+
                             '                <tr>'+
                             '                    <td>{{ReputationPoints}}</td>'+
                             '                    <td>{{lastWeekReputationPts}}</td>'+
                             '                    <td>{{currentWeekReputationPts}}</td>'+
                             '                </tr>'+
                             '                <tr>'+
                             '                    <td>{{AdvantageCard}}</td>'+
                             '                    <td>{{lastWeekAdvantageCard}}</td>'+
                             '                    <td>{{currentWeekAdvantageCard}}</td>'+
                             '                </tr>'+
                             '                </tbody>'+
                             '            </table>'+
                             '        </div>'+
                             ''+
                             '        <div>'+
                             ''+
                             '        </div> <div style="text-align: center;margin-top: 10px;"> <button onclick="ubsApp.closeCurrentScenario()" >{{Close}}</button> </div>'+
                             '    </div>'+
                             '</div>'+
                             '</div>';

