import React from 'react';
import banner2 from '../../../images/services/banner2.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner2} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Hare</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;