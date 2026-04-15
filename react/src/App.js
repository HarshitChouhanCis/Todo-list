import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { createUser, getUsers, updateUser, deleteUser } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data || []);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data) => {
    if (selectedUser) {
      await updateUser(selectedUser._id, data);
      setSelectedUser(null);
    } else {
      await createUser(data);
    }
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>CRUD App</h1>
      <UserForm onSubmit={handleSubmit} selectedUser={selectedUser} />
      <UserList users={users} onEdit={setSelectedUser} onDelete={handleDelete} />
    </div>
  );
}

export default App;
