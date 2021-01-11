function solve(input) {
    let checkInput = typeof input;
    if(checkInput === 'number') { 
        return (Math.pow(input,2) * Math.PI).toFixed(2);
    }else { 
        return `We can not calculate the circle area, because we receive a ${checkInput}.`
    }
}
