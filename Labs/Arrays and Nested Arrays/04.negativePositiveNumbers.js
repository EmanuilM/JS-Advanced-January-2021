function solve(arr) {
    let result = [];
    arr.forEach(element => element < 0 ? result.unshift(element) :  result.push(element));

    return result;
}
