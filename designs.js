


//GLOBAL VARIABLES
const pixelCanvas = $('#pixelCanvas');
let stitch = true;

//This will create the canvas once user input is received.
function makeGrid(height, width) {

	//Creates canvas
	for(let n = 0; n < height; n++) {
		pixelCanvas.append($('<tr></tr>'));
		
		for(let m = 0; m < width; m++){
			$('tr').last().append($('<td></td>'));
		};
	};

	//Colors in pixel boxes
	$('#pixelCanvas').on('click', 'td', function(c) {
	 	if(stitch === true) {
			$(this).css('background-color', $('#colorPicker').val());
		} else {
			$(this).css('background-color', '');
		}
	 	
	});
};

//Handle the submit button click, and call makeGrid().
$('input[type="submit"]').on('click', (event) => {
	
	event.preventDefault();

	//pulls in height & Width data
	const height = $('#inputHeight').val();
	const width = $('#inputWidth').val();
	
	//Clears Canvas
 	pixelCanvas.empty();

 	//Calls function
	makeGrid(height, width);
});


$('input[name="needle"]').on('change', function() {
	if($(this).val() === 'stitch') {
		stitch = true;
	} 

	else if($(this).val() === 'unthread') {
		stitch = false;
	};
});



