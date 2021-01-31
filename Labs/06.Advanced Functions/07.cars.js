function solve(data) {
    let carBuilder = () => {
        let car = {};
        return {
            create: (name, inherit, parent) => {
                car[name] = inherit ? Object.create(car[parent]) : {}
            },
            set: (name, key, value) => car[name][key] = value,
            print: (name) => {
                let result = [];
                for (const key in car[name]) {
                    result.push(`${key}:${car[name][key]}`)
                }
                console.log(result.join(', '));
            }
        }
    }
    let factory = carBuilder();
    data.map(x => x.split(' '))
        .map(([cmd, ...props]) => factory[cmd].apply(undefined,props))
}
