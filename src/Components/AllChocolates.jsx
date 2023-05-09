/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ChocolateCard from './ChocolateCard';
import { Link } from 'react-router-dom';

const AllChocolates = () => {
    const [chocolates, setChocolates] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/chocolates')
            .then(res => res.json())
            .then(data => setChocolates(data))


    }, [control])
    return (
        <div className='p-24'>
            <div className='my-5'>
                <h1 className='bg-purple-100 p-3 text-center rounded text-4xl'>Chocolate Management System</h1>
            </div>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Counrty</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        chocolates.map(chocolate => <ChocolateCard key={chocolate._id} setControl={setControl} control={control} chocolate={chocolate}></ChocolateCard>)
                    }
                </table>
            </div>

            <div className='text-center my-5'>
                <Link to='/addChocolates'> <button className='btn hover:bg-purple-800 border-purple-400 hover:border-purple-400 bg-purple-500 p-2 rounded'>Add Chocolate</button></Link>
            </div>

        </div>
    );
};

export default AllChocolates;