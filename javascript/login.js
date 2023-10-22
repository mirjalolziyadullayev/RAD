
// Toggle mode. Dark and Light

document.addEventListener("DOMContentLoaded", function () {
    const userPreferredMode = localStorage.getItem("preferred-mode");

    function setMode(mode) {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }

    function toggleMode() {
        if (document.body.classList.contains("dark-mode")) {
            setMode("light");
            localStorage.setItem("preferred-mode", "light");
        } else {
            setMode("dark");
            localStorage.setItem("preferred-mode", "dark");
        }
    }

    if (userPreferredMode) {
        setMode(userPreferredMode);
    }

    const modeToggle = document.getElementById("mode-toggle");
    modeToggle.addEventListener("click", toggleMode);
});


// Login validating

const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const errorHandler = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []

    if (username.value === '' || username.value === null) {
        messages.push('Username is required!')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be more than 6 characters!')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters!')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorHandler.innerText = messages.join(', ')
    }
})