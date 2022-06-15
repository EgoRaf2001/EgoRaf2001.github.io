// 1) login anel
// 2) refreshic heto logout chanel

const correctCredentials = {
  userName: "ego",
  password: "ego",
};

function signup() {
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

    return;
  }

  console.log("wrong credentials");
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  signup();
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
const loginDiv = document.querySelector(".login");
const hideDiv = document.querySelector(".hide");
const todosDiv = document.querySelector(".todos");

function change() {
  if (loginDiv.style.display === "none") {
    hideDiv.style.display = "none";
    todosDiv.style.display = "none";
    loginDiv.style.display = "block";
  } else {
    loginDiv.style.display = "none";
    hideDiv.style.display = "block";
    todosDiv.style.display = "block";
  }
}

const logIn = document.getElementById("logIn");

logIn.addEventListener("click", connect);


function connect() {
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
    change();
  }
  return;
}

const logOut = document.getElementById("logOut");
logOut.addEventListener("click", change);
logOut.addEventListener("click", removeItem);
function removeItem() {
  localStorage.removeItem("login");
}
