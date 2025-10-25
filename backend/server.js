// server.js

const mongoose = require('mongoose');

// Thay thế chuỗi kết nối lấy từ MongoDB Atlas, đảm bảo thay <password> và <username>
const DB_URI = 'mongodb+srv://<username>:<password>@clustername.xxxxx.mongodb.net/groupDB?retryWrites=true&w=majority';

mongoose.connect(DB_URI)
  .then(() => console.log('Kết nối MongoDB thành công!'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));

const express = require('express'); 
const bodyParser = require('body-parser'); // Middleware để đọc body của POST request
const userRoutes = require('./routes/user');

const app = express(); 
app.use(express.json()); 
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(bodyParser.json()); // Sử dụng body-parser để phân tích JSON request body

// Gắn route cho user
app.use('/users', userRoutes); 

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});