function solve(arr) {
    let output = arr.sort((a, b) => a - b).reduce((a, _, i, arr) => {
        a.push(arr[i])
        a.push(arr[arr.length - i - 1])
        return a
    }, [])
    return output.slice(0, output.length / 2)
}
