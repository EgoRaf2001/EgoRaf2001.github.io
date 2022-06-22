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

export const fireMessage = (message) => {
  console.log(message);
};

populateList(todos, todosList);
