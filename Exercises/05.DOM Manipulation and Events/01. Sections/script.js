function create(words) {
   words.forEach(currentWord => {
      let divContetElement = document.getElementById('content'); 
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.innerHTML = currentWord;
      pElement.style.display = 'none';

      divElement.appendChild(pElement);
      divContetElement.appendChild(divElement);

      divElement.addEventListener('click' , () => { 
         pElement.style.display = 'block';
      });

   });
}

