import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const { name, img, description, price,quantity, _id,supplier } = service;
    const navigate = useNavigate();
    const navigateToBye = id => {
        navigate(`/service/${id}`)
    }
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
                <h2 className="card-title">{name}</h2>
    <p>Quantity:{quantity}</p>
    <p>Description:{description}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

    );
};

export default Service;