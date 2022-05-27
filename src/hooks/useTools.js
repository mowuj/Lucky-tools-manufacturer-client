import { useEffect, useState } from "react";

const useTools = () => {
    
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://agile-citadel-75234.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices]
}
export default useTools;