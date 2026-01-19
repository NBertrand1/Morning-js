const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("todo-list");

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement("li");
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = "";
        saveTodos();
    }
}

todoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

function saveTodos() {
    const todos = Array.from(todoList.children).map(li => li.textContent);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo;
        todoList.appendChild(li);
    });
}

function clearTodos() {
    todoList.innerHTML = "";
    localStorage.clear();
}

todoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

loadTodos();

    