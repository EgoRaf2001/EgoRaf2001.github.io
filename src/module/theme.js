const themTogglerButton = document.getElementById("dark-theme-button");
let browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const setTheme = (theme = browserTheme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const theme = currentTheme === "dark" ? "light" : "dark";

  setTheme(theme);
};

themTogglerButton.addEventListener("click", () => {
  toggleTheme();
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
