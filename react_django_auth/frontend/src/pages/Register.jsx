import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSumbit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formData
      );
      setFormData({
        username: "",
        email: "",
        password1: "",
        password2: "",
      });
      setSuccessMessage("Registration Successfull!");
    } catch (error) {
      console.log("Error during registration !", error.response?.data);
      if (error.response && error.response.data) {
        setError(error.message);
      }
    }
  }

  return (
    <div>
      {error && <p style={{color:"red"}}>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <br />
        <label htmlFor="email">email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <label htmlFor="password1">Password:</label>
        <input
          type="password"
          value={formData.password1}
          onChange={(e) =>
            setFormData({ ...formData, password1: e.target.value })
          }
        />
        <br />
        <label htmlFor="password2">Conform Password:</label>
        <input
          type="password"
          value={formData.password2}
          onChange={(e) =>
            setFormData({ ...formData, password2: e.target.value })
          }
        />
        <br />
        <button type="submit" onClick={handleSumbit}>
          Register
        </button>
      </form>
    </div>
  );
}
