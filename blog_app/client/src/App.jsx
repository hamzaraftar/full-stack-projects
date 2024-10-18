import Header from "./components/Header";
import { Routes,Route } from 'react-router-dom'
import Createblog from "./pages/Createblog"

export default function App() {
  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path="/create-blog" element={ <Createblog /> }/>
        </Routes>
      </div>
    </>
  );
}
