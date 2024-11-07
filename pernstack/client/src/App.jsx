import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashbord from "./components/Dashbord";
import Register from "./components/Register";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <>
      <Routes>
        <Route
          path={isAuthenticated ? "/login" : "/dashbord"}
          element={<Login setAuth={setAuth} />}
        />
        <Route
          path={isAuthenticated ? "/register" : "/login"}
          element={<Register setAuth={setAuth} />}
        />
        <Route
          path={isAuthenticated ? "/dashbord" : "/login"}
          element={<Dashbord setAuth={setAuth} />}
        />
      </Routes>
    </>
  );
}

export default App;
