import {BrowserRouter ,Routes ,Route ,Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Home from  './pages/Home'
import Register from  './pages/Register'
import NotFount from  './pages/NotFount'
import  ProtectedRoutes from "./components/ProtectedRoutes"

async function Logout() {
  localStorage.clear()
  return < Navigate to='/login'/>
}
function App() {
  

  return (
    <>
      <BrowserRouter ></BrowserRouter>
    </>
  )
}

export default App
