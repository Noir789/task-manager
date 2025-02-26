const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;
    const newTask = await Task.create({
      user: req.user.id,
      title,
      description,
      status,
      dueDate,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при создании задачи", error: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении задач", error: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Задача не найдена" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Ошибка при получении задачи", error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Задача не найдена" });
    }

    const { title, description, status, dueDate } = req.body;

    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;
    if (dueDate) task.dueDate = dueDate;

    await task.save();
    res.json({ message: "Задача обновлена", task });
  } catch (error) {
    res.status(500).json({ message: "Ошибка при обновлении задачи", error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Задача не найдена" });
    }
    await task.deleteOne();
    res.json({ message: "Задача удалена" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка при удалении задачи", error: error.message });
  }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
