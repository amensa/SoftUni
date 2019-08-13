// 2. Math Operations
// Write a JS function that takes two numbers and a string as an input.
// The string may be one of the following: &#39; +&#39;, &#39; -&#39;, &#39;*&#39;, &#39; /&#39;, &#39;%&#39;, &#39;**&#39;.
// Print on the console the result of the mathematical operation performed by both numbers
// and the mathematical operator you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed to the console.



function MathOperations(num1, num2, operator) {
    let first = Number(num1);
    let second = Number(num2);
    let result;

    switch (operator) {
        case '+':
            result = first+second;
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