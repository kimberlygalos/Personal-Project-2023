const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
  let inputValue = inputBox.value;

  if (inputValue) {
    let li = document.createElement('li');

    let checkBox = docume.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'list-checkbox';

    li.appendChild(checkBox);

    let textNode = document.createTextNode(inputValue);

    li.appendChild(textNode);
    listContainer.appendChild(li);
  }
});
