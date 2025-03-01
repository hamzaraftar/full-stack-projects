import api from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Forms.css";

export default function Form({ route, method }) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const nagivate = useNavigate();
  const name = method === "login" ? "Login" : "Register";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        nagivate("/");
      } else {
        nagivate("/login");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input
        type="text"
        className="form-input"
        value={username}
        onChange={(e) => setName(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="form-button" type="submit">
        {name}
      </button>
    </form>
  );
}
