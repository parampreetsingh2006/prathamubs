
function addToDisplay(clickedButtonVal){
	switch(clickedButtonVal){
		case 'C':
			document.getElementById('numberInput').value = '';
			break;
		case '=':
			var expression = document.getElementById('numberInput').value;
			document.getElementById('numberInput').value = String(eval(expression));
			break;
		default:
			document.getElementById('numberInput').value += clickedButtonVal;
	}
	
}