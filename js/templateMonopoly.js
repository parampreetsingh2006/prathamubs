monopoly.boardTemplate='<div class="responsive">'+
    '<div class="mainSquare">'+
        '<div class="row top">'+
            '{{#each top_row}}'+
                '<div class="square1">'+
                    '<div class="header header-top {{color}}"></div>'+
                    '<div class="firstLine firstLine-top rotation2" id={{id}}>'+'{{title}}'+'<br>'+
                        '{{#if start}}'+
                            '{{#each players}}'+
                              '<span id="{{playerId}}"><img height="18" width="14" src="images/{{tokenColor}}.png"> </span>&nbsp;'+
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
                        '<div class="firstLine firstLine-left rotation1" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                    '</div>'+
                '{{/each}}'+
            '</div>'+    
            '<div class="square9" ></div>'+
            
            '<div class="square2">'+
                '{{#each right_col}}'+
                    '<div class="squareSide">'+
                        '<div class="headerSide header-left {{color}}"></div>'+
                        '<div class="firstLine firstLine-right rotation3" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                    '</div>'+
                '{{/each}}'+
            '</div>'+
        '</div>'+
        '<div class="row top">'+
            '{{#each bottom_row}}'+
                '<div class="square1">'+
                    '<div class="header header-top {{color}}"></div>'+
                    '<div class="firstLine firstLine-top rotation2" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                '</div>'+
            '{{/each}}'+
        '</div>'+
    '</div>'+
'</div>';

/*monopoly.rollingDiceTemplate = '<body class = "diceBody"><div style="position:absolute; top:32%; left:37%;">'+

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
     '<button id ="rollIt" onclick="monopoly.rollDice()" >Roll it </button>'+
'    </div>'+
'  </div>'+
'</div></body>';*/

monopoly.rollingDiceTemplate = 
'  <div class="dice-board" style="position:absolute; top:57%; left:26%;">'+
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
'  <button id=\'rollIt\' class=\'roll-button\' style="left: 15%;top: 45%;position: absolute;" onclick="monopoly.rollDice()">Roll it</button>'+
''+
''+
'    </div> '+
''+
''+
'  </div>';

monopoly.staticTemplate ='<div class="{{width}}" style="{{style}}"   onclick="monopoly.renderPageforBoard(\'{{onClickPage}}\',\'{{amount}}\')">'+
'       {{src}}'+
' </div>'+
'<div id={{audioId}}></div>';

monopoly.formTemplate='{{#if nameTitle}}<br><div class=\"title\" >{{nameTitle}}:</span><input type=\"text\" id=\"{{nameId}}\" style=\"margin-left:9px;\"></input><br><br>{{/if}}'+

'{{#if numberOfTokens}}'+
    '{{#each numberOfTokens}}'+
        '<input type=\"radio\" style="display:inline;padding-left:5em; margin-left:22px;" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\"><img src=\"images/{{tokenColor}}.png\" style=\"height:32px;width:32px;\"></label>'+
    '{{/each}}'+

'{{/if}}'+
'{{#if difficulty}}'+
    '{{#each difficulty}}'+
        '<input type=\"radio\" style\"display:inline;padding-left:5em; margin-left:22px;\" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\">{{text}}</label>'+
    '{{/each}}'+
'{{/if}}'+
'{{#if language}}'+
    '{{#each language}}'+
        '<input type=\"radio\" style\"display:inline;padding-left:5em; margin-left:22px;\" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\">{{text}}</label>'+
    '{{/each}}'+

'{{/if}}';