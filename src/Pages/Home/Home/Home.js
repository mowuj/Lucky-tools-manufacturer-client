import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../../hooks/useTools';
import Carousel from '../Carousel/Carousel';
import Service from '../Service/Service';
import Summary from '../Summary/Summary';

const Home = () => {
    const [services, setServices] = useTools();
    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    const handeNavigate= () => {
        navigate('/inventory')
    }
    return (
        <div>
            
            <Carousel></Carousel>
            <div id='inventory' className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Inventories</h1>
            <div className='inventory-container'>
                    {
                        services.slice(0, 6).map(service => <Service
                            service={service}
                        ></Service>)
                        }
                        <button onClick={handeNavigate} className='btn-info ms-auto p-2'>Go to Inventory</button>

                </div>
                
            </div>
            
        </div>
            <Summary></Summary>
            
        </div>
    );
};

export default Home;