$( document ).ready(function(){
	var random = [];
	var prerandom;
	$.fn.generarRandom = function () {
		//var iguals = false;
		var cont = 0;
		while(cont < 80){
			//iguals = false;
			random[cont] = Math.floor((Math.random() * 100) + 1);
			var cont2 = 0;
			while(cont2 < random.length){
				if(random[cont] == random[cont2] && cont !== 0){
					cont--;
				}else{
					cont++;
					break;
				}
				cont2++;
			}
		}
		for(var i = 0;i<80;i++){
			console.log(random[i]);
			
		}
	});
});