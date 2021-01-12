function solve(fruitType , weigth , price) { 
    console.log(`I need $${((weigth / 1000) * price).toFixed(2)} to buy ${(weigth / 1000).toFixed(2)} kilograms ${fruitType}.`);
}
