let input;
let checkButton;
let exptext = '8 2 + 5 * 9 + 3 / 2 -';
let infixtext = '(((((8 + 2) * 5) + 9) / 3) - 2)';

function setup() {
	createCanvas(windowWidth, windowHeight); // Set canvas size to fill the screen

	// Create a text input box
	input = createInput(exptext);
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
	text('RPN: ' + exptext, 20, 100); // postfix
	text('infix: ' + infixtext, 20, 140); // normal

	// Visualize the RPN stack
	let stack = exptext.split(" ");
	let x = 20;
	let y = 180;
	textSize(32); // Set the text size for the stack elements
	for (let i = 0; i < stack.length; i++) {
		let tWidth = textWidth(stack[i]) + 10; // Calculate the width of the rectangle
		rect(x, y, tWidth, 40); // Draw a rectangle for each stack element
		text(stack[i], x + 5, y + 30); // Display the stack element value
		x += tWidth + 10; // Move the x position for the next rectangle
	}
}

function errorCheck(exp) {
	const counter = [];

	const tokens = exp.split(" ");

	for (const token of tokens) {
	if (!isNaN(token) || (token[0] === '-' && token.length > 1))
		counter.push(0);
	else if (token === "+" || token === "-" || token === "*" || token === "/") {
		if (counter.length < 2)
			return false;
		counter.pop(); // Pop one operand for the operator
		counter.pop(); // Pop the second operand for the operator
		counter.push(0); // Push the result back onto the stack
	}
	else
		return false;
	}
	return counter.length === 1;
}

function checkRPN() {
	let exp = input.value().trim(); // Get the input value and remove leading/trailing spaces

	// Regular expression to match valid RPN expression
	let rpnRegex = /^(\d+(\.\d+)?|\+|\-|\*|\/|\s)+$/;

	if (!errorCheck(exp) || !rpnRegex.test(exp) || exp.length === 0 || exp === ' ') {
		alert('Not a valid RPN expression!');
		return ;
	}
	exptext = exp;
	infixtext = rpnToInfix(exp);
}

function rpnToInfix(rpn) {
	let stack = [];
	let operators = ['+', '-', '*', '/'];

	// Split the RPN expression by spaces
	let tokens = rpn.split(' ');

	for (let token of tokens) {
		if (operators.includes(token)) {
			let operand2 = stack.pop();
			let operand1 = stack.pop();
			stack.push(`(${operand1} ${token} ${operand2})`);
		} else {
			stack.push(token);
		}
	}

	return stack[0];
}

// Resize canvas when the window is resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
