import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from './crud/User';
import Home from './Component/Home';
import Menu from './crud/Menu';
import Pesanan from './crud/Pesanan';
import Detail from './crud/Detail';
import Login from './Reg/Login';
import Logout from './Reg/Logout';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/user" element={<User/>}></Route>
       <Route path="/dashboard" element={<Home/>}></Route>
       <Route path="/menu" element={<Menu/>}></Route>
       <Route path="/pesanan" element={<Pesanan/>}></Route>
       <Route path="/detail" element={<Detail/>}></Route>
       <Route path="/" element={<Login/>}></Route>
       <Route path="/logout" element={<Logout/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
