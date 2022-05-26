import React from 'react';
import useTools from '../../../hooks/useTools';
import AllServices from '../AllServices/AllServices';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useTools();
    return (
        <div>
            {
                        services.map(service => <AllServices
                            service={service}
                        ></AllServices>)
                }
        </div>
    );
};

export default Services;