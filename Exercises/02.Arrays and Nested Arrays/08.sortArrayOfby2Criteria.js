function solve(arr) {
    let output = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    return output.join('\n')
}
