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
	
ubsApp.scoreTemplate= '<style>'+ 
 
' .coin{display:block ; width: 35px; height: 35px; -ms-transform-style:preserve-3d;-webkit-transform-style:preserve-3d; transform-style:preserve-3d;  animation: coin 2s linear infinite; }'+

' .coin .front{ width: 100%; height: 100%; border-radius: 50%; position: absolute; top: 0; left: 0; z-index: -1; }'+

' .coin .back{ width: 100%; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} border-radius: 50%; transform: rotateY(180deg)translateZ(10px); -webkit-transform:rotateY(180deg)translateZ(10px); -ms-transform:rotateY(180deg)translateZ(10px); position: absolute; top: 0; left: 0; z-index: 1; }'+

' .coin .front_b{ width: 100%; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} border-radius: 50%; transform: translateZ(-1px); -webkit-transform:translateZ(-1px); position: absolute; top:0; left: 0; z-index: 2;}'+

' .coin:before{ content: \"\"; margin-left: -5px; width: 10px; height: 100%; {{#if coinColor}}background:{{coinColor}};{{else}}background:#f7941e;{{/if}} position: absolute; top: 0; left: 50%; z-index:1; -webkit-transform:rotateY(-90deg); -webkit-transform-origin:100% 50%; transform:  rotateY(-90deg); transform-origin: 100% 50%;}'+

' .coin .front_b:before{ content: \"\"; width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: 3; }'+ 


' .coin .back:before{content: \"\";width: 100%; height: 100%; border:10px solid #fbb041; border-radius: 50%; box-sizing: border-box; position: absolute; top: 0; left: 0; z-index: -3;}'+



' .print_txt{ display:block;padding: 10px ; font-weight: 500;font-size: 18px;width: 7%;} '+


' @keyframes'+ 
' coin{'+ 
	'0%{}'+ 
	'100%{-webkit-transform: rotateY(360deg);}}'+ 


' </style>'+


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


ubsApp.popupTemplate = '<div id="{{id}}"  style="display:none; padding: 30px; background-color: rgba(255, 255, 255, 0.8);position:fixed; z-index:100; width:100%; height:100%;">'+
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
    



ubsApp.timerTemplate = '<div style="color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;font-size:2vw ;position:absolute; top:5%; right:6%;"> Timer: </div>'+'<div style="{{style}}" id="{{divID}}" >'+

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


ubsApp.calculatorTemplate='<div id="calculator" style="position: absolute;bottom: 2%;left: 5%;">'+
                                ' <button style="background: url(Images/calculator.png) no-repeat;" onclick="ubsApp.openCalculator()"></button>'+
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


ubsApp.calculatorTemplate = '<script type="text/javascript" src="js/calculator.js"></script>'+
'<link rel="stylesheet" type="text/css" href="css/calculator.css">'+
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
    

