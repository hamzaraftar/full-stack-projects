import api from "../api";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import { useEffect, useState } from "react";

function ProtectedRoutes({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth().catch(() => setIsAuthenticated(false));
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsAuthenticated(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthenticated(false);
    }
  };
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoutes;