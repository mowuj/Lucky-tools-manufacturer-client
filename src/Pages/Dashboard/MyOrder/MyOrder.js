import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [tools, setTools] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(user.email);
    // console.log(tools);
    useEffect(() => {
        if (user) {
            fetch(`https://agile-citadel-75234.herokuapp.com/booking?customer=${user.email}`, {
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
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Payment</button><button className='btn btn-xs red-500'>Cancel</button></Link>}
                                {(a.price && a.paid) && <div>
                                <p><span className='text-success'>Paid</span></p>
                                  <p>Transaction Id:<span className='text-success'>{ a.transactionId}</span></p>
                                </div>}
                              </td>
                                
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;