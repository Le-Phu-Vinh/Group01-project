// models/User.js (hoặc User.js)

const mongoose = require('mongoose');

// Định nghĩa cấu trúc (schema) cho User
const UserSchema = new mongoose.Schema({
  // Trường "name" kiểu String và là bắt buộc (required)
  name: {
    type: String,
    required: true,
  },
  // Trường "email" kiểu String, bắt buộc và là duy nhất (unique)
  email: {
    type: String,
    required: true,
    unique: true, // Đảm bảo không có 2 user có cùng email
  },
  // Mongoose tự động thêm trường _id
});

// Tạo Model từ Schema. Tên Model là 'User'. 
// Mongoose sẽ tự động đặt tên collection là 'users' (số nhiều, chữ thường)
const User = mongoose.model('User', UserSchema);

module.exports = User;