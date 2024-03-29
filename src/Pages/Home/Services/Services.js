import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useTools from '../../../hooks/useTools';
import AllServices from '../AllServices/AllServices';
import BookingModal from '../BookingModal/BookingModal';


const Services = () => {
  const [services, setServices] = useTools();
  const [tool, setTool] = useState(null);
  
    return (
      <div>
        {
                    services.map(service => <BookingModal
                    key={service._id}
                      service={service}
                      setTreatment={setTool}
                    ></BookingModal>)
                } 
            <h4 className='text-xl text-secondary text-center my-4'>Our Services </h4>
            <h2 className='text-2xl text-center'>All Products:{ services.length}</h2>
    <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Photo</th>
        <th>Name</th>
        <th>Price</th>
        <th>Minimum Quantity</th>
        <th>Available</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
                    services.map(service => <AllServices
                    key={service._id}
                    service={service}
                    ></AllServices>)
                } 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Services;