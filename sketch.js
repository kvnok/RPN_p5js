let input;
let checkButton;
let stack = [];
let validExpression = false;

function setup() {
  createCanvas(windowWidth, windowHeight); // Set canvas size to fill the screen
  
  // Create a text input box and pre-fill with the expression
  input = createInput("8 2 + 5 * 9 + 3 / 2 -");
  input.position(20, 20); // Set the position of the input box
  
  // Create a button
  checkButton = createButton('Check RPN');
  checkButton.position(20, 50);
  checkButton.mousePressed(checkRPN); // Call checkRPN() when button is pressed
}

function draw() {
  background(220);
  
  // Draw stack of operators and operands if expression is valid
  if (validExpression) {
    let x = width / 2 - 50; // Initial x position
    let y = height / 2 - 50; // Initial y position
    let squareSize = 50; // Size of each square
    
    for (let i = 0; i < stack.length; i++) {
      fill(255, 0, 0); // Red square
      rect(x, y, squareSize, squareSize); // Draw square
      
      // Display element under the square
      textAlign(CENTER, CENTER);
      fill(0); // Black text
      text(stack[i], x + squareSize / 2, y + squareSize + 20); // Draw element
      
      // Move to next position
      x += squareSize + 10; // Add some space between squares
    }
  }
}

function checkRPN() {
  let expression = input.value().trim(); // Get the input value and remove leading/trailing spaces
  
  // Regular expression to match valid RPN expression
  let rpnRegex = /^(\d+(\.\d+)?|\+|\-|\*|\/|\s)+$/;

  if (rpnRegex.test(expression)) {
    validExpression = true;
    parseRPN(expression);
  } else {
    alert('Not a valid RPN expression:\n' + expression);
    validExpression = false;
  }
}

// Parse RPN expression to extract operators and operands
function parseRPN(expression) {
  stack = expression.split(/\s+/); // Split expression by whitespace to get individual elements
}

// Resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
