const token = localStorage.getItem("token");
if (!token) location.href = "login.html";

// Загружаем профиль
fetch("http://localhost:5000/api/users/profile", {
    headers: { Authorization: `Bearer ${token}` },
})
.then(res => res.json())
.then(data => {
    document.getElementById("username").innerText = data.username;
    document.getElementById("email").innerText = data.email;
})
.catch(() => location.href = "login.html");

// Функция обновления профиля
function updateProfile() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:5000/api/users/profile", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        location.href = "profile.html";
    })
    .catch(() => alert("Ошибка при обновлении профиля"));
}
