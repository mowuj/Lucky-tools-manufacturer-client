import React from 'react';
import drillMachine from '../../../../images/services/drillMachine.jpg'
const MostSels = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={drillMachine} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 class="text-5xl font-bold">Drill Machine</h1>
      <p class="py-6">Electric Hand Drill MAchine is the most sellest product of the month of our company.we sold 2500 Drill Machine in the last month so you can buy for yor shop.and buy is easily</p>
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default MostSels;