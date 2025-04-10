import "./App.css";
import Header from "./components/Header";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";

function App() {
  return (
    <>
      <Header />
      <PostList/>
      <PostDetail/>
    </>
  );
}

export default App;
