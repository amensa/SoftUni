// 8.	Functional Calculator
// Write a program that receives two numbers and an operator and performs a calculation between the variables, using the operator.Store the different functions in variables and pass them to your calculator.
// The input comes as three arguments - two numbers, and a string, representing the operator.
// The output should be printed on the console.

// *** Identical with Math Operations ***

function MathOperations(num1, num2, operator) {
    let first = Number(num1);
    let second = Number(num2);
    let result;

    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        case '**':
            result = first ** second;
            break;
        case '%':
            result = first % second;
            break;
        default:
            break;
    }
    console.log(result);
}