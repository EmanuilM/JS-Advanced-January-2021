function solve() {
    let btn = document.getElementsByTagName('button')[0];
    let inputElement = document.getElementById('input');
    
    let resultElement = document.getElementById('result');
    let dropDownOption = document.getElementById('selectMenuTo');
 
    dropDownOption.innerHTML = `<option selected value= 'binary'>Binary</option>`;
    dropDownOption.innerHTML += `<option selected value= 'hexadecimal'>Hexadecimal</option>`;
    
    btn.addEventListener('click', () => {
        if(dropDownOption.value === 'hexadecimal'){ resultElement.value=(Number(inputElement.value).toString(16)).toUpperCase() }
        else if(dropDownOption.value === 'binary' ) { resultElement.value = (Number(inputElement.value)).toString(2) }
    })
}
