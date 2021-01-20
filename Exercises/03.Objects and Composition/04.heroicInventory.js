function solve(input) {
    let heroes = [];
    let data = input.map(x => x.split(' / ')).forEach(element => {
      element[2] = element[2] ? element[2].split(', ') : [];
    heroes.push({name: element[0] , level: Number(element[1]) , items: element[2]});
   });
   return JSON.stringify(heroes);
}
