import React from 'react';
import drillMachine from '../../../../images/services/drillMachine.jpg'
const MostSels = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={drillMachine} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Drill Machine</h1>
      <p className="py-6">Electric Hand Drill MAchine is the most sellest product of the month of our company.we sold 2500 Drill Machine in the last month so you can buy for yor shop.and buy is easily</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default MostSels;