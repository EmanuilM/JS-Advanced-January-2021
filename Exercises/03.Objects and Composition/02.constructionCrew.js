function solve(input) {
    if(input.hasOwnProperty('dizziness')) { 

        if(input.dizziness === true) { 
            let amount = (input.weight * 0.1) * (input.experience);
            input.levelOfHydrated += amount;
            input.dizziness = false;
        }
    }

  return input;
}
