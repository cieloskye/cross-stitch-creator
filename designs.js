// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()



const colorPicker = $('#colorPicker');
const pixelCanvas = $('#pixelCanvas');
const submit = $('input[type="submit"]');

function makeGrid(height, width) {

console.log('makeGrid, make that grid!');
 /* N by M
  Use JavaScript loops to dynamically clear and create the 
  table based on user input. 
  Each cell should have an event listener that sets the 
  background color of the cell to the selected color.
   */
};

//button
submit.on('click', function(event) {

	event.preventDefault();
	console.log('submit listen test');

	const height = $('#inputHeight').val();
	const weight = $('#inputWeight').val();

	makeGrid();
});