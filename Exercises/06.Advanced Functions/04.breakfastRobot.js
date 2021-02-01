function solve() {
    let availableProducts = { 
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    
    const receipts = { 
        apple: { 
            carbohydrate : 1,
            flavour: 2,
        },
        lemonade: { 
            carbohydrate: 10,
            flavour : 20,
        },
        burger: { 
            carbohydrate : 5,
            fat: 7,
            flavour: 3,
        },
        eggs: { 
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: { 
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    let commands = { 
        restock: (product , quantity) => { 
          availableProducts[product] += quantity;
          return 'Success';
        },
        prepare: (product , quantity) => { 
            let currentProduct =  Object.entries(receipts[product])
            for (const [key,value] of currentProduct) {
                if(availableProducts[key] < value * quantity) { 
                    return `Error: not enough ${key} in stock`
                }
            }

            currentProduct.forEach(item => {
                availableProducts[item[0]] -= item[1] * quantity;
            });

            return 'Success';
        },
        report: () => { 
            return Object.entries(availableProducts).map(([item , quantity]) =>`${item}=${quantity}`).join(" ")
        }
    }

    return function(str) {
        let [cmd , product , quantity] = str.split(' ');
        quantity = Number(quantity);
        return commands[cmd](product,quantity);
    }
}
