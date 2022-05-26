
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/blogs' element= {<Blogs></Blogs>}></Route>
        <Route path='/login' element= {<Login></Login>}></Route>
        <Route path='/signup' element= {<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
