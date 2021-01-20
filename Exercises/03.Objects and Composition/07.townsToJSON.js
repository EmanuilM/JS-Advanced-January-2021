function solve(input) {
    let data = input.splice(1).map(x => x.split('| ')
    .filter(y => y !== '')
    .map(z => z.split(' |'))
    .map(x => x.join('')
    .trim()))
    .reduce((a,b) => {
        a.push({Town: b[0] ,Latitude: Number(Number(b[1]).toFixed(2)) , Longitude: Number(Number(b[2]).toFixed(2)) })
   
        return a;
    },[])
    
    return JSON.stringify(data);
}
