$( document ).ready(function(){
		
	//Genera la taula de 10x10.
	$.fn.generarTaulell = function() {
		var taula = $('<table class="table"></table>');
		var col, row, numerico;
		
		$('.container').append(taula);
		for(var i = 0; i < maxNumber;i++){
			col = $('<td id="c'+(i)+'" class="cols"></td>');
			fitxes[i] = new fitxa(null,i,"cap");
			//Per a fer els salts de línia.
			if( i == 0 || i%10 == 0 ){
				numerico = (i/10);
				row = $('<tr id="r'+((i/10))+'" class="rows"></tr>');
				$('.table').append(row);
				$('#r'+numerico).append(col);
			}else{
				$('#r'+numerico).append(col);
			}
		}
	};
	
	//Constructor de fitxa.
	function fitxa(imHappy, id, color) {
		this.imHappy = imHappy;
		this.id = id;
		this.color = color;
	};
	
	$.fn.omplirFitxes = function() {
		totalGreen = (percGreen / maxNumber)*coloredTotal;
		totalBlue = coloredTotal - totalGreen;
		//console.log("Verdes (Gat): "+totalGreen+" | Blaves (Àliga): "+totalBlue)
		//var asdverd = 0, asdblau = 0;
		for(var i = 0; i < coloredTotal;i++){
			if(i < totalGreen){
				$('#'+'c'+(random[i])).attr('class', 'cols verd');
				fitxes[random[i]] = new fitxa(false,random[i],"verd");
				//asdverd++;
			}else{
				$('#'+'c'+(random[i])).attr('class', 'cols blau');
				fitxes[random[i]] = new fitxa(false,random[i],"blau");
				//asdblau++;
			}
		}
		//console.log("Verdes (Gat): "+asdverd+" | Blaves (Àliga): "+asdblau)
		/*
		for(var i = 0; i < maxNumber;i++){
			console.log(fitxes[i].imHappy+" "+fitxes[i].id+" "+fitxes[i].color);
		}*/
		
	};
	
	$.fn.canviColorHappy = function() {
		for(var i = 0; i < fitxes.length;i++){
			if(fitxes[i].imHappy != null){
				if(fitxes[i].imHappy == true){
					$('#c'+fitxes[i].id).css("cursor","not-allowed");
					//console.log(i+' imHappy :)');
					$('#c'+fitxes[i].id).css("background-color","rgb(55,255,245)");
					//$('#c'+fitxes[i].id).attr("draggable", "False");
					
					
				}else{
					$('#c'+fitxes[i].id).css("cursor","move");
					$('#c'+fitxes[i].id).draggable();
					//console.log(i+' imNotHappy :(');
					//$('#c'+fitxes[i].id).attr("draggable", "True");
					
					
				}
			}else{
				$().afegirDroppable(fitxes[i].id);

			}
		}
	};
	
	$.fn.afegirDroppable = function(idInterna) {
		
		$('#c'+idInterna).droppable({
			drop: function(e, ui) {
				var off = $( this ).offset();
				
				
				saveId = $( this ).attr('id');
				//console.log(this);
				
				//console.log(saveId);
				$( this ).replaceWith(beingDragged);
				
				//console.log(this);
				
				//Suda de mi completament:
				$( this ).attr('id',saveId);
				//$( this ).attr('id','c'+fitxes[saveId.substring(1)].id);
				
				//Ho mostra bé a la consola, pero no a l'html!
				console.log("ID! "+$(this).attr('id'));
				
				//console.log('Dropped');
				//Deshabilita el droppable un cop s'ha dropped.
				//$( this ).droppable( "option", "disabled", true );
				
				//Per evitar l'offset del maleït ui!!!!
				ui.draggable.offset( off );
				
				//Al fer el canvi entre tds, també afecta als objectes, 
				//aquest canvien les propietats.
				var intercanviHappy, intercanviId, intercanviColor;
				
				intercanviHappy = fitxes[checkId].imHappy;
				//intercanviId = fitxes[checkId].id;
				intercanviColor = fitxes[checkId].color;
				
				fitxes[checkId].imHappy = fitxes[saveId.substring(1)].imHappy;
				//fitxes[checkId].id = fitxes[saveId.substring(1)].id;
				fitxes[checkId].color = fitxes[saveId.substring(1)].color;
				
				fitxes[saveId.substring(1)].imHappy = intercanviHappy;
				//fitxes[saveId.substring(1)].id = intercanviId;
				fitxes[saveId.substring(1)].color = intercanviColor;				
				
				console.log(checkId 
				+" | "+ fitxes[checkId].imHappy
				+" "+ fitxes[checkId].id
				+" "+ fitxes[checkId].color
				);
				
				console.log(saveId.substring(1) 
				+" | "+ fitxes[saveId.substring(1)].imHappy
				+" "+ fitxes[saveId.substring(1)].id
				+" "+ fitxes[saveId.substring(1)].color
				);
			}
		});
	};
});