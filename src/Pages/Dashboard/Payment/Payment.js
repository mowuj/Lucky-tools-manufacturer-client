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
    const url=`https://agile-citadel-75234.herokuapp.com/booking/${id}`
    const { data,isLoading } = useQuery(['booking', id], () => fetch(url, {
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
            
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello,{ data.customerName}</p>
                            <h2 className="card-title">Pay for :{ data.service}</h2>
                            
                    <p>Please Pay :${ data.price}</p>
  </div>
</div>
{/* pk_test_51L3HzCFICgNuMVET4lm1alcn4VyaJfMWJm0ke7akqFag2hi9hvzX0ZHIYGh48uaHZh5f2T4dUVyA44XHPcBVwelS006dwqyc2O */}
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
            <Elements stripe={stripePromise}>
                        <CheckoutForm data={ data}/>
            </Elements>
        </div>
    </div>
  </div>

    );
};

export default Payment;