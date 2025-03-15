import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Button from './components/Button';

const API_URL = 'https://api.escuelajs.co/api/v1/users';

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreate = async (userData) => {
    try {
      await axios.post(API_URL, userData);
      fetchUsers();
      setShowForm(false);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdate = async (userData) => {
    try {
      await axios.put(`${API_URL}/${selectedUser.id}`, userData);
      fetchUsers();
      setSelectedUser(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_URL}/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Gestión de Usuarios</h1>
      
      {!showForm && (
        <div className="mb-4">
          <Button onClick={() => setShowForm(true)}>
            Nuevo Usuario
          </Button>
        </div>
      )}

      {showForm ? (
        <UserForm
          user={selectedUser}
          onSubmit={selectedUser ? handleUpdate : handleCreate}
          onCancel={() => {
            setShowForm(false);
            setSelectedUser(null);
          }}
        />
      ) : (
        <UserList
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}