// 5. Circle Area
// Write a JS function that takes a single argument as an input.
// Check the type of the input argument.If it is a number, assume it is the radius of a circle and
// calculate the circle area.Print the area rounded to two decimal places.
// If the argument type is different than a number, print the following text on the console: &#39; We
// can not calculate the circle area, because we receive a { type of argument }.&#39;
// The input comes as a single argument passed to your function.
// The output should be printed to the console.


function circleArea(input) {
    let inputType = typeof (input);

    if (inputType === 'number') {
        let circleAreaCalculated = ((input ** 2) * Math.PI).toFixed(2);
        console.log(circleAreaCalculated);
    } else{
        console.log(` We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}