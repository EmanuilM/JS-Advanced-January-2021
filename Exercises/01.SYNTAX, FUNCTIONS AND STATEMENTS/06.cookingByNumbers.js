function solve(...arr) {
    let num = arr.shift();
    arr.forEach(element => {
        if(element === 'chop') { 
            num = num / 2;
            console.log(num);
        }else if (element === 'dice') { 
            num = Math.sqrt(num);
            console.log(num);
        }else if(element === 'spice') { 
            num += 1;
            console.log(num);
        }else if(element === 'bake') { 
            num = num * 3;
            console.log(num);
        }else if(element === 'fillet') { 
            num = num * 0.80;
            console.log(num.toFixed(1));
        }
    });
}
