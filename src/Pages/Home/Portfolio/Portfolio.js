import React from 'react';
import mowuj from '../../../images/mowuj.jpg'
const Portfolio = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl mx-24">
  <figure><div class="avatar">
  <div class="w-48 rounded m-8">
    <img src={mowuj} alt='mowuj' />
  </div>
</div></figure>
  <div class="card-body">
    <h2 class="card-title">Name:Md Ahsan Habib</h2>
    <p>Email:mowuj92@gmail.com</p>
    <p>Ssc:4.38</p>
    <p>Hsc:4.20</p>
    <p>Hon's:3.23</p>
                <p>Education:M.A</p>
                <p>Result:3.30</p>
    <p>Subject:Islamic History</p>
    
    
  </div>
  <div class="card-body">
    <h2 class="card-title">Technology i Know</h2>
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