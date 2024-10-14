const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('.tasks');
const task = document.querySelector('#task');

addButton.addEventListener('click',(e) => {
    const valueOfTask = task.value;

    if(valueOfTask === '') {
        alert("Enter something in task")
    }
    else {
        const li = document.createElement('li');
        li.innerHTML = valueOfTask
        taskList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    task.value = ''
    saveData();
});

taskList.addEventListener('click', (e) => {
    if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}
function showSaveData() {
    taskList.innerHTML = localStorage.getItem("tasks");
}
showSaveData();