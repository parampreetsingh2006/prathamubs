const playAudio = function(divElement){
	if(divElement !=null)
	{	
		divElement.addEventListener('playAudio', function (e) {
	    	console.log('PlayAudio', e.detail);
			document.getElementById('soundtrack').play();
		});
	}
}
