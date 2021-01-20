function solve(arr) {
    let obj = {};
   for (let i = 0; i < arr.length; i++) {
       if(i % 2 === 0) { 
        obj[arr[i]] = Number(arr[i+ 1]);
       }
   }
   return obj;
}
