import React from 'react';
import banner2 from '../../../images/services/banner2.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner2} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Buy From Us.And Stay safe</h1>
      <p className="py-6">We are the oldest Manufacturer company in Bangladesh.We Provided Service since 1992.So connect to us and buy your favorate product.And you also order for a new product.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;