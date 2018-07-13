var rollingDiceConfig = {};
rollingDiceConfig.currentRandomDiceOne=0;
rollingDiceConfig.currentRandomDiceTwo=0;
function pointRoll() {

  var elDiceOne       = document.getElementById('dice1');
  var elDiceTwo       =document.getElementById('dice2')
  var diceValueTwo=Math.floor((Math.random() * 6) + 1);
  console.log(elDiceOne.classList);
  console.log(elDiceTwo.classList["2"]);
  var diceValueOne   = Math.floor((Math.random() * 6) + 1);
  while(diceValueOne==rollingDiceConfig.currentRandomDiceOne){
    diceValueOne   = Math.floor((Math.random() * 6) + 1);
  }

  while(diceValueTwo==rollingDiceConfig.currentRandomDiceTwo){
    diceValueTwo   = Math.floor((Math.random() * 6) + 1);
  }
  rollingDiceConfig.currentRandomDiceOne=diceValueOne;
  rollingDiceConfig.currentRandomDiceTwo=diceValueTwo;
  console.log("diceValueone:"+diceValueOne);
  console.log("diceValuetwo:"+diceValueTwo);
  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    elDiceTwo.classList.remove('show-'+ i);
    if (diceValueOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
    if(diceValueTwo===i){
      elDiceTwo.classList.add('show-' + i);
    }
  }
  return diceValueOne+diceValueTwo;
}
/*
var currentClass = '';
var randomNumber = 0;
var rollingDiceConfig = {};
var diceVal = 0;

$(document).ready(function() {
    var windowHeight =  $(window).height();
    $('#rollscene').css('width',windowHeight/3+"px");
    $('#rollscene').css('height',windowHeight/3+"px");
});

function changeSide() {
  var cube = document.querySelector('.cube');
  diceVal = (Math.floor(Math.random()*6)+1);
  var showClass = 'show-' + diceVal;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
  return diceVal;
  
}
// set initial side
changeSide();


function mainroll(){
  var diceValue;
  for(var i = 0; i < 10; i++){
    setTimeout(function(){ 
      diceValue = changeSide();
     }, i*190);
  } 
  
}



*/