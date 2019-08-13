// 3. Sum of Numbers N…M
// Write a JS function that takes two numbers n and m as an input and prints the sum of all
// numbers from n to m.
// The input comes as two string elements that need to be parsed as a number.
// The output should be returned as a result of your function.


function sumOfNumbers(a,b){
    let first = Number(a);
    let second = Number(b);

    let result = 0;
    for (let i = first; i <= second; i++) {
        result += i;       
    }
    console.log(result);
}