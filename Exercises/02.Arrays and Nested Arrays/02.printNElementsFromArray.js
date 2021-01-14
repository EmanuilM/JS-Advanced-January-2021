function solve(arr,n) {
    let output = arr.reduce((a,b,i) => { 
        if(i % n === 0) { 
            a.push(b);
        }

        return a;
    },[])

   return output;
}
