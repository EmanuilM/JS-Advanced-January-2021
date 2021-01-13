function solve(arr = []) {
    let result = [];
    for (let i= 0; i < arr.length; i++) {
        if(i % 2 === 1) { 
            result.push(arr[i] * 2 );
        }
        
    }
    result = result.reverse();
   return result.join(' ');
}
