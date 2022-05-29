import React from 'react';

const Summary = () => {
    return (
      <div className='flex justify-center'>
        <div className="stats stats-vertical lg:stats-horizontal shadow">
  
          <div className="stat">
            <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">customers</div>
    <div className="stat-value">100+ </div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
          <div className="stat">
            
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
      </div>
        </div>
      
    );
};

export default Summary;