function solve(input) {
    let result = input.reduce((a , b) => { 
        let [car , model , producedCars] = b.split(' | ');
        producedCars = Number(producedCars);
        if(a.has(car)) { 
            if(a.get(car).has(model)) { 
                let oldValue = a.get(car).get(model);
                oldValue += producedCars;
                let setValue = a.get(car).set(model , oldValue);
                a.set(car , setValue);
            }else { 
                let newVal = a.get(car).set(model , producedCars);
                a.set(car , newVal);
            }
  
        }else { 
            let idk = new Map();
            idk.set(model , producedCars);
            a.set(car , idk);
        }
  
        return a;
  
    } , new Map());
  
    Array.from(result.entries()).forEach(x => { 
        console.log(x[0]);
        Array.from(x[1].entries()).forEach(y => { 
            console.log(`###${y[0]} -> ${y[1]}`);
        })
    })
   
  }
