
// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearList').addEventListener('click', handleClearList);

// Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value != '') { 
        addTodo(input.value);
        input.value = '';
    }  
}
function handleClickDeleteOrCheck(e) {
    if (e.target.name === 'addTaskBtn') { 
        checkTodo(e);
        return; 
    }
        

    if (e.target.name === 'deleteBtn') { 
        deleteTodo(e);
        return; 
    }
        
}
function handleClearList(e) {
    document.querySelector('ul').innerHTML = '';
}

// Helpers
function addTodo(todo) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span'); 
    span.className = 'todo-item'; 
    span.textContent = todo; 

    li.innerHTML = `
        ${span}
        <button name="addTaskBtn"><i class="fas fa-check-square"></i></button>
        <button name="deleteBtn"><i class="fas fa-trash-alt"></i></button>
    `;
    ul.appendChild(li);
}
function checkTodo(e) {
    const item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through') { 
        item.style.textDecoration = 'none';
    } else { 
        item.style.textDecoration = 'line-through';
    }
        
}
function deleteTodo(e) {
    const item = e.target.parentNode;
    item.remove();
}