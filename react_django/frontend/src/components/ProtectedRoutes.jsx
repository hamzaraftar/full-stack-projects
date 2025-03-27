import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useState, useEffect } from "react";

export default function ProtectedRoutes({ children }) {
  const [isAutherized, setIsAutherized] = useState(null);

  useEffect(() => {
    auth().catch(() => setIsAutherized(false));
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAutherized(true);
      } else {
        setIsAutherized(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsAutherized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAutherized(false);
      return;
    }
    const decode = jwtDecode(token);
    const tokenExpiration = decode.exp;
    const now = Date.new() / 1000;
    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAutherized(true);
    }
  };

  if (isAutherized === null) {
    return <div>Loading ...</div>;
  }

  return isAutherized ? children : <Navigate to={"/login"} />;
}
