function solve(arr) {
    let i = 0;
    let sortArray = arr.sort((a,b) => a.localeCompare(b)).forEach((x) => { 
        i++;
        console.log(`${i}.${x}`)
    });
}
