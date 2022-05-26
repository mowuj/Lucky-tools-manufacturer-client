import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const { name, img, description, price,quantity, _id,supplier } = service;
    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/service/${id}`)
    }
    return (
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
                <h2 class="card-title">{name}</h2>
    <p>Quantity:{quantity}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    );
};

export default Service;