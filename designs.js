
//const submit = ;

//This will create the canvas once user input is received.
function makeGrid(height, width) {
	const colorPicker = $('#colorPicker');
	const pixelCanvas = $('#pixelCanvas');



	//Creates canvas
	for(let n = 0; n < height; n++) {
		pixelCanvas.append($('<tr></tr>'));
		console.log($('#inputHeight'));

		for(let m = 0; m < width; m++){
			$('tr').last().append($('<td></td>'));
			console.log($('#inputWidth'));

		};
	};

//Handles pixel color
//pixelCanvas.on.('click', td, () => {
// 	$(this).css('background-color', colorPicker.val()0;
// });
};

//Handle the submit button click, and call makeGrid().
$('input[type="submit"]').on('click', (event) => {
	event.preventDefault();

	//pulls in height & Width data
	let height = $('#inputHeight').val();
	let width = $('#inputWidth').val();
	
	//Clears Canvas
 	$('#pixelCanvas').empty();

 	//Calls function
	makeGrid(height, width);
	console.log(height, width);
});