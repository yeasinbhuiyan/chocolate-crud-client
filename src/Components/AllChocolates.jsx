/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const AllChocolates = () => {
    const [chocolates, setChocolates] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chocolates')
            .then(res => res.json())
            .then(data => setChocolates(data))


    }, [])
    return (
        <div>
            {
                chocolates.map(chocolate => <p key={chocolate._id}>{chocolate.name}</p>)
            }

        </div>
    );
};

export default AllChocolates;