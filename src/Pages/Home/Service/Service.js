import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const { name, img, description, price,quantity, _id,supplier } = service;
    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='inventory'>
            <img className='inventory-img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <p>Supplier:{supplier}</p>
            <p><small>{ description}</small> </p>
            <button onClick={()=>navigateToUpdate(_id)} className='btn-primary'>Update</button>
        </div>
    );
};

export default Service;