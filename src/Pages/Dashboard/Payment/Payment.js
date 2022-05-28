import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
// import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3uVdKsjvUBmvVjS6Lvi0Uz3OHWzCy9UYcj8Evkpsb6hV6hawVMfu9Rfe2A0sPXjgVfM2sWoFj6sS6YoJGJVuP300zpu21NDb');
const Payment = () => {
    const { id } = useParams();
    const url=`http://localhost:5000/booking/${id}`
    const { data:service,isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
            headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello,{ service.customerName}</p>
                            <h2 class="card-title">Pay for :{ service.service}</h2>
                            
                    <p>Please Pay :${ service.price}</p>
  </div>
</div>
{/* pk_test_51L3HzCFICgNuMVET4lm1alcn4VyaJfMWJm0ke7akqFag2hi9hvzX0ZHIYGh48uaHZh5f2T4dUVyA44XHPcBVwelS006dwqyc2O */}
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
            <Elements stripe={stripePromise}>
                        <CheckoutForm service={ service}/>
            </Elements>
        </div>
    </div>
  </div>

    );
};

export default Payment;