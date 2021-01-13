function solve(arr) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let searchThroughNumbers = arr.map(x => x.forEach(currentNumber => {
       if(currentNumber > biggestNumber) { 
           biggestNumber = currentNumber;
       }
   }));

   return biggestNumber;
}
