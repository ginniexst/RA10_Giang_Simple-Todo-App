let tasks = [];

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let error = document.getElementById("error");
let taskList = document.getElementById("taskList");

function addTask(taskName) {
    tasks.push(taskName);
    renderTask();
}

function renderTask() {
    taskList.innerHTML = ``;
    tasks.forEach( task => {
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

function showError(message) {
    error.textContent = message;
}

function clearError(message) {
    error.textContent = message;
}

function clearInput() {
    taskInput.value = ``;
}

addBtn.addEventListener("click", () => {
    let taskName = taskInput.value.trim();

    if (taskName === ``) {
        showError("Vui lòng nhập vào nội dung công việc");
    } else if (taskName.length > 30) {
        showError("Vui lòng nhập nội dung công việc có dộ dài nhỏ hơn 30 ký tự");
    } else {
        clearError()
        addTask(taskName);
        clearInput();
    }
})