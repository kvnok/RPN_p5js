let input;
let checkButton;

function setup() {
	createCanvas(windowWidth, windowHeight); // Set canvas size to fill the screen

	// Create a text input box
	input = createInput();
	input.position(20, 20); // Set the position of the input box

	// Create a button
	checkButton = createButton('Check RPN');
	checkButton.position(20, 50);
	checkButton.mousePressed(checkRPN); // Call checkRPN() when button is pressed
}

function draw() {
	background(220);
}

function checkRPN() {
	let expression = input.value().trim(); // Get the input value and remove leading/trailing spaces

	// Regular expression to match valid RPN expression
	let rpnRegex = /^(\d+(\.\d+)?|\+|\-|\*|\/|\s)+$/;

	if (rpnRegex.test(expression)) {
		alert('Valid RPN expression!');
	} else {
		alert('Not a valid RPN expression!');
	}
}

// Resize canvas when the window is resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
