function solve(input) {
    let x =  Object.entries(input
        .map( x=> x.split(' : ') )
        .reduce( (a,b) => { a[b[0]] = b[1]; return a },{}))
        .sort( (a,b) => a[0].localeCompare(b[0]) )
    let a = new Set([...x.map(x => x= x[0][0])])
    a.forEach(z => {
       console.log(z)
       x.forEach(x => { if(x[0][0] === z){ console.log(`  ${x[0]}: ${x[1]}`) } }) 
    });     
}
