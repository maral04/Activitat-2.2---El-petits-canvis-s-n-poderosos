$( document ).ready(function(){
	
	//Deshabilitar mouseover fins que s'hagi creat tot.
	//$().mouseover().off();
	
	$().generarTaulell();
	
	$().generarRandom();
	
	$("#botostart").click(function() {
		$().omplirFitxes();
		$().checkHappy();
		//Deshabilitar
	});
	
	//Click dels bichus per moure'ls.
	//Només amb e.button == 0 (left).
	$('.cols').mousedown(function(e) {
		if(e.button == 0 && $(this).attr('class').split(' ')[1] != 'ui-droppable'){
			//Aumento el z-Index així no es tapen les que estic movent.
				$(this).zIndex(contZ);
				contZ++;
			
				checkId = $(this).attr('id').substring(1);
				$().checkHappy();
			
			
			
			/*classDraggada = $(this).attr('class').split(' ')[1];
			console.log(classDraggada);*/
			//console.log('mousedown');
			$(this).mouseup(function(e) {
				if(e.button == 0){
					//beingDragged = document.getElementById(('c'+checkId));
					//console.log(beingDragged);
					//$(this).draggable('disable');
					draggedClass = $(this).attr('class').split(' ')[1];
					//beingDragged = this;
					
					$(this).replaceWith('<td id="c'+checkId+'" class="cols"></td>');
					$().afegirDroppable(checkId);
					//$(this).droppable('enable');
					
					//console.log(beingDragged);
					//console.log('mouseup');
					//$().checkHappy();
				}
			});
			/*
			if((fitxes[checkId].imHappy) != null){
				if((fitxes[checkId].imHappy) == false){

					//console.log('imNotHappy :(');
					//$(this).css("background-color","rgb(55,255,245)");
					
				}else{
					
					//console.log('imHappy :)');
				}
			}*/
		}
	});
});