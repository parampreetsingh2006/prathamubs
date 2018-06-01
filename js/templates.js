// using http://pojo.sodhanalibrary.com/string.html


ubsApp.staticTemplate = '<div class="{{width}}" style="{{style}}">'+
'		{{imgSrc}}'+
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

ubsApp.wheelOfFortuneTemplate =  '<div style="{{style}}"  class="{{width}}" >'+
' <div style="width:100%; text-align: center;">'+
'<img src="images/caret-down.svg" style="height:30px" ></img>'+
'<canvas id="canvas"  width="{{wheelWidth}}" height="{{wheelWidth}}" style="padding-bottom:5px;padding-left: 0;padding-right: 0;margin-left: auto;margin-right: auto;display: block;">'+
'                        <p style="{color: white}" align="center">Sorry, your browser doesn\'t support canvas. Please try another.</p>'+
' </canvas>'+
' </div>'+
' <div style="width:100%; text-align: center;">'+
'	<button onclick="ubsWheelOfFortune.startSpin()" >Spin </button>'+
' </div>'+
' </div>';
	

	

	

	

	

	

	

	

