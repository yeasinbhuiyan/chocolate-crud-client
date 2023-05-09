/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    const navigate= useNavigate()
    const updatedChocolate = useLoaderData()
    const { name, photo, country, category, _id } = updatedChocolate
    console.log(updatedChocolate)

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const country = form.country.value
        const category = form.category.value
        const chocolate = { name, country, category }
        console.log(chocolate)

        fetch(`http://localhost:5000/updateChocolate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(chocolate)

        })
            .then(res => res.json())
            .then(data => {


                if (data.modifiedCount > 0) {

                    console.log(data)
                    Swal.fire(
                        'Good job!',
                        'Chocolate Updated!',
                        'success'
                      )
                  


                    navigate('/')


                }




            })
    }
    return (
        <>
            <div className='p-24 bg-gray-100'>
                <Link to='/'> <button className='btn hover:bg-purple-800 border-purple-400 hover:border-purple-400 bg-purple-500 p-2 rounded'> <FaArrowLeft></FaArrowLeft> Back</button></Link>
                <h1 className='text-center font-extrabold text-purple-600 text-4xl'>Chocolate Add Form</h1>

                <form onSubmit={handleUpdate}>
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Chocolate Name</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={name} name='name' type="text" placeholder="Chocolate Name" className="w-full input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Country</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={country} name='country' type="text" placeholder="Country" className="w-full input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={category} name='category' type="text" placeholder="Category" className="w-full input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={category} name='photo' type="text" placeholder="Photo URL" className="w-full input input-bordered" />
                            </label>
                        </div>


                    </div>
                    <div className="form-control w-full mt-8">
                        <input type="submit" className='btn btn-black' value="Save" />
                    </div>

                </form>
            </div>
        </>
    );
};

export default UpdateChocolate;