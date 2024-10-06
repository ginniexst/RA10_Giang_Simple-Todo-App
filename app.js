let inputTodo = document.getElementById("inputTodo");
let btn = document.getElementById("addBtn");
let input = inputTodo.value;

let todoListDatabase = [
    {
        id: 1,
        name: "Do laundry",
        status: true
    }
]

btn.onclick = function(){
    if (inputTodo.value === "") {
        console.log("Vui lòng nhập vào nội dung công việc");
    } else if (input.length() > 30) {
        console.log("Vui lòng nhập nội dung công việc có độ dài nhỏ hơn 30 ký tự");
    } else {
        let todo = {
            id: Math.random(),
            name: inputTodo.value,
            status: false
        }
        console.log(todo);
        todoListDatabase.push(todo);
    }
}