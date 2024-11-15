import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Createblog from "./pages/Createblog";
function App() {
  return (
    <>
      <Routes>
        <Route exect path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/create" element={<Createblog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
