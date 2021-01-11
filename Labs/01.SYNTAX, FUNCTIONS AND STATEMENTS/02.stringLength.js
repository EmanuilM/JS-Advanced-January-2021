function solve(...input) {
   let result = input.reduce((a,b) => a += b.length, 0);
   console.log(result + "\n" + Math.floor(result / input.length) );

}
