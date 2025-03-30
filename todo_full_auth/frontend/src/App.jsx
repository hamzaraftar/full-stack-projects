import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFount from "./pages/NotFount";
import Todos from "./pages/Todos";
import { Link, Navigate } from "react-router-dom";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="flex justify-between p-5 items-center h-16 bg-gray-800 text-white cursor-pointer font-bold text-xl">
          <div><Link  to="/">Todo</Link></div>
          <ul className="flex gap-5">
            <li>  <Link className="bg-blue-500 inline-block text-white px-3.5 py-1.5 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-blue-700" to="/login">Login</Link> </li>
            <li><Link className="bg-blue-500 inline-block text-white px-3.5 py-1.5 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-blue-700" to="/register">Register</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/todos"
            element={
              <ProtectedRoutes>
                <Todos />
              </ProtectedRoutes>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
