function starSquare(input){
    let a = input;
    let line = '';

    if (typeof(a) === 'number'){
        for (let i = 0; i < a; i++) {
            line += "* ";           
        }
        for (let j = 0; j < a; j++) {
            console.log(line);
        }
    } else{
        line = '* * * * *';
        for (let j = 0; j < 5; j++) {
            console.log(line);
        }
    }
}