$( document ).ready(function(){
	var random = [];
	var quantity = 80;
	var maxNumber = 100;
	
	//Ens genera un array de 80 números de l'1 al 100 diferents.
	$.fn.generarRandom = function() {
		var cont = 0;
		while(cont < quantity){
			random[cont] = Math.floor((Math.random() * maxNumber) + 1);
			var cont2 = 0;
			
			//Si troba un nombre igual al que s'acaba de generar, el torna a generar.
			//Sino, segueix buscant fins al final de l'array.
			while((cont2+1) < random.length){
				if(random[cont] == random[cont2]){
					cont--;
					break;
				}else{
					cont2++;
				}
			}
			cont++;
		}
		
		//Mostra l'array que acabem de crear.
		for(var i = 0;i < quantity;i++){
			console.log((i+1)+".- "+random[i]);
		}
	};
});