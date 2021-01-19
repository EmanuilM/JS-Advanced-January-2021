function solve(library, orders) {
    return orders.map( x => {
        return Object.assign({}, x.template, x.parts.reduce((a,b) =>  Object.assign(a, {[b]: library[b]}) , {}))
    })
}
