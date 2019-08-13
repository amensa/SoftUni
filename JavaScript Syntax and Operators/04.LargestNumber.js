// 4. Largest Number
// Write a JS function that takes three number arguments as an input and find the largest of
// them.Print the following text on the console: &#39; The largest number is { number }.&#39;.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.


function largestNumber(num1, num2, num3) {
    let first = Number(num1);
    let second = Number(num2);
    let third = Number(num3);

    if (first>second && first>third){
        console.log(`The largest number is ${first}.`);
    } else if(second>first && second>third){
        console.log(`The largest number is ${second}.`);
    } else if(third>first && third>second){
        console.log(`The largest number is ${third}.`);
    } else{
        console.log(`There is more than one largest number.`);
    }
}