function solve() {
   let buttons =  document.querySelectorAll('.add-product');
   let outputArea = document.querySelector('textarea');
   let checkOutBtn = document.querySelector('.checkout');
   let totalPrice = 0;
   let products = new Set();
   Array.from(buttons).forEach(x => { 
      x.addEventListener('click' , () => { 
         let infoAboutProduct =  x.parentElement.previousElementSibling.children;
         let productPrice = x.parentElement.nextElementSibling.innerHTML;
         let productName = infoAboutProduct[0].textContent;
         products.add(productName);
         totalPrice += Number(productPrice);
         outputArea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
      })
   })
   checkOutBtn.addEventListener('click' , () => { 
      outputArea.textContent += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.`;
      disableCheckOutButton();
   })

   function disableCheckOutButton() {
      Array.from(buttons).forEach(x => x.disabled = 'true');
      checkOutBtn.disabled = 'true';
   }

}
