function addItem() {
    let liElement = document.createElement('li');
    let inputElement = document.querySelectorAll('#newItemText , input')[0].value;
    let itemsElement = document.getElementById('items');
    liElement.textContent = inputElement;
    itemsElement.appendChild(liElement);

}
