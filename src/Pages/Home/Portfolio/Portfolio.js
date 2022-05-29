import React from 'react';
import { Link } from 'react-router-dom';
import mowuj from '../../../images/mowuj.jpg'
const Portfolio = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-24">
  <figure><div className="avatar">
  <div className="w-48 rounded m-8">
    <img src={mowuj} alt='mowuj' />
  </div>
</div></figure>
  <div className="card-body">
    <h2 className="card-title">Name:Md Ahsan Habib</h2>
    <p>Email:mowuj92@gmail.com</p>
    
    <p>Education:M.A</p>
          <p>Subject:Islamic History</p>
          <h2 className="card-title">My Projects Link</h2>
          <a href="https://fitness-studio-de1ce.web.app/">1. Fitness Studio</a>
          <a href="https://chic-douhua-327480.netlify.app/">2. Laptop Analysis</a>
          <a href="https://car-inventoy.web.app/">3. Car Inventory</a>
    
    
  </div>
  <div className="card-body">
    <h2 className="card-title">Technology i Know</h2>
        <p>1.Html</p>
        <p>2.Css</p>
        <p>3.Bootstrap</p>
        <p>4.Tailwind</p>
        <p>5.JavaScript</p>
        <p>6.React</p>
        <p>7.Python</p>
        <p>8.Django</p>


    
        </div>
        
</div>
    );
};

export default Portfolio;