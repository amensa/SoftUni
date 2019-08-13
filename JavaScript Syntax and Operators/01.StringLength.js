// 1. String Length
// Write a JS function that takes three string arguments as an input.
// Calculate the sum of the lengths of the strings and the average length of the strings rounded
// down to its nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed to the console in two rows.

function stringLength(a, b, c) {
    let first = a.length;
    let second = b.length;
    let third = c.length;
    let sum = first + second + third;
    let average = Math.floor(sum/3);
    console.log(sum);
    console.log(average);
}

