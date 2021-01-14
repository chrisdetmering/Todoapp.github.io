document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearList').addEventListener('click', handleClearList);

function handleSubmitForm(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value !== '') { 
        addTodo(input.value);
        input.value = ''; 
    }
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'addTaskBtn') { 
        checkTodo(e);
        return; 
    }
       

    if (e.target.name == 'deleteBtn') { 
        deleteTodo(e);
        return; 
    }
       
}

function handleClearList(e) {
    document.querySelector('ul').innerHTML = '';
}

function addTodo(todo) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span'); 
    const addButton = document.createElement('button'); 
    const deleteBtn = document.createElement('button'); 

    //to prevent cross site scripting (XSS) . 
    span.classList.add("todo-item"); 
    span.textContent = todo; 
    addButton.setAttribute("name", "addTaskBtn"); 
    deleteBtn.setAttribute("name", "deleteBtn"); 
    
    //okay because we are not using user input
    addButton.innerHTML = `<i class="fas fa-check-square"></i>`; 
    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`

    li.appendChild(span); 
    li.appendChild(addButton); 
    li.appendChild(deleteBtn); 
    ul.appendChild(li);
}
function checkTodo(e) {
    const item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else 
        item.style.textDecoration = 'line-through';
}
function deleteTodo(e) {
    const item = e.target.parentNode;
    item.remove();
}