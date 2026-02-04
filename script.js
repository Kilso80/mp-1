
function switchTheme() {
    let themes = ["", "dark"];
    let root = document.querySelector(":root");
    root.className = themes[(themes.indexOf(root.className) + 1) % themes.length];
    window.localStorage.setItem("theme", root.className);
}

document.querySelector(":root").className = window.localStorage.getItem("theme");
