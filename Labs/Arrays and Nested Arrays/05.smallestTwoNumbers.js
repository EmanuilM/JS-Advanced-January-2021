function solve(arr = []) {
    let checker =  arr.sort((a,b) => a - b).splice(0,2).join(' ')
       return checker;
}
