function solve(input) {
   return input.reduce((a,b) => a + b , 0) + '\n' + input.reduce((a,b) => a  + 1/ b , 0) + '\n' + input.reduce((a,b) => a.concat(b) , '')
}
