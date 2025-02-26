const sendEmail = require("./src/utils/sendEmail");

sendEmail("eliktro29@gmail.com", "Тестовое письмо", "Привет! Это проверка SMTP Яндекса.")
  .then(() => console.log("✅ Письмо отправлено!"))
  .catch(err => console.error("❌ Ошибка:", err));
