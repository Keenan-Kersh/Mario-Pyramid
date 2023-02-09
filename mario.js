let heightRange = document.getElementById("height");
let heightDisplay = document.querySelector("output");
let symbol = document.getElementById("material");

heightRange.addEventListener("input", () => {
	determineHeightAndThenDrawPyramid();
	heightDisplay.innerHTML = heightRange.value;
});
symbol.addEventListener("change", () => {determineHeightAndThenDrawPyramid()});


/*
 * drawPyramid
 *
 * Adds to the DOM a pyramid of '#' characters of the specified height
 * For example, if height is 5, the result will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function drawPyramid(height, width = height+1) {
	document.getElementById("pyramid").innerHTML = "";
	
	if(height <= 0) {
		console.log("Error: Pyramid height out of range");
		return;
	}
	
	if(height != 1) {
		drawPyramid(height-1, width);
	}
	
	let rowStr = document.createTextNode(`${"\u00a0".repeat(width - (height + 1))}${symbol.value.repeat(height + 1)}`);
	let rowParagraph = document.createElement("p");
	rowParagraph.appendChild(rowStr);
	document.getElementById("pyramid").appendChild(rowParagraph);

}

function determineHeightAndThenDrawPyramid() {
	console.log("Drawing pyramid...");
	let pyramidHeight = parseInt(heightRange.value);

	if(isNaN(pyramidHeight)) {
		console.log("Invalid height!");
		return;
	}

	drawPyramid(pyramidHeight);
}

determineHeightAndThenDrawPyramid();
