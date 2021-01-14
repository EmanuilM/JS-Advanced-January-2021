function solve(arr , rotations) {
    for(let i=0;i<rotations;i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(" ")
}
