function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchBox = document.getElementById('searchField').value;
      let tableElement = Array.from(document.querySelectorAll('tbody  tr')).forEach(x => { 
         if(x.textContent.includes(searchBox)) { 
            x.className = 'select';
         }
      })
      console.log(tableElement);
      
   }
}

