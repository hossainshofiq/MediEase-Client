import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCategory from '../../../Hooks/useCategory';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageCategory = () => {

    const [category, isLoading] = useCategory();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        categoryName: '',
        categoryImage: ''
    });

    const handleUpdateCategory = (item) => {
        console.log(item);
    }

    const handleDeleteCategory = (item) => {
        console.log(item);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`medicine/categories/${item.category}`)
                    .then(res => {
                        console.log(res.data);
                        console.log(item.category);
                    })

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddCategory = (e) => {
        e.preventDefault();

        // Simulating a backend call
        console.log('New Category:', formData);

        // Close modal
        setIsModalOpen(false);
    };

    return (
        <div className='my-10'>
            <div className='flex justify-between items-center mb-5'>
                <h2 className='text-3xl font-bold'>Manage Category</h2>
                <button className='btn'>Add Category</button>

                <button
                    className='btn'
                    onClick={() => setIsModalOpen(true)}
                >
                    Add Category
                </button>
            </div>

            <div className="overflow-x-auto border">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((item, index) =>
                                <tr key={item.category}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.medicine_count}</td>
                                    <th className='flex gap-2 items-center'>
                                        <button onClick={() => handleUpdateCategory(item)} className="btn btn-ghost btn-md text-green-600"><FaEdit></FaEdit></button>
                                        <button onClick={() => handleDeleteCategory(item)} className="btn btn-ghost btn-md text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-5 rounded shadow-lg w-96">
                        <h3 className="text-2xl font-semibold mb-4">Add New Category</h3>
                        <form onSubmit={handleAddCategory}>
                            <div className="mb-3">
                                <label className="block text-sm font-medium mb-1" htmlFor="categoryName">
                                    Category Name
                                </label>
                                <input
                                    type="text"
                                    id="categoryName"
                                    name="categoryName"
                                    className="input input-bordered w-full"
                                    value={formData.categoryName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium mb-1" htmlFor="categoryImage">
                                    Category Image URL
                                </label>
                                <input
                                    type="url"
                                    id="categoryImage"
                                    name="categoryImage"
                                    className="input input-bordered w-full"
                                    value={formData.categoryImage}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    className="btn btn-secondary mr-2"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageCategory;

// const [category, setCategory] = useState([]);

// useEffect(() => {
//     fetch('http://localhost:5000/medicine/categories')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             // const sortedData = data.sort((a, b) => (a.category - b.category));
//             setCategory(data)
//         })
// }, [])

// const axiosSecure = useAxiosSecure();