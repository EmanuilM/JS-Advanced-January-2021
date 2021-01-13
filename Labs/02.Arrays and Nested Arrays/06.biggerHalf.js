function solve(arr) {
    let output = arr.sort((a,b) => a-b);
    return output.slice(output.length / 2)
}
