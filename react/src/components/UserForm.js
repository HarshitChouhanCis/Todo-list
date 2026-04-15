// import React, { useState, useEffect } from "react";

// function UserForm({ onSubmit, selectedUser }) {
//   const [form, setForm] = useState({ name: "", email: "", age: "" });

//   useEffect(() => {
//     if (selectedUser) setForm(selectedUser);
//   }, [selectedUser]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(form);
//     setForm({ name: "", email: "", age: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{selectedUser ? "Update User" : "Create User"}</h2>
//       <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
//       <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
//       <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
//       <button type="submit">{selectedUser ? "Update" : "Create"}</button>
//     </form>
//   );
// }

// export default UserForm;


import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, selectedUser }) {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setForm(selectedUser);
    }
  }, [selectedUser]);

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email";

    if (!form.age) err.age = "Age is required";
    else if (form.age < 1) err.age = "Invalid age";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // remove error on typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(form);
    setForm({ name: "", email: "", age: "" });
    setErrors({});
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.heading}>
          {selectedUser ? "✏️ Update User" : "➕ Create User"}
        </h2>

        {/* Name */}
        <div style={styles.field}>
          <input
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div style={styles.field}>
          <input
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        {/* Age */}
        <div style={styles.field}>
          <input
            name="age"
            type="number"
            placeholder="Enter Age"
            value={form.age}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.age && <span style={styles.error}>{errors.age}</span>}
        </div>

        <button type="submit" style={styles.button}>
          {selectedUser ? "Update User" : "Create User"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  card: {
    width: "350px",
    padding: "20px",
    borderRadius: "10px",
    background: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  field: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};
