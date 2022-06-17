const correctCredentials = {
    userName: "ego",
    password: "ego",
};

function checkCredentials() {
    const loginData = localStorage.getItem("login");
    const user = JSON.parse(loginData);

    if(user?.username === correctCredentials.userName && user?.password === correctCredentials.password) {
        return true;
    }

    return false;
}

function logIn() {
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;

    const user = {
        username: username,
        password: pass,
    };

    if (
        user.username === correctCredentials.userName &&
        user.password === correctCredentials.password
    ) {
        const json = JSON.stringify(user);
        localStorage.setItem("login", json);

        renderPage();

        return;
    }

    console.log("wrong credentials");
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    logIn();
});

//to do list
const addTodos = document.querySelector(".new-todos");
const todosList = document.querySelector(".todoslist");
const todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo(e) {
    e.preventDefault();
    const text = this.querySelector("[type=text]").value;
    const todo = {
        text,
        done: false,
    };

    todos.push(todo);
    populateList(todos, todosList);
    localStorage.setItem("todos", JSON.stringify(todos));

    this.reset();
}

function populateList(todos = [], todosList) {
    todosList.innerHTML = todos
        .map((todo, i) => {
            return `
          <li>
          <input type="checkbox" data-index=${i} id="todo${i}"  ${
                todo.done ? "checked" : ""
            }/>
          <label for="todo${i}">${todo.text}</label>
          </li>
        
        `;
        })
        .join("");
}

function toggleDone(e) {
    if (!e.target.matches("input")) return;
    const target = e.target;
    const index = target.dataset.index;
    todos[index].done = !todos[index].done;
    localStorage.setItem("todos", JSON.stringify(todos));
    populateList(todos, todosList);
}

addTodos.addEventListener("submit", addTodo);
todosList.addEventListener("click", toggleDone);

populateList(todos, todosList);

//change log in-log out
const loginDiv = document.querySelector("#loginContainer");
const todosDiv = document.querySelector("#todosContainer");

function isAuthorised() {
    if (checkCredentials()) {
        return true;
    }

    logOut();
    return false;
}

function logOut() {
    localStorage.clear();
}

function renderPage() {
    if (isAuthorised()) {
        loginDiv.classList.add("hide");
        todosDiv.classList.remove("hide");

        return;
    }

    loginDiv.classList.remove("hide");
    todosDiv.classList.add("hide");
}

const logOutButton = document.getElementById("logOut");

logOutButton.addEventListener("click", function () {
    logOut()
    renderPage()
});


window.addEventListener("load", function () {
    renderPage()
});
