function solve(arr) {
    let xSum=0
    let ySum=0
    let i=0
    arr.forEach(x=> {
        xSum+=x[i]
        ySum+=x[x.length-1-i]
        i++
    })
    return [xSum , ySum].join(" ")
}
