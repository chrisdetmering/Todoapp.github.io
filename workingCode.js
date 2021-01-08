const box1 = document.getElementsById('box1');
const box2 = document.getElementsById('box2');
const lsOutput = document.getElementById('lsOutput');
const addtaskbtn = document.getElementsById('addtaskbtn').addEventListener('click', buttonClick);

function buttonClick(){

    if (box1 && box2) {
        localStorage.setItem(box1, box2);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const box1 = localStorage.box1(i);
    const box2 = localStorage.getItem(box2);

    lsOutput.innerHTML += (box1, box2);

}