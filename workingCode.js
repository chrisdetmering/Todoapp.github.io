const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const addtaskbtn = document.getElementById("addtaskbtn");
const lsOutput = document.getElementById("lsOutput");

addtaskbtn.onclick = function () {
    const day = box1.value;
    const task = box2.value;

    if (day && task) {
        localStorage.setItem(day, task);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const day = localStorage.day(i);
    const task = localStorage.getItem(task);

    lsOutput.innerHTML += (day, task);

}