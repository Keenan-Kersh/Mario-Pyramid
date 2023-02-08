let heightBox = document.getElementById("height");

let button = document.getElementById("pyramidbutton");

button.addEventListener("click", () => {determineHeightAndThenDrawPyramid()});

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
	
	let rowStr = document.createTextNode(`${".".repeat(width - (height + 1))}${"#".repeat(height + 1)}`);
	let rowParagraph = document.createElement("p");
	rowParagraph.appendChild(rowStr);
	document.getElementById("pyramid").appendChild(rowParagraph);

}

function determineHeightAndThenDrawPyramid() {
	console.log("Button pressed!");
	let pyramidHeight = parseInt(heightBox.value);

	if(isNaN(pyramidHeight)) {
		console.log("Invalid height!");
		return;
	}

	drawPyramid(pyramidHeight);
}
