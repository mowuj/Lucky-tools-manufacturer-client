import React from 'react';

const AllServices = ({ service }) => {
    
    const { name,img,price,Minimum_quantity,quantity } = service;
    return (
        <tr>
        <th>1</th>
        <td><div class="avatar">
  <div class="w-8 rounded">
    <img src={img} alt={name} />
  </div>
</div></td>
        <td>{ name }</td>
        <td>{ price }</td>
        <td>{ Minimum_quantity }</td>
        <td>{ quantity }</td>
        
        <td><button class="btn btn-xs">purchase</button></td>
      </tr>
    );
};

export default AllServices;