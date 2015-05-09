$( document ).ready(function(){
	
	//Deshabilitar mouseover fins que s'hagi creat tot.
	//$().mouseover().off();
	
	$().generarTaulell();
	
	$().generarRandom();
	
	$("#botostart").click(function() {
		$().omplirFitxes();
		$().checkHappy();
	});
	
	//Click dels bichus per moure-l's.
	$('.cols').mousedown(function() {
		checkId = $(this).attr('id').substring(1);

		if((fitxes[checkId].imHappy) != null){
			if((fitxes[checkId].imHappy) == false){
				//Aumento el z-Index així no es tapen les que estic movent.
				$(this).zIndex(contZ);
				contZ++;
				
				//console.log('imNotHappy :(');
				//$(this).css("background-color","rgb(55,255,245)");
				
			}else{
				
				//console.log('imHappy :)');
			}
		}
	});
});