import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyBooking = () => {
    const [tools, setTools] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://agile-citadel-75234.herokuapp.com/booking?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setTools(data));
        }
    }, [user])
    return (
        <div>
            <h2>My Appointments: {tools.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;