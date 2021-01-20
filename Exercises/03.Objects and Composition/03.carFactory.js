function solve(input) {


    let availableComponents = [ 

            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 },
    ]

    let cariages = { 
        Hatchback: { type: 'hatchback', color: undefined },
        Coupe: { type: 'coupe', color: undefined },
    }

    let result = {
        model : input.model,
        engine: availableComponents.find(x => input.power <= x.power),
        carriage: {type: input.carriage , color: input.color},
        wheels: Array(4).fill(input.wheelsize  % 2 == 0 ? --input.wheelsize : input.wheelsize),
    };
    

    return result;

}
