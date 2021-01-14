function solve(arr) {
    let num = Number.MIN_SAFE_INTEGER;
    let output = [];
    arr.forEach(element => {
        if(element >= num) { 
            num = element;
            output.push(num);
        }
    })

    return output
   
}
