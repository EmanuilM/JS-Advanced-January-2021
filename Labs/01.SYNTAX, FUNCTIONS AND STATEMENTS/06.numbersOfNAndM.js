function solve(...input) {
  let parseStrings = input.map(Number);
  let result = 0;
    for (let i = parseStrings[0]; i <= parseStrings[1]; i++) {
       result += i;
        
    }

    return result;
}
