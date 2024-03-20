const inputBar = document.getElementById('input-bar');
const addBtn = document.getElementById('add-btn');
const itemContainer = document.getElementById('item-container');

// Function to add a new task
const addTask = () => {
    if (inputBar.value !== '') {
        const itemUL = document.createElement('ul');

        const newItem = document.createElement('li');
        newItem.textContent = inputBar.value;
        inputBar.value = '';

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.textContent = 'Remove';

        itemUL.appendChild(checkBox);
        itemUL.appendChild(newItem);
        itemUL.appendChild(removeBtn);
        itemContainer.appendChild(itemUL);
        // Event listener for checkbox to toggle task completio
        checkBox.addEventListener('click', () => {
            newItem.classList.toggle('completed');
        });
        // Event listener for remove button to delete task
        removeBtn.addEventListener('click', () => {
            itemContainer.removeChild(itemUL);
        });
    } else { alert('you must add something....') }
};

addBtn.addEventListener('click', addTask);