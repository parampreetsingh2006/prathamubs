var rollingDiceConfig = {};
rollingDiceConfig.currentRandomDiceOne=0;
function pointRoll() {
  var elDiceOne       = document.getElementById('dice1');
  var diceValueOne   = Math.floor((Math.random() * 6) + 1);
  var divElement = document.getElementById('rollIt');
    if(divElement != null) {
      playAudio(divElement);
      var audioevent = new CustomEvent('playAudio',{
          detail: 'audio/01_Dice.mp3',
      });
      divElement.dispatchEvent(audioevent);
  }

  while(diceValueOne==rollingDiceConfig.currentRandomDiceOne){
    diceValueOne   = Math.floor((Math.random() * 6) + 1);
  }


  rollingDiceConfig.currentRandomDiceOne=diceValueOne;
  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceValueOne === i) {
      elDiceOne.classList.add('show-' + i);
    }

  }
  return diceValueOne;
}
