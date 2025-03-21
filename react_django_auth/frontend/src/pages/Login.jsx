import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSumbit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );
      setFormData({
        email: "",
        password: "",
      });

      setSuccessMessage("Login  Successfull!");
      // gettting token
      localStorage.setItem("accessToken", response.data.tokens.access);
      localStorage.setItem("refreshToken", response.data.tokens.refresh);
       
    } catch (error) {
      console.log("Error during Login !", error.response?.data);
      if (error.response && error.response.data) {
        setError(error.message);
      }
    }
  }

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <br />
        <br />

        <button type="submit" onClick={handleSumbit}>
          Login
        </button>
      </form>
    </div>
  );
}
