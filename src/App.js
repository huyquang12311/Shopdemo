import Login from './login/login';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Product from './component/Product/Product';
import Home from './pager/Home';
function App() {

  return (
    <div>
      <ul className='header'>
        <li><Link to="/" className='header-Link'>H.D|-photto</Link></li>
        <li><Link to="/" className='header-Link'>Home</Link></li>
        <li><Link to="/Login" className='header-Link'>Login</Link></li>
        <li><Link to="/Product" className='header-Link'>Product</Link></li>
      </ul>

      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/Login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
