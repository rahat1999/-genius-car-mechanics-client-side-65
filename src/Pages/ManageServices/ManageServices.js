import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://damp-mountain-14618.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDeleteBtn = (id) => {
        // console.log('delete', id)

        const confirm = window.confirm('Are You sure You want to delete ?')
        if (confirm) {
            const url = `https://damp-mountain-14618.herokuapp.com/services/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully')
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining)
                    }

                })
        }
    }
    return (
        <div>
            <h2>Manage Servics</h2>
            {
                services.map(service => <div
                    key={service._id}
                    className=' container mb-1 border border-2 rounded p-2'>
                    <h3 >{service.name}</h3>
                    <p >{service.price}$</p>
                    <button onClick={() => handleDeleteBtn(service._id)} >Delete</button>
                </div>
                )}

        </div>
    );
};

export default ManageServices;