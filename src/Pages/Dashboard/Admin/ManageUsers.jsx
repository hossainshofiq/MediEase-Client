import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaPersonBooth, FaTrashAlt, FaUser, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const ManageUsers = () => {

    // const {user} =useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // , {
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('access-token')}`
    //     }
    // }

    const handleMakeAdmin = (user) => {
        console.log(user);

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

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
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
        });
    }

    const handleDeleteUser = (user) => {
        console.log(user);

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
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your medicine has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className='flex justify-evenly gap-52 my-5'>
                <h2 className='text-3xl font-bold'>Manage Users</h2>
                <h2 className='text-3xl font-bold'>Total Users: {users.length}</h2>
            </div>

            <div>
                <div className="overflow-x-auto border">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
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
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                user.role === 'admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost"><FaUsers className='text-red-600 text-lg'></FaUsers></button>
                                            }

                                            {/* {
                                                user.role === 'seller' ? "Seller" : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost"><FaUser className='text-red-600 text-lg'></FaUser></button>
                                            }

                                            {
                                                user?.role && <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost"><FaPersonBooth className='text-red-600 text-lg'></FaPersonBooth></button>
                                            } */}
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
    );
};

export default ManageUsers;