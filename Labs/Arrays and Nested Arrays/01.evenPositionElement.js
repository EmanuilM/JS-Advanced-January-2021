function solve(arr) {
    let output = [];
    arr.forEach((element , i ) => {
        if(i % 2 === 0) { 
            output.push(element);
        }
    });

       return output.join(' ');
}
