const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('.tasks');
const task = document.querySelector('#task');
const clearHistoryButton = document.querySelector('#clearHistory');


function addTask() {
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
}

task.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addTask();
    }
})

addButton.addEventListener('click',(e) => {
    addTask();
});

taskList.addEventListener('click', (e) => {
    if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}
function showSaveData() {
    taskList.innerHTML = localStorage.getItem("tasks");
}

clearHistoryButton.addEventListener('click', (e) => {
    let container = e.target.parentElement;
    let childElements = container.children[1].children[1].children;
    Array.from(childElements).forEach(child => child.remove());

    localStorage.clear();
});

showSaveData();
