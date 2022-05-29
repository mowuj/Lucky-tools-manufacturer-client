import React from 'react';
import electricSaw from '../../../images/services/electricSaw.jpg'

const NewProduct = () => {
    return (
        
        <div>
            <h2 className='text-3xl text-center text-secondary'>Newest Product</h2>
             <div className="hero min-h-screen ">
            
  <div className="hero-content flex-col lg:flex-row">
    <img src={electricSaw} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Electric Saw!</h1>
      <p className="py-6">Our newest product.It Reduice Electricity Cost for any other Electric Saw.so you can buy and sell it easily.so see details and by it now.</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
       </div>
    );
};

export default NewProduct;