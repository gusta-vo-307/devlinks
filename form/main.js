const switcher = document.getElementById("switch");

switcher.addEventListener("click", toggleMode);

function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");
    const username = document.querySelector("#profile p");

    if(html.classList.contains("light")) {
        img.setAttribute("src", "https://github.com/gusta-vo-307.png");
        username.textContent = "@gusta-vo-307";
    }

    else {
        img.setAttribute("src", "https://github.com/gusta-vo-307.png");
        username.textContent = "@gusta-vo-307";
    }
}