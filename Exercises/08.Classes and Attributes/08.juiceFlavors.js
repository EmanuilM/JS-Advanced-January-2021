function solve(input) {
    let obj = {};
    let madeBottles = {};
    input.forEach(element => {
        let [juice , quantity] = element.split(' => ');
        quantity = Number(quantity);
        
        if(obj[juice]) { 
            obj[juice] += quantity;
        }else { 
            obj[juice] = quantity;
        }

        if(obj[juice] >= 1000) { 
            if(madeBottles[juice]) { 
                madeBottles[juice] += parseInt(obj[juice] / 1000);
            }else { 
                madeBottles[juice] = parseInt(obj[juice] / 1000);
            }

            obj[juice] = obj[juice] % 1000;
        }
        
    });

    Object.entries(madeBottles).forEach(([key , value]) => { 
        console.log(`${key} => ${value}`);
   })

}
