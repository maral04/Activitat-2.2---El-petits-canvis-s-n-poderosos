var random = [];
var openSquares = 30;
var coloredTotal;
var maxNumber = 100;
var percGreen = 60;
var totalGreen;
var totalBlue;
var imHappy = false;
var fitxes = [];
var contigua = 0;
var veines = 3;
var checkId;
var contZ = 1;

$( document ).ready(function(){
	
	//Ens genera un array de 80 números del 0 al 100 diferents.
	$.fn.generarRandom = function() {
		coloredTotal = maxNumber - openSquares;
		var cont = 0;
		while(cont < coloredTotal){
			random[cont] = Math.floor((Math.random() * maxNumber));
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
		
		/*
		//Mostra l'array que acabem de crear.
		for(var i = 0;i < coloredTotal;i++){
			console.log((i+1)+".- "+random[i]);
		}*/
	};
	
	//Checkeja si son happy.
	$.fn.checkHappy = function() {
		//(imHappy, id, color)
		for(var i = 0; i < fitxes.length;i++){
			//var contVerd = 0;
			//var contBlau = 0;
			contigua = 0;
			//for(var j = 0; j < 8;j++){
				if(fitxes[i].imHappy == false){
					if(i%10 == 0){
						if(i == 0){
							//A la primera posició enganxada a l'esquerra.
							$().checkHappyIntern(i,1);
							$().checkHappyIntern(i,10);
							$().checkHappyIntern(i,11);
						}else{
							if(i == maxNumber-(maxNumber/10)+1){
								//A l'última posició enganxada a l'esquerra.
								$().checkHappyIntern(i,-10);
								$().checkHappyIntern(i,-9);
								$().checkHappyIntern(i,1);
							}else{
								//Vol dir que està enganxat a l'esquerra.
								$().checkHappyIntern(i,-10);
								$().checkHappyIntern(i,-9);
								$().checkHappyIntern(i,1);
								$().checkHappyIntern(i,10);
								$().checkHappyIntern(i,11);
							}
						}
					}else{
						if(i%9 == 0){
							if(i == (maxNumber*9)/100){
								//A la primera posició enganxada a la dreta.
								$().checkHappyIntern(i,-11);
								$().checkHappyIntern(i,-10);
								$().checkHappyIntern(i,-1);
								$().checkHappyIntern(i,9);
								$().checkHappyIntern(i,10);
							}else{
								if(i == maxNumber - 1){
									//A l'última posició enganxada a la dreta.
									$().checkHappyIntern(i,-11);
									$().checkHappyIntern(i,-10);
									$().checkHappyIntern(i,-1);
								}else{
									//Vol dir que està enganxat a la dreta.
									$().checkHappyIntern(i,-11);
									$().checkHappyIntern(i,-10);
									$().checkHappyIntern(i,-1);
									$().checkHappyIntern(i,9);
									$().checkHappyIntern(i,10);
								}
							}
						}else{
							//Vol dir que no està enganxat ni a l'esquerra ni a la dreta.
							$().checkHappyIntern(i,-11);
							$().checkHappyIntern(i,-10);
							$().checkHappyIntern(i,-9);
							$().checkHappyIntern(i,-1);
							$().checkHappyIntern(i,1);
							$().checkHappyIntern(i,9);
							$().checkHappyIntern(i,10);
							$().checkHappyIntern(i,11);
						}
					}
				}else{
					//console.log(i+" Ja es Happy o es Null.");
				}
				//console.log(fitxes[i].color+" "+fitxes[i].id+" "+i+" Contigues : "+contigua);
			//}
			//console.log(fitxes[i].imHappy+" "+fitxes[i].id+" "+fitxes[i].color);
		}
		//Al acabar, canviem el color dels Happy.		
		$().canviColorHappy();
	};
	
	$.fn.checkHappyIntern = function(i, contaGuay) {
		if(fitxes[i+contaGuay] != null && fitxes[i+contaGuay].color == fitxes[i].color){
			//console.log(i+contaGuay);
			if(fitxes[i].color != "cap"){
				contigua++;
				if(contigua >= veines){
					fitxes[i].imHappy = true;
					//console.log("faaaak");
				}
			}
		}
	};
	
	$.fn.allowDrop = function(ev) {
		ev.preventDefault();
	};

	$.fn.drag = function(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	};

	$.fn.drop = function(ev) {
		$().preventDefault(ev);
		var data = ev.dataTransfer.getData("text");
		$().target.appendChild(document.getElementById(data));
	};
});