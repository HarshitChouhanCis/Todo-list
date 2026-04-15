import React from "react";

function UserList({ users, onEdit, onDelete }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>👥 User List</h2>

      {users.length === 0 ? (
        <p style={styles.empty}>No users found</p>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Age</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id} style={styles.tr}>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.age}</td>

                  <td style={styles.td}>
                    <button
                      style={{ ...styles.button, background: "#ffc107" }}
                      onClick={() => onEdit(user)}
                    >
                      ✏️ Edit
                    </button>

                    <button
                      style={{ ...styles.button, background: "#dc3545" }}
                      onClick={() => onDelete(user._id)}
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserList;

const styles = {
  container: {
    marginTop: "30px",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  empty: {
    textAlign: "center",
    color: "#777",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  th: {
    background: "#007bff",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  tr: {
    transition: "0.2s",
  },
  button: {
    padding: "6px 10px",
    marginRight: "5px",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
};