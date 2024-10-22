import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Createblog from "./pages/Createblog";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/create-blog" element={<Createblog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
