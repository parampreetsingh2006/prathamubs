// using http://pojo.sodhanalibrary.com/string.html


ubsApp.staticTemplate ='<div class="{{width}}" style="{{style}}" {{#if onClickPage}} onclick="ubsApp.renderPageByName(\'{{onClickPage}}\')" {{elseif nextPage}} onclick="ubsApp.addScore(\'{{onClickOp}}\', \'{{nextPage}}\')" {{/if}}>'+
'		{{src}}'+
' </div>';
	
	

ubsApp.decisionTemplate = '	 <div class="{{width}}" style="{{style}}">'+
'			'+
'		'+
'		<div>{{question}}</div>'+
'		<div>'+
'				'+
'			{{#each options}}'+
'			 <input type="radio" name="{{optionName}}" value="{{optionValue}}" > {{optionValue}}<br>'+
'			{{/each}}    '+
'				'+
'		</div>'+
'		<div>'+
'			<button onclick="ubsApp.renderDecisonTemplate()" >Submit</button>'+
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
'	<button onclick="ubsWheelOfFortune.startSpin()" >Spin </button>'+
' </div>'+
' </div>'+
' '+
' <div id= "wheelOfFortuneModal" style="display:none; padding: 30px; background-color: rgba(255, 255, 255, 0.8);position:fixed; z-index:100; width:100%; height:100%; ">'+
' <div style="    display: table-cell; vertical-align: middle;">'+
' <div style="width: 300px; height: 60px; background-color: wheat;padding: 5px; margin: auto; text-align: center; overflow-x: auto;overflow-y: auto;">'+
'   Yay !!! Lets proceed to <span id="wheelOfFortuneIndicatedSegment"> </span> section.'+
'   <div style="border:1px solid;cursor: pointer; width: fit-content;padding: 3px;     margin: auto;" onClick="ubsWheelOfFortune.resetWheel()"> Next </div>'+
' </div>'+
' </div>'+
' </div>';

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
	
ubsApp.scoreTemplate= '<style> {{style}} </style>'+

'<div style=\"position: absolute; top: 2%; left: 90%;\">'+
	
	'{{score_text}}'+

'</div>'+

'<div style=\"position: absolute; top: 2%; left: 95%; \"> '+
	
	'{{coin}}'+
	
'</div>'


ubsApp.popupTemplate = '<div id="{{id}}"  style="display:none; padding: 30px; background-color: rgba(255, 255, 255, 0.8);position:fixed; z-index:100; width:100%; height:100%;">'+
' 	<div style="display: table-cell; vertical-align: middle;">'+
' 		'+
' 		<div style="{{msg_style}}">'+
'   			Yay !!! Lets proceed to <span id="{{fortuneID}}"> </span> section.'+
'   			<div style="{{button_style}}" onClick="{{onClick}}"> Next </div>'+
' 		</div>'+
' 		'+
' 	</div>'+
' </div>';


	

	

	

	

	

	

	

	

