// controllers/userController.js

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Hàm GET /users
exports.getUsers = (req, res) => {
    // Trả về toàn bộ danh sách users
    res.status(200).json(users);
};

// Hàm POST /users
exports.createUser = (req, res) => {
    // Giả sử dữ liệu mới nằm trong req.body (cần middleware body-parser)
    const newUser = req.body;
    
    // Tạo ID mới đơn giản
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    
    const userWithId = { id: newId, ...newUser };
    users.push(userWithId); // Thêm user mới vào mảng tạm
    
    // Trả về thông tin user vừa tạo với mã 201 Created
    res.status(201).json(userWithId); 
};