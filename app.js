require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGO_URI; 

// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// MongoDB Bağlantısı
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB bağlantısı başarılı!');
    app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor.`));
  })
  .catch((error) => console.error('MongoDB bağlantı hatası:', error));
