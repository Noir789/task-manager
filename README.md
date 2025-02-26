### **📌 README.md**  

```md
# 📝 Task Manager

Task Manager is a simple task management application. It allows users to register, log in, create, edit, and delete tasks.  

## 🚀 Features
✅ User authentication (JWT)  
✅ Password recovery via email  
✅ Create, edit, delete tasks  
✅ Task filtering by status  
✅ Edit profile (email, username, password)  

## 🛠️ Technologies
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Nodemailer  
- **Frontend:** HTML, CSS, JavaScript (Vanilla JS)  
---

## 📌 Installation & Local Setup

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### **2️⃣ Install dependencies**
```sh
npm install
```

### **3️⃣ Configure `.env` file**
Create a `.env` file in the root directory and add:  
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_HOST=smtp.yandex.ru
EMAIL_PORT=465
EMAIL_USER=your-email@yandex.ru
EMAIL_PASS=your-app-password
```

### **4️⃣ Start the server**
```sh
npm run dev
```
The server will start at **http://localhost:5000**  

---

## 📌 API Documentation

### **1️⃣ Authentication**
| Method | Endpoint | Description |
|--------|-------------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Log in (returns JWT token) |
| `POST` | `/api/auth/forgot-password` | Recover password (email is sent) |

---

### **2️⃣ User Profile**
| Method | Endpoint | Description |
|--------|-------------|-------------|
| `GET` | `/api/users/profile` | Get user profile data |
| `PUT` | `/api/users/profile` | Update email, username, or password |

---

### **3️⃣ Task Management**
| Method | Endpoint | Description |
|--------|-------------|-------------|
| `POST` | `/api/tasks` | Create a task |
| `GET` | `/api/tasks` | Get all user tasks |
| `GET` | `/api/tasks/:id` | Get a specific task |
| `PUT` | `/api/tasks/:id` | Edit a task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

⚠ **All requests (except authentication) require a JWT token in the `Authorization: Bearer {TOKEN}` header**  

---

## 🎯 TODO / Possible Improvements
✅ Improved UI (Bootstrap/Tailwind)  
✅ Task categories  
✅ Email reminders  


 

