const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");  

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
        li.className = "todo-card";

        const todoText = document.createElement("div");
        todoText.className = "todo-text";
        todoText.textContent = todo;

        const buttonGroup = document.createElement("div");
        buttonGroup.className = "button-group";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            const newTodo = prompt("Edit todo", todoText.textContent);
            if (newTodo) {
                todoText.textContent = newTodo;
                saveTodos();
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => {
            todoList.removeChild(li);
            saveTodos();
        });

        buttonGroup.appendChild(editBtn);
        buttonGroup.appendChild(deleteBtn);

        li.appendChild(todoText);
        li.appendChild(buttonGroup);

        todoList.appendChild(li);
    });

    /*function searchTodo() {
        const searchInput = document.getElementById("search-input");
        searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const results = todos.filter(todo=>todo.toLowerCase().includes(searchTerm));
        });
    }*/
}

function clearTodos() {
    todoList.innerHTML = "";
    localStorage.clear();
}

clearBtn.addEventListener("click", clearTodos);

todoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

loadTodos();



    