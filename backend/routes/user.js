// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Nhớ chỉnh đường dẫn đúng

// Định tuyến cho GET /users
router.get('/', userController.getUsers); 

// Định tuyến cho POST /users
router.post('/', userController.createUser);

module.exports = router;