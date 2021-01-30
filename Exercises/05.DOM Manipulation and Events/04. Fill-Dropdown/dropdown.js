function SumNumbers() {
    let num1Element = document.getElementById('num1');
    let num2Element = document.getElementById('num2');
    let resultElement = document.getElementById('sum');
    if(num1Element.value !== '' && num2Element.value !== '') { 
        resultElement.value = Number(num1Element.value) + Number(num2Element.value);
    }
   
}
