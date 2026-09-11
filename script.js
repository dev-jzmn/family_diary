if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            document.getElementById("themeButton").textContent = "Day Theme";
        } else {
            localStorage.setItem("theme", "light");
            document.getElementById("themeButton").textContent = "Night Theme";
        }
    });
}