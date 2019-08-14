// 9.	Aggregate Elements
// Write a program that performs different operations on an array of elements.Implement the following operations:
// •	Sum(ai) - calculates the sum all elements from the input array
// •	Sum(1 / ai) - calculates the sum of the inverse values(1 / ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

function MathOperations(input){
    let arr = input.map(Number);
    let sum = 0;
    let invertedSum = 0;
    let concat = '';

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        invertedSum += (1/arr[i]);
        concat += `${arr[i]}`;
    }

    console.log(sum);
    console.log(invertedSum);
    console.log(concat);
}
