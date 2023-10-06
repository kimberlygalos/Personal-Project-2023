const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
  let inputValue = inputBox.value;

  if (inputValue) {
    let li = document.createElement('li');

    // Create the input element (checkbox)
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'list-checkbox';

    // Append the checkbox to the list item
    li.appendChild(checkbox);

    // Create a text node with the input value
    let textNode = document.createTextNode(inputValue);

    // Append the text node to the list item
    li.appendChild(textNode);

    listContainer.appendChild(li);
  }

  inputBox.value = '';
});

// Event delegation for checkbox clicks
listContainer.addEventListener('change', (event) => {
  if (event.target.classList.contains('list-checkbox')) {
    const listItem = event.target.parentElement;
    if (event.target.checked) {
      listItem.style.display = 'none';
    } else {
      listItem.style.display = 'block';
    }
  }
});
