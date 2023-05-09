/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ChocolateCard = ({ chocolate, setChocolates, chocolates, control, setControl }) => {
    const { name, _id, category, country, photo } = chocolate


    const handleDelete = (id) => {

        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                alert('Chocolate Deleted')

                // const filter = chocolates.filter(cf => cf._id !== id)
                setControl(!control)
                console.log(data)
            })


    }
    return (
        <>



            <tbody>
                {/* row 1 */}
                <tr>
                    <th><img className='w-10 h-16' src={photo} alt="" /></th>
                    <td>{name}</td>
                    <td>{country}</td>
                    <td>{category}</td>
                    <td> <div className='flex gap-3'>
                        <button onClick={() => handleDelete(_id)} className=' bg-cyan-100 px-4 rounded'>x</button>
                        <button className='bg-cyan-100 px-4 rounded'>Edite</button>
                    </div>
                    </td>
                </tr>
                <hr />

            </tbody>










        </>
    );
};

export default ChocolateCard;