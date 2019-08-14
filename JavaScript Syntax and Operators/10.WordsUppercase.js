// 10.	*Words Uppercase
// Write a program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.


function upperCase(input){
    let arr1 = input.split(` `);
    let arr2 = [];

    for (let i = 0; i < arr1.length; i++) {
        arr2.push((arr1[i].replace(/[^\w]/g, ' ')));
    } 
    let string1 = arr2.join(' ');
    let arr3 = string1.split(` `);
    let arr4 = [];
    for (let k = 0; k < arr3.length; k++) {
        if(arr3[k] !== ''){
            arr4.push(arr3[k]);
        }            
    }
    let concat = arr4.join(', ');
    console.log(concat.toUpperCase());
}
