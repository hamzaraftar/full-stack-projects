import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import "./App.css";
import Menu from "./routes/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
