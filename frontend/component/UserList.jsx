// src/components/UserList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3000/users";

function UserList({ refresh }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect sẽ chạy khi component được render lần đầu, 
  // và mỗi khi giá trị 'refresh' thay đổi.
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Lệnh 1: axios.get("http://localhost:3000/users")
        const response = await axios.get(API_URL); 
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Không thể tải danh sách người dùng. Vui lòng kiểm tra API backend.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, [refresh]); // Thêm 'refresh' vào dependency array

  if (loading) return <p>Đang tải danh sách người dùng...</p>;
  if (error) return <p style={{ color: 'red' }}>Lỗi: {error}</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
      <h2>Danh sách Người dùng ({users.length})</h2>
      {users.length === 0 ? (
        <p>Chưa có người dùng nào.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              **{user.name}** - *{user.email}*
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;