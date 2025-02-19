import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwtDecode";
import api from "../api";
import { useEffect, useState } from "react";

import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function ProtectedRoute({ children }) {
  const [isAutherized, setIsAutherized] = useState(null);
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
    } catch (error) {
      console.log(error);

      setIsAutherized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAutherized(false);
      return;
    } else {
      const decode = jwtDecode(token);
      const tokenExpiretion = decode.exp;
      const now = Date.now() / 1000;

      if (tokenExpiretion < now) {
        await refreshToken();
      } else {
        setIsAutherized(true);
      }
    }
  };

  if (isAutherized === null) {
    return <div>Loading ...</div>;
  }

  return isAutherized ? children : <Navigate to="login" />;
}

export default ProtectedRoute;
