function solve(arr , criteria) {
    criteria === 'asc' ? arr.sort((a,b) => a - b) : arr.sort((a,b) => b - a);
    return arr;
}
