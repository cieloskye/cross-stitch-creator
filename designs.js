
//const submit = ;

//This will create the canvas once user input is received.
function makeGrid(height, width) {
	const colorPicker = $('#colorPicker');
	const pixelCanvas = $('#pixelCanvas');

	


	console.log('makeGrid, make that grid!');

 	//Clears Canvas
 	pixelCanvas.innerHTML = '';

	//Creates canvas
	for(let n = 0; n < height; n++) {
		pixelCanvas.append($('<tr></tr>'));
	};

	for(let m = 0; m < width; m++){
		$('tr').last().append($('<td></td>'));
	};

//Handles pixel color
//pixelCanvas.on.('click', td, () => {
// 	$(this).css('background-color', colorPicker.val()0;
// });
};

//Handle the submit button click, and call makeGrid().
$('input[type="submit"]').on('click', (event) => {
	
	event.preventDefault();
	console.log('submit listen test');

	const height = $('#inputHeight').val();
	const weight = $('#inputWeight').val();

	makeGrid();
});