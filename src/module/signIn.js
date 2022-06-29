//change log in-log out
const loginDiv = document.querySelector("#loginContainer");
const todosDiv = document.querySelector("#todosContainer");
const logOutButton = document.querySelector("#logoutButton");

const correctCredentials = {
  userName: "ego",
  password: "ego",
};

function checkCredentials() {
  const loginData = localStorage.getItem("login");
  const user = JSON.parse(loginData);

  if (
    user?.username === correctCredentials.userName &&
    user?.password === correctCredentials.password
  ) {
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

function isAuthorised() {
  if (checkCredentials()) {
    return true;
  }

  logOut();
  return false;
}

function logOut() {
  localStorage.removeItem("login");
  localStorage.removeItem("todos");
}

function renderPage() {
  if (isAuthorised()) {
    loginDiv.classList.add("hide");
    todosDiv.classList.remove("hide");
    logOutButton.classList.remove("hide");

    return;
  }

  loginDiv.classList.remove("hide");
  todosDiv.classList.add("hide");
  logOutButton.classList.add("hide");
}

logOutButton.addEventListener("click", function () {
  logOut();
  renderPage();
});

window.addEventListener("load", function () {
  renderPage();
});

