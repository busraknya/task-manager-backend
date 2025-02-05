const Task = require('../models/Task');

// Görev Ekle
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Başlık zorunludur.' });
    }
    const newTask = new Task({ title, description });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: 'Görev eklenemedi.', error });
  }
};

// Tüm Görevleri Getir
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Görevler alınamadı.', error });
  }
};

// Görev Sil
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Görev bulunamadı.' });
    }
    res.status(200).json({ message: 'Görev silindi.' });
  } catch (error) {
    res.status(500).json({ message: 'Görev silinemedi.', error });
  }
};
