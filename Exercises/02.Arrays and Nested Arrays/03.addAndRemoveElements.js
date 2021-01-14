function solve(arr) {
    let  output = [];
    let i = 0;
    arr.forEach(cmd => {
        if(cmd === 'add') { 
            i++;
            output.push(i)
        }else if(cmd === 'remove') { 
            i++;
            output.splice(output.length-1 , 1);
        }
    });

  return  output.length === 0 ? console.log('Empty') : console.log(output.join('\n'));
}
