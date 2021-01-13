function solve(arr) {
    let pairs=0
    arr.forEach((row , i) => {
        row.forEach((el , x)=> {
            if(el===row[x+1]) {
                pairs++
            }
            if(arr[i+1]&& el===arr[i+1][x]) {
                pairs++
            }
        })
    })
    return pairs
}
