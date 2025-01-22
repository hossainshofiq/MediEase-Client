import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaPersonBooth, FaTrashAlt, FaUser, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
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

    // , {
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('access-token')}`
    //     }
    // }

    const handleMakeAdmin = (user) => {
        console.log(user);

        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
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
        console.log(user);

        axiosSecure.patch(`/users/seller/${user._id}`)
            .then(res => {
                console.log(res.data);
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
        console.log(user);

        axiosSecure.patch(`/users/user/${user._id}`)
            .then(res => {
                console.log(res.data);
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
            <div className='flex justify-evenly my-5'>
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
                                {/* <th>Role</th> */}
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
                                            {
                                                user.role === 'seller' ? "Seller" : <button onClick={() => handleMakeSeller(user)} className="btn btn-ghost"><FaUsers className='text-red-600 text-lg'></FaUsers></button>
                                            }
                                            {
                                                user.role === 'user' ? "User" : <button onClick={() => handleMakeUser(user)} className="btn btn-ghost"><FaUsers className='text-red-600 text-lg'></FaUsers></button>
                                            }
                                        </td>
                                        
                                        {/* <button className='btn btn-ghost'><RiAdminFill className='text-green-600 text-lg'></RiAdminFill></button> */}

                                        {/* <button className='btn btn-ghost'><FaUser className='text-red-600 text-lg'></FaUser></button> */}

                                        {/* <button className='btn btn-ghost'><FaUser className='text-red-600 text-lg'></FaUser></button> */}


                                        {/* <td>
                                            <select className="select select-bordered w-full max-w-xs">
                                                <option disabled selected>Select Role</option>
                                                <option onSelect={() => handleMakeAdmin(user)}>

                                                    Admin
                                                </option>
                                                <option>Seller</option>
                                                <option>User</option>
                                            </select>
                                        </td> */}

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

// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { FaTrashAlt, FaUsers } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// const ManageUsers = () => {

//     const axiosSecure = useAxiosSecure();
//     const { data: users = [], refetch } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/users');
//             return res.data;
//         }
//     });

//     const handleRoleChange = (user, newRole) => {
//         Swal.fire({
//             title: `Are you sure you want to make ${user.name} a ${newRole}?`,
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, confirm!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.patch(`/users/role/${user._id}`, { role: newRole })
//                     .then(res => {
//                         if (res.data.modifiedCount > 0) {
//                             refetch();
//                             Swal.fire({
//                                 title: "Success!",
//                                 text: `${user.name} is now a ${newRole}.`,
//                                 icon: "success"
//                             });
//                         }
//                     });
//             }
//         });
//     };

//     const handleDeleteUser = (user) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.delete(`/users/${user._id}`)
//                     .then(res => {
//                         if (res.data.deletedCount > 0) {
//                             refetch();
//                             Swal.fire("Deleted!", "User has been deleted.", "success");
//                         }
//                     });
//             }
//         });
//     };

//     return (
//         <div>
//             <div className='flex justify-evenly gap-52 my-5'>
//                 <h2 className='text-3xl font-bold'>Manage Users</h2>
//                 <h2 className='text-3xl font-bold'>Total Users: {users.length}</h2>
//             </div>

//             <div>
//                 <div className="overflow-x-auto border">
//                     <table className="table">
//                         {/* head */}
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Role</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((user, index) => (
//                                 <tr key={user._id}>
//                                     <th>{index + 1}</th>
//                                     <td>{user.name}</td>
//                                     <td>{user.email}</td>
//                                     <td>
//                                         <select
//                                             className="select select-bordered w-full max-w-xs"
//                                             defaultValue={user.role}
//                                             onChange={(e) => handleRoleChange(user, e.target.value)}
//                                         >
//                                             <option value="admin">Admin</option>
//                                             <option value="seller">Seller</option>
//                                             <option value="user">User</option>
//                                         </select>
//                                     </td>
//                                     <td>
//                                         <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost">
//                                             <FaTrashAlt className='text-red-600 text-lg' />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageUsers;
