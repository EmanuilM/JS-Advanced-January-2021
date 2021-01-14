function solve(arr) {
    let isMagicMatrix=true
    arr.forEach(row => {
        let rowSum=row.reduce((a , c)=> a+ c, 0)
        for(let i=0;i<arr.length;i++) {
            let columnSum=0
            arr.forEach(x=> {
                columnSum+=x[i] 
            })
            if(rowSum !==columnSum) {
                isMagicMatrix=false
            }
        }
    })
    return isMagicMatrix
}
