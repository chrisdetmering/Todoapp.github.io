// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearList').addEventListener('click', handleClearList);

// Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = ''
}
function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'addTaskBtn')
        checkTodo(e);

    if (e.target.name == 'deleteBtn')
        deleteTodo(e);
}
function handleClearList(e) {
    document.querySelector('ul').innerHTML = '';
}

// Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="addTaskBtn"><i class="fas fa-check-square"></i></button>
        <button name="deleteBtn"><i class="fas fa-trash-alt"></i></button>
    `;
    ul.appendChild(li);
}
function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else 
        item.style.textDecoration = 'line-through';
}
function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove();
}