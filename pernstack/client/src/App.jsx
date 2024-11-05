import "./App.css";
import { Routes, Route, redirect } from "react-router-dom";
import Dashbord from "./components/Dashbord";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </>
  );
}

export default App;
