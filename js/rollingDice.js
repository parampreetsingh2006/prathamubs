
var currentClass = '';
var randomNumber = 0;
var rollingDiceConfig = {};

$(document).ready(function() {
    var windowHeight =  $(window).height();
    $('#rollscene').css('width',windowHeight/3+"px");
    $('#rollscene').css('height',windowHeight/3+"px");
});

function changeSide() {
  var cube = document.querySelector('.cube');
  var showClass = 'show-' + (Math.floor(Math.random()*6)+1);
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
  
  
}
// set initial side
changeSide();


function mainroll(){
  for(var i = 0; i < 10; i++){
    setTimeout(function(){ 
      changeSide();
      randomNumber++;
      if(randomNumber == 10){
        getRandomNumber();
      }
     }, i*250);
  } 
}


function getRandomNumber() {
  rndNum = Math.floor((Math.random() * 8) + 1); 
  alert("Congratulations, Lets Explore scenario: "+rndNum);
  ubsApp.renderPage(ubsApp.pages[rollingDiceConfig.optionPageMap[rndNum]]);
  randomNumber = 0;  
}


