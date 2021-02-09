function solve(arr , cmd) {
    let result = [];
    class Ticket { 
        constructor(destination , price , status) { 
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

    }

  arr.forEach(element => {
      let [x , y , status] = element.split('|');
      result.push(new Ticket(x,y,status));
  });

  let output = result.sort((a,b) => { 
      if(cmd === 'price') { 
        return a.price - b.price;
      }else { 
       return a[cmd].localeCompare(b[cmd]);
      }
  })

  return output;
    
}
