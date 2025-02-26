const token = localStorage.getItem("token");
const taskId = localStorage.getItem("editTaskId");
if (!token) location.href = "login.html";

function loadTasks() {
    fetch("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => res.json())
    .then(tasks => {
        document.getElementById("tasks").innerHTML = tasks.map(task => 
            `<li>
                ${task.title} - ${task.status}
                <button onclick="editTask('${task._id}')">✏️ Редактировать</button>
                <button onclick="deleteTask('${task._id}')">🗑 Удалить</button>
            </li>`
        ).join("");
    });
}

function editTask(id) {
    localStorage.setItem("editTaskId", id);
    location.href = "edit-task.html";
}


function addTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, description, status: "pending" }),
    }).then(() => loadTasks());
}

function deleteTask(id) {
    fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
    }).then(() => loadTasks());
}

function updateTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;
    const dueDate = document.getElementById("dueDate").value;

    fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, status, dueDate }),
    })
    .then(res => res.json())
    .then(() => {
        alert("Задача обновлена");
        location.href = "tasks.html";
    })
    .catch(() => alert("Ошибка при обновлении задачи"));
}

function logout() {
    localStorage.removeItem("token");
    location.href = "login.html";
    token = null;
}
loadTasks();
