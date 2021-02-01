function solve() {
    let map = new Map();

    Array.from(arguments).forEach(x => { 
        let type = typeof(x);
        if(!map.has(type)) { 
            map.set(type, 0);
        }
        map.set(type , map.get(type) + 1);
        console.log(`${type}: ${x}`);

    })
 
    Array.from(map.entries()).sort((a,b) => b[1] - a[1])
        .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
}
