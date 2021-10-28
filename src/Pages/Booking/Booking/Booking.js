import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h5>{service?.name}</h5>
            <p>{service?.description}</p>
            <b>{service?.price}</b>

        </div>
    );
};

export default Booking;