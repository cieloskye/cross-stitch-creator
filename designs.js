
const colorPicker = $('#colorPicker');
const pixelCanvas = $('#pixelCanvas');
const submit = $('input[type="submit"]');

function makeGrid(height, width) {

console.log('makeGrid, make that grid!');

 //Clears Canvas
 pixelCanvas.innerHTML = '';

 /* N by M tr & td
  Use JavaScript loops to dynamicallycreate the 
  table based on user input. 
  Each cell should have an event listener that sets the 
  background color of the cell to the selected color.
   */
for(let N = 0, N < gridHeight, i++) {

}

for(let M = 0, M < gridWidth, M++)

pixelCanvas.on.('click', td, () => {


 	$(this).css('background-color', colorPicker.val()0;
 });


    //append($('<tr></tr>'));

	//for while
};

//button
submit.on('click', (event) => {

	event.preventDefault();
	console.log('submit listen test');

	const height = $('#inputHeight').val();
	const weight = $('#inputWeight').val();

	makeGrid();
});