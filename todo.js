

//selectors
const todoInput = document.querySelector('.task-input');
const todoAddButton = document.querySelector('.todo-add-btn');
const todoList = document.querySelector('.todo-list');
const todoItem = document.querySelector('.todo');
const totalTodoTab = document.querySelector('.total-todo');
const completeBtn = document.querySelector('.complete-btn');

//event listners
todoAddButton.addEventListener('click', addTodo)
todoList.addEventListener('click', taskDone)
todoList.addEventListener('click', countTodos)
document.addEventListener('DOMContentLoaded', getTodos)
document.addEventListener('DOMContentLoaded', countTodos)
todoAddButton.addEventListener('click', countTodos)
completeBtn.addEventListener('click', countCompletedTodos)

//functions
function addTodo(event){
    
    console.log('button clicked')
    //prevent page from reloading
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // complete button
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('complete-btn');
    completedBtn.innerHTML='<i class="material-icons-round">radio_button_unchecked</i>'
    todoDiv.appendChild(completedBtn);

    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    todoList.appendChild(todoDiv);

    //add todo to local storage
    saveLocalTodos(todoInput.value);

    // clear todo input value
    todoInput.value = '';
}

function taskDone(e){
    const item = e.target;
    if(item.classList[0] === 'complete-btn'){
        const todo =item.parentElement;
        removeLocalTodos(todo)
        todo.remove()
    }
}
function checkLocalStorage(){
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
}
function saveLocalTodos(todo){
    checkLocalStorage();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    checkLocalStorage();
    todos.forEach(function(todo){
        //todo div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        // complete button
        const completedBtn = document.createElement('button');
        completedBtn.classList.add('complete-btn');
        completedBtn.innerHTML='<i class="material-icons-round">radio_button_unchecked</i>'
        todoDiv.appendChild(completedBtn);

        //create li
        const newTodo = document.createElement('li')
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    checkLocalStorage();
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));

}

function countTodos(todo){
    checkLocalStorage();
    totalTodo = todos.length;
    totalTodoTab.innerText = totalTodo;
}
countTodos()

function countCompletedTodos(){
    checkLocalStorage();
    completedTodos = 0;
    if(item.classList[0] === 'complete-btn'){
        completedTodos+=1;
    }
    console.log(completedTodos)
}
