
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


// Registration validating 

const form = document.getElementById('form')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const emailUsername = document.getElementById('email_username')
const password = document.getElementById('password')
const errorHandler = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []

    if (firstName.value === '' || firstName.value === null) {
        messages.push('First name is required!')
    }

    if (lastName.value === '' || firstName.value === null) {
        messages.push('Last name is required!')
    }

    if (emailUsername.value === '' || emailUsername.value === null) {
        messages.push('Email or Username is required!')
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