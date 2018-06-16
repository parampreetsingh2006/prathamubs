// using http://pojo.sodhanalibrary.com/string.html


ubsApp.staticTemplate ='<div class="{{width}}" style="{{style}}"   onclick="ubsApp.renderPageByName(\'{{onClickPage}}\',\'{{amount}}\')">'+
'		{{src}}'+
' </div>';
	
	

ubsApp.decisionTemplate = '	 <div class="{{width}}" style="{{style}}">'+
'			'+
'		'+
'		<div>{{question}}<br></div>'+
'		<div>'+
'				'+
'			{{#each options}}'+
'			 <div  style="color: black;background-color:rgb(153, 230, 255);border-radius: 2vw;padding:.5vw;font-size:1.3vw;"> <input type="radio" style="{{radio_style}}" name="{{optionName}}" value="{{optionValue}}" id={{id}}> {{optionValue}}</div><br>'+
'<span style="display:none" id="{{id}}Amount">{{amount}}</span>' + 
'			{{/each}}    '+
'				'+
'		</div>'+
'		<div style="text-align:center">'+
'			<button style=\'background-color: #b3e6ff;color:black;display:inline-block;text-decoration: none;border:1px solid blue;width:8vw;\' onclick="ubsApp.renderDecisonTemplate()" >Submit</button>'+

'		</div>'+
'		  '+
'		'+
'			'+
'		</div>';

ubsApp.wheelOfFortuneTemplate =   '<div style="{{style}}"  class="{{width}}" >'+
' <div style="width:100%; text-align: center;">'+
'<img src="images/caret-down.svg" style="height: 30px;" ></img>'+
'<canvas id="canvas"  width="{{wheelWidth}}" height="{{wheelWidth}}" style="padding-bottom:5px; padding-left: 0;padding-right: 0;margin-left: auto;margin-right: auto;display: block;">'+
'                        <p style="{color: white}" align="center">Sorry, your browser doesn\'t support canvas. Please try another.</p>'+
' </canvas>'+
' </div>'+
' <div style="width:100%; text-align: center;">'+
'	<button onclick="ubsWheelOfFortune.startSpin()"  style="background-color:#ff6600; padding:5px; border-radius:5px; border:0;" >Spin </button>'+
' </div>'+
' </div>'+
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

ubsApp.rollingDiceTemplate = '<body class = "diceBody"><div class="col-lg-12 col-md-12 col-xs-12">'+
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
     '<button onclick="mainroll()" >Roll it </button>'+
'    </div>'+
'  </div>'+
'</div></body>';

ubsApp.scratchCard ='<canvas id="scratch_card_canvas"'+
                    '	height="{{height}}px"'+
                    '	width="{{width}}px"'+
                    '	style="{{style}}" />';

ubsApp.choiceTemplate =  '<div style="height:{{containerHeight}}">'+ '{{#each choices}}'+
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
'			{{/each}}' + '</div>';
	
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
	


ubsApp.timerTemplate = '<div style="color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;font-size:2vw ;position:fixed; top:1vw; right:16vw"> Timer: </div>'+'<div style="{{style}}" id="{{divID}}" >'+
''+
'</div>';



	

	

	

	

	

	

	

	

