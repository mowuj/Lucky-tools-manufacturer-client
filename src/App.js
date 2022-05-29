
import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Auth/Login/Login';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import SignUp from './Pages/Auth/SignUp/SignUp';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AddTools from './Pages/Dashboard/AddTools/AddTools';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Payment from './Pages/Dashboard/Payment/Payment';
import Users from './Pages/Dashboard/Users/Users';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';

import Navbar from './Pages/Shared/Navbar/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/service' element= {<RequireAuth><Services></Services></RequireAuth>}></Route>
        <Route path='/portfolio' element= {<Portfolio></Portfolio>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<RequireAuth><MyOrder></MyOrder></RequireAuth>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="history" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="addTools" element={<AddTools></AddTools>}></Route>
          <Route path="manage" element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path='/blogs' element={
          <Blogs></Blogs>
        }></Route>
        <Route path='/login' element= {<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
