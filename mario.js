

let pyramidHeight = parseInt(prompt("How tall shold the pyramid be?"));
if(isNaN(pyramidHeight)) {
	console.log("Error: User input isn't an integer");
}
else {
	printPyramid(pyramidHeight);
}
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height, width = height+1) {
		if(height <= 0) {
			console.log("Error: Pyramid height out of range");
			return;
		}
		if(height != 1) {
    	printPyramid(height-1, width);
		}
		let rowStr = document.createTextNode(`${".".repeat(width - (height + 1))}${"#".repeat(height + 1)}`);
		let rowParagraph = document.createElement("p");
		rowParagraph.appendChild(rowStr);
		document.getElementById("pyramid").appendChild(rowParagraph);

}
