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
        navigate('/service')
    }
    return (
        <div>
            
            <Carousel></Carousel>
            <h4 className='text-xl text-secondary text-center my-12'>Our Services </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-12'>
                 {
                        services.slice(0, 3).map(service => <Service
                            service={service}
                        ></Service>)
                }
                <button onClick={handeNavigate} class="btn btn-xs flex justify-center items-center sm:btn-sm md:btn-md lg:btn-lg">See All Service</button>
                        
            </div>
           
            <Summary></Summary>
            
        </div>
    );
};

export default Home;