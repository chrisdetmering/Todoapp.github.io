const dayInput = document.getElementById("dayInput");
const taskInput = document.getElementById("taskInput");
const btnAddtask = document.getElementById("btnAddtask");
const lsOutput = document.getElementById("lsOutput");

btnAddtask.onclick = function () {
    const day = dayInput.Value;
    const task = taskInput.Value;

    if (day && task) {
        localStorage.setItem(day, task);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const day = localStorage.day(i);
    const task = localStorage.getItem(day);

    lsOutput.innerHTML += '{day}: {task}';
}
