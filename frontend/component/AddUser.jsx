// src/components/AddUser.jsx

import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3000/users";

function AddUser({ onUserAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    
    // Tạo đối tượng người dùng mới
    const newUser = { name, email };
    
    try {
      setStatus('Đang gửi...');
      // Lệnh 2: axios.post("http://localhost:3000/users", newUser)
      const response = await axios.post(API_URL, newUser);
      
      // Xóa form và thông báo thành công
      setName('');
      setEmail('');
      setStatus(`Thêm người dùng thành công! ID: ${response.data.id}`);

      // Gọi callback để yêu cầu UserList cập nhật dữ liệu
      onUserAdded(); 

    } catch (error) {
      setStatus('Lỗi khi thêm người dùng. Vui lòng thử lại.');
      console.error("Lỗi POST:", error);
    }
  };

  return (
    <div style={{ border: '1px solid #007bff', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
      <h2>Thêm Người dùng Mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '15px', padding: '10px 20px', cursor: 'pointer' }}>
          Thêm User
        </button>
        <p style={{ marginTop: '10px', color: status.includes('Lỗi') ? 'red' : 'green' }}>{status}</p>
      </form>
    </div>
  );
}

export default AddUser;