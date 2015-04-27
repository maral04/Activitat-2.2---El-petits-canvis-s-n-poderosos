$( document ).ready(function(){
	
	//Genera la taula de 10x10.
	$.fn.generarTaulell = function() {
		var taula = $('<table class="table"></table>');
		var col, row, numerico;
		
		$('.container').append(taula);
		for(var i = 0; i < 100;i++){
			col = $('<td id="c'+(i+1)+'"class="cols">'+(i+1)+'</td>');
			
			//Per a fer els salts de línia.
			if( i == 0 || i%10 == 0 ){
				numerico = (i/10)+1;
				row = $('<tr id="r'+((i/10)+1)+'" class="rows"></tr>');
				$('.table').append(row);
				$('#r'+numerico).append(col);
			}else{
				$('#r'+numerico).append(col);
			}
		}
	};

	
	
	
	
});