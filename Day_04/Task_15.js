// Reusable calculator function
function calculator(number1, number2, operator) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number2 !== 0 ? number1 / number2 : "Error: Division by zero!";
        default:
            return "Error: Invalid operator!";
    }
}

// Example usage
console.log(calculator(10, 5, '+'));  // Output: 15
console.log(calculator(10, 5, '-'));  // Output: 5
console.log(calculator(10, 5, '*'));  // Output: 50
console.log(calculator(10, 5, '/'));  // Output: 2
console.log(calculator(10, 0, '/'));  // Output: Error: Division by zero!
console.log(calculator(10, 5, '%'));  // Output: Error: Invalid operator!