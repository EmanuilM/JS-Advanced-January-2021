function search() {
   let searchBox =  document.getElementById('searchText').value;
   let word = new RegExp(searchBox);
   let count = 0;
   let townsElement = Array.from(document.querySelectorAll('towns , li ')).forEach(x => { 
      if(x.textContent.match(word)) { 
        x.style.fontWeight = 'bold';
        x.style.textDecoration = 'underline';
        count++;

      }
   })
   
  let result =  document.getElementById('result')
  result.textContent = `${count} matches found`;

  
}
