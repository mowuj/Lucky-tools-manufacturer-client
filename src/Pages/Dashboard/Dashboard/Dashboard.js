import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
  <input id=" dashbord-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label for=" dashbord-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      
            {!admin &&
              <>
               <li><Link to='/dashboard'>My Order</Link></li>
      <li><Link to='/dashboard/review'>Add Review</Link></li></>
      }
      <li><Link to='/dashboard/history'>My Profile</Link></li>
      
      
            {admin && <>
            <li><Link to='/dashboard/users'>All Users</Link></li>
            <li><Link to='/dashboard/manage'>Manage</Link></li>
            
            <li><Link to='/dashboard/addTools'>Add a Tool</Link></li>
            </>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;