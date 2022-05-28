import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [tools, setTools] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user.email);
    console.log(tools);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?customer=${user.email}`, {
                method: 'GET',
            headers: {
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
            })
                .then(res => res.json())
                .then(data => setTools(data));
        }
    }, [user])
    return (
        <div>
            <h2>My Order: {tools.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tools</th>
                            <th>Orders</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.customer}</td>
                                <td>{a.service}</td>
                                <td>{a.price}</td>
                                <td>{a.price}</td>
                                <td><Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Payment</button></Link> <button className='btn btn-xs red-500'>Cancel</button></td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;