function solve(input) {
    let result = {};
    input.forEach(element => {
        let [city , population] = element.split(' <-> ');
        population = Number(population);
        if(result[city]) { 
            result[city] += population;
        }else { 
            result[city] = population;
        }

    });
    Object.entries(result).forEach(x => console.log(`${x[0]} : ${x[1]}`))
}
