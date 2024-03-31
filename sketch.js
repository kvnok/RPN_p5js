let input;
let checkButton;
let expressiontext = '8 2 + 5 * 9 + 3 / 2 -';

function setup() {
	createCanvas(windowWidth, windowHeight); // Set canvas size to fill the screen

	// Create a text input box
	input = createInput('8 2 + 5 * 9 + 3 / 2 -');
	input.position(20, 20); // Set the position of the input box

	// Create a button
	checkButton = createButton('Check RPN');
	checkButton.position(20, 50);
	checkButton.mousePressed(checkRPN); // Call checkRPN() when button is pressed
}

function draw() {
	background('#FFF'); // Set the background color to white

	// Display the input text
	textSize(32);
	text('Input:', 20, 100);
	textSize(24);
	text(expressiontext, 20, 150);
}

function checkRPN() {
	let expression = input.value().trim(); // Get the input value and remove leading/trailing spaces

	// Regular expression to match valid RPN expression
	let rpnRegex = /^(\d+(\.\d+)?|\+|\-|\*|\/|\s)+$/;

	if (rpnRegex.test(expression)) {
		expressiontext = expression;
	} else {
		alert('Not a valid RPN expression!');
	}
}

// Resize canvas when the window is resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
