let operator = prompt('Please enter the operation you want to perform: \n \n eg. +, -, /, *');

let num1 = prompt('Number 1');
let num2 = prompt('Number 2');

if (operator == '+') {
    let add = parseInt(num1) + parseInt(num2);
    window.prompt('Result is: '  + add);
} else if (operator == '-') {
    let subt = num1-num2;
    window.prompt('Result is: '  + subt);
} else if (operator == '/') {
    let divide = num1/num2;
    window.prompt('Result is: '  + divide);
} else {
    let mul = num1 * num2;
    window.prompt('Result is: '  + mul);
}