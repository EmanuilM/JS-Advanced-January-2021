function solve(input) {
    let sum = 0;
    let valid = false;
    let checker = input.toString().split('').slice(0,1).map(Number);
    let result = input.toString().split('').map(Number).forEach(x => {
        if(x === checker[0]) { 
            valid = true;
        }else { 
            valid = false;
        }
        sum += x;
    });

    console.log(valid);
    console.log(sum);
    
}
