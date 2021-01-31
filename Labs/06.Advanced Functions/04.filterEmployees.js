function solve(data , criteria) {
    let [key , value] = criteria.split('-');
     JSON.parse(data).filter(x => x[key] === value || key =='all')
     .forEach((x , i) => {
         console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`);
     });
 }
