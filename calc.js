const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero";
  }
}

let num1;
let num2;

rl.question('Enter first number: ', (input1) => {
  num1 = parseFloat(input1); // Convert input to a floating-point number
  rl.question('Enter second number: ', (input2) => {
    num2 = parseFloat(input2); // Convert input to a floating-point number

    // Perform calculations inside the callback to ensure they happen after user input
    console.log(`Addition: ${add(num1, num2)}`);
    console.log(`Subtraction: ${subtract(num1, num2)}`);
    console.log(`Multiplication: ${multiply(num1, num2)}`);
    console.log(`Division: ${divide(num1, num2)}`);

    rl.close(); // Close the readline interface after calculations
  });
});
