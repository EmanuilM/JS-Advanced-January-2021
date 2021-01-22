function sum() {
   let getElements = Array.from(document.querySelectorAll('td'));
   let sum = 0;
   getElements.forEach((x,i) => { 
       if(i % 2 === 1) { 
         sum += Number(getElements[i].innerHTML);
       }
   })
   document.getElementById('sum').innerHTML = sum;
}
