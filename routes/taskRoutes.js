const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

// Görev Ekle
router.post('/', taskController.createTask);

// Tüm Görevleri Getir
router.get('/', taskController.getAllTasks);

// Görev Sil
router.delete('/:id', taskController.deleteTask);

module.exports = router;
