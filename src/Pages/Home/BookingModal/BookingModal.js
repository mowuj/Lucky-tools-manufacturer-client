import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ service ,setTool}) => {
    // const [valueEorror, setValueError] =useState('')
    const [user, loading, error] = useAuthState(auth);
    const {_id, name,quantity,price } = service;
    const handleBooking = event => {
        event.preventDefault();
        const quantityInput = event.target.quantity.value;
        
        // if (parseInt(quantityInput) > parseInt(quantity)) {
        //     const vError = 'invalid quantity'
        //     setValueError(vError);
        // }
        const newPrice = quantityInput * price;
        const booking={
            serviceId: _id,
            service: name,
            price:newPrice,
            customer: user.email,
            customerName: user.displayName,
            phone:event.target.phone.value
        }
        fetch('https://agile-citadel-75234.herokuapp.com//booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                toast('hey')
        
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg text-secondary">Booking For: {name }</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            
            <input type="text" name="name"disabled value={user.displayName||''} className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" disabled value={user.email||''} className="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
            
            <input type="text" name="address" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModal;