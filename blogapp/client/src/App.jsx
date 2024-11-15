import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <Routes>
        <Route exect path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
