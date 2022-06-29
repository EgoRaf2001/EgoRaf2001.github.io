const themTogglerButton = document.getElementById("dark-theme-button");
let dataTheme = localStorage.getItem("data-theme");
let browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "light"
  : "dark";

const setTheme = function (theme = browserTheme) {
  document.documentElement.setAttribute("data-theme", theme);
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    localStorage.setItem("data-theme", "light");
    theme = "light";
  } else {
    localStorage.setItem("data-theme", "dark");
    theme = "dark";
  }

  setTheme(theme);
};

themTogglerButton.addEventListener("click", () => {
  toggleTheme();
});
window.addEventListener("load", function () {
  if (dataTheme) {
    setTheme(dataTheme);
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const theme = event.matches ? "dark" : "light";

    setTheme(theme);
  });

(() => {
  setTheme();
})();
