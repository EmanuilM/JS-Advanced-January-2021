function extractText() {
   let itemsElement = document.querySelector('#result').value = Array.from(document.querySelector('#items').children)
   .map(x => x.textContent);
}
