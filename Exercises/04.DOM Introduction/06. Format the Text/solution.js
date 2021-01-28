function solve() {
  let inputText = document.getElementById('input').value;
  let outputBox = document.getElementById('output');
  let sentances = inputText.split('.').filter(x => x !== '');
  while(sentances.length > 0){
      let current = sentances.splice( 0, 3 ).join('.');
      if(current[current.length -1] !== '.'){ current += '.' }
      let pElement = document.createElement('p');
      pElement.innerText = current;
      outputBox.appendChild(pElement);
  }
}
