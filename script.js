const themeButton = document.getElementById("themeButton");
const themeText = document.getElementById("themeText");
const themeIcon = document.getElementById("themeIcon");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");

    themeText.textContent = "Day Theme";
    themeIcon.src = "sun.png";
}

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");

            themeText.textContent = "Day Theme";
            themeIcon.src = "sun.png";
        } else {
            localStorage.setItem("theme", "light");

            themeText.textContent = "Night Theme";
            themeIcon.src = "night-mode.png";
        }
    });
}