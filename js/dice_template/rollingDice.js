var rollingDiceConfig = {};
rollingDiceConfig.currentRandomDiceOne=0;
function pointRoll() {

  var elDiceOne       = document.getElementById('dice1');
  console.log(elDiceOne.classList);
  //console.log(elDiceTwo.classList["2"]);
  var diceValueOne   = Math.floor((Math.random() * 6) + 1);
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
