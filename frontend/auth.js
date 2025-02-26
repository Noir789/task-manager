const API_URL = "http://localhost:5000/api";

// Функция логина
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem("token", data.token);
            location.href = "profile.html";
        } else {
            alert("Ошибка: " + data.message);
        }
    });
}

// Функция регистрации
function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    })
    .then(res => res.json())
    .then(data => {
        if (data.message) {
            alert("Регистрация успешна!");
            location.href = "login.html";
        } else {
            alert("Ошибка: " + data.message);
        }
    });
}

//Функция вотановления
function forgotPassword() {
    const email = document.getElementById("email").value;

    fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        location.href = "login.html";
    })
    .catch(() => alert("Ошибка при отправке запроса"));
}

