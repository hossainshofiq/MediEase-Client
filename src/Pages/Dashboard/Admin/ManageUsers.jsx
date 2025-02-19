import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaPersonBooth, FaTrashAlt, FaUser, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from './../../../Components/SectionTitle';
import { RiAdminFill } from 'react-icons/ri';

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        // console.log(user);

        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleMakeSeller = (user) => {
        // console.log(user);

        axiosSecure.patch(`/users/seller/${user._id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is a Seller Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleMakeUser = (user) => {
        // console.log(user);

        axiosSecure.patch(`/users/user/${user._id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an User Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = (user) => {
        // console.log(user);

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

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User deleted successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='my-10'>
            <SectionTitle heading="Manage all users" subHeading="Modify Access Levels Seamlessly"></SectionTitle>
            <div className='my-10'>
                <div className='mb-5'>
                    <h2 className='text-3xl font-bold'>Total Users: {users.length}</h2>
                </div>

                <div>
                    <div className="overflow-x-auto border">
                        <table className="table border">
                            {/* head */}
                            <thead>
                                <tr className='bg-primary text-white'>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) =>
                                        <tr key={user._id} className='hover:bg-gray-100 hover:text-black'>
                                            <th>{index + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            {/* <td>
                                                {
                                                    user.role === 'admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost"><FaUsers className='text-red-600 text-lg'></FaUsers></button>
                                                }
                                                {
                                                    user.role === 'seller' ? "Seller" : <button onClick={() => handleMakeSeller(user)} className="btn btn-ghost"><FaUsers className='text-red-600 text-lg'></FaUsers></button>
                                                }
                                                {
                                                    user.role === 'user' ? "User" : <button onClick={() => handleMakeUser(user)} className="btn btn-ghost"><FaUsers className='text-red-600 text-lg'></FaUsers></button>
                                                }
                                            </td> */}

                                            <td className='flex gap-2 items-center'>
                                                {user.role === 'admin' ? (
                                                    "Admin"
                                                ) : (
                                                    <button
                                                        onClick={() => handleMakeAdmin(user)}
                                                        className="btn btn-ghost"
                                                    >
                                                        <FaUsers className="text-red-600 text-lg" />
                                                    </button>
                                                )}

                                                {
                                                    user.role === 'seller' ? "Seller" : <button
                                                        onClick={() => handleMakeSeller(user)}
                                                        className="btn btn-ghost"
                                                        disabled={user.role === 'admin'}
                                                    >
                                                        <FaUsers className="text-red-600 text-lg" />
                                                    </button>
                                                }

                                                {
                                                    user.role === 'user' ? "User" : <button
                                                        onClick={() => handleMakeUser(user)}
                                                        className="btn btn-ghost"
                                                        disabled={user.role === 'admin'}
                                                    >
                                                        <FaUsers className="text-red-600 text-lg" />
                                                    </button>
                                                }
                                            </td>

                                            <td>
                                                <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost"><FaTrashAlt className='text-red-600 text-lg'></FaTrashAlt></button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
