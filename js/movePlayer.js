function myMove(count, pIdToken, currentPos) {
  var elem = $("#"+pIdToken);
  var id = currentPos;   
  var move = setInterval(frame, 500);
  function frame() {
    if (id == currentPos+count+1) {
      clearInterval(move);
    } else {
      id++;
      $("#" + id).append(elem);
    }
  }
  currentPos=currentPos+count+1;
}
var colour =["red", "blue", "orange", "brown","yellow","light-blue", "green","pink", "dark-green", "purple"];

function  makePlayers(no, tc){
  var x = tc.top_row[0];
  for(let i = 0; i<no; i++){
    x.player[i].playerId = "p"+i;
    x.player[i].pc = colour[i];
    x.player[i].currentPos = 1;
  }
}
