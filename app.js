setInterval(function() {
    window.location.reload();
}, 100000);


let addTodo = document.getElementById('add');
let inputTodo = document.getElementById('todo_input');
let parentTodo = document.getElementById('todoList_main');
// add todo :start
const getItem = function(item) {
    let parent = item.parentNode;
    let textItem = parent.querySelector(".group_content");
    return textItem;
}

let addTodoList = function() {
    let todo = inputTodo.value;
    let div = document.createElement('div');
    div.classList.add('todoList_main-group');
    // add todo
    if (todo !== '' && todo.length < 35) {
        div.innerHTML = `<div class="group_content">${todo}</div><i class="far fa-circle"></i>`;
        parentTodo.appendChild(div);
    } else if (todo.length > 35) {
        alert("Mỗi ToDo tối đa 40 kí tự");
    }
    // save localSto
    localStorage.setItem(`${todo}`, `${todo}`);

    // clean input
    inputTodo.value = '';

    // change icon
    let doneList = document.getElementsByClassName('fa-circle');
    for (let item of doneList) {
        remove(item);
    }

}

//  deleteTodo

const deleteTodo = function(item) {
    if (item.className === 'far fa-trash-alt') {
        item.addEventListener('click', function() {
            item.parentNode.parentNode.removeChild(item.parentNode);
        })
    }
}

const remove = function(item) {
    item.addEventListener('click', function() {
        item.classList.remove('fa-circle');
        item.classList.add('fa-trash-alt');
        let text = getItem(item);
        text.style.textDecoration = "line-through";
        text.style.opacity = 0.6;
        text.style.color = 'red';
        deleteTodo(item);
    })

}
addTodo.addEventListener('click', addTodoList);
inputTodo.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodoList();
        }
    })
    //add todo :end

// set time
var time = new Date();
let timeList = new Map();
timeList.set(0, "Monday")
    .set(1, "Tuseday")
    .set(2, "Wednesday")
    .set(3, "Thursday")
    .set(4, "Friday")
    .set(5, "Saturday ")
    .set(6, "Sunday")

let timeDay = document.getElementById('time-date');
// console.log(timeDay);
let timeHours = document.getElementById('time-hours');
// console.log(timeHours);

timeDay.innerHTML = `${timeList.get(time.getDay())}`;
timeHours.innerHTML = `${time.getHours()}:${time.getMinutes()}`;

// end set time

// start remove

const local = function() {
    // let dataArray = localStorage.map()
};

local();