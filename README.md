

### **📌 README.md**  

```md
# 📝 Task Manager

Task Manager — это простое приложение для управления задачами. Позволяет регистрироваться, входить в систему, создавать, редактировать и удалять задачи.  

## 🚀 Функционал
✅ Регистрация и вход (JWT-аутентификация)  
✅ Восстановление пароля через email  
✅ Создание, редактирование, удаление задач  
✅ Фильтрация задач по статусу  
✅ Редактирование профиля (email, username, пароль)  

## 🛠️ Технологии
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Nodemailer  
- **Frontend:** HTML, CSS, JavaScript (Vanilla JS)  
- **Деплой:** Railway (бэкенд), GitHub Pages (фронтенд)  

---

## 📌 Установка и запуск локально

### **1️⃣ Склонировать репозиторий**
```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### **2️⃣ Установить зависимости**
```sh
npm install
```

### **3️⃣ Настроить `.env`**
Создай `.env` файл в корне проекта и добавь:  
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_HOST=smtp.yandex.ru
EMAIL_PORT=465
EMAIL_USER=your-email@yandex.ru
EMAIL_PASS=your-app-password
```

### **4️⃣ Запустить сервер**
```sh
npm run dev
```
Сервер запустится на **http://localhost:5000**  

---

## 📌 API Документация

### **1️⃣ Аутентификация**
| Метод | Эндпоинт | Описание |
|--------|-------------|-------------|
| `POST` | `/api/auth/register` | Регистрация нового пользователя |
| `POST` | `/api/auth/login` | Вход в систему (получение JWT) |
| `POST` | `/api/auth/forgot-password` | Восстановление пароля (отправка на email) |

---

### **2️⃣ Профиль пользователя**
| Метод | Эндпоинт | Описание |
|--------|-------------|-------------|
| `GET` | `/api/users/profile` | Получить данные профиля |
| `PUT` | `/api/users/profile` | Обновить email, username, пароль |

---

### **3️⃣ Управление задачами**
| Метод | Эндпоинт | Описание |
|--------|-------------|-------------|
| `POST` | `/api/tasks` | Создать задачу |
| `GET` | `/api/tasks` | Получить все задачи пользователя |
| `GET` | `/api/tasks/:id` | Получить конкретную задачу |
| `PUT` | `/api/tasks/:id` | Редактировать задачу |
| `DELETE` | `/api/tasks/:id` | Удалить задачу |

⚠ **Все запросы (кроме аутентификации) требуют JWT-токен в `Authorization: Bearer {TOKEN}`**  

---

## 📌 Деплой
🔹 **Backend:** [Railway](https://railway.app/)  
🔹 **Frontend:** [GitHub Pages](https://yourusername.github.io/task-manager-frontend)  

### **API на Railway**
```sh
https://taskmanager-api.up.railway.app/api
```

### **Обновление фронтенда**
В `frontend/app.js` замени API URL:
```javascript
const API_URL = "https://taskmanager-api.up.railway.app/api";
```

---

## 🎯 TODO / Возможные улучшения
✅ Улучшенный UI (Bootstrap/Tailwind)  
✅ Добавление категорий для задач  
✅ Напоминания по email  

---

## 📌 Автор
👨‍💻 **Your Name**  
📧 **your-email@example.com**  
🔗 **[GitHub](https://github.com/your-username)**  

