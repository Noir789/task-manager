const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Проверяем, есть ли уже пользователь с таким email
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email уже используется" });
    }

    // Создаём нового пользователя
    const user = await User.create({ username, email, password });

    res.status(201).json({ message: "Пользователь зарегистрирован" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Неверный email или пароль" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Неверный email или пароль" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
};


const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("📩 Получен запрос на восстановление пароля:", email);

    // Проверяем, есть ли пользователь
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ Email не найден:", email);
      return res.status(400).json({ message: "Email не найден" });
    }

    console.log("✅ Пользователь найден:", user.email);

    // Отправляем email
    await sendEmail(email, "Восстановление пароля", `Ваш пароль: ${user.password}`);
    console.log("📧 Письмо отправлено на", email);

    res.json({ message: "Пароль отправлен на ваш email" });
  } catch (error) {
    console.error("❌ Ошибка в forgotPassword:", error);
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
};


module.exports = { register, login, forgotPassword };
