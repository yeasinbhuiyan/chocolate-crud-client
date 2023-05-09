/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBeer, FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const ChocolateCard = ({ chocolate, setChocolates, chocolates, control, setControl }) => {
    const { name, _id, category, country, photo } = chocolate


    const handleDelete = (id) => {



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {



                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        setControl(!control)
                        console.log(data)

                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )

                      
                       

                        // const filter = chocolates.filter(cf => cf._id !== id)

                    })



              
            }
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
                        <button onClick={() => handleDelete(_id)} className=' bg-purple-100 px-4 p-2 rounded'><FaTrashAlt className=''></FaTrashAlt></button>
                        <Link to={`/updateChocolate/${_id}`}><button className='bg-purple-100 p-2 px-4 rounded'><FaPen></FaPen></button></Link>
                    </div>
                    </td>
                </tr>
                <hr />

            </tbody>










        </>
    );
};

export default ChocolateCard;