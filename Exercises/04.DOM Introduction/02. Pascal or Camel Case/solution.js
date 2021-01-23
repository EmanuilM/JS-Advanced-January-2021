function solve() {
  let titleElement = document.getElementById('text').value;
  let convinctionElement = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

    
      if(convinctionElement === 'Camel Case') { 
        let splitedString = titleElement.split(' ').map(x => x.toLowerCase())
        .map(y => y.replace(y[0] , y[0].toUpperCase()));
        let changeFirstWord = splitedString.shift().split('');
        changeFirstWord[0] =  changeFirstWord[0].replace(changeFirstWord[0] , changeFirstWord[0].toLowerCase());
        splitedString.unshift(changeFirstWord.join(''));
        splitedString =  splitedString.join('')
        result.textContent = splitedString;
      }else if(convinctionElement === 'Pascal Case') { 
        let splitedString = titleElement.split(' ').map(x => x.toLowerCase())
        .map(y => y.replace(y[0], y[0].toUpperCase())).join('')
        result.textContent = splitedString;
      }else {
        result.textContent = 'Error!';
      }

    
}
