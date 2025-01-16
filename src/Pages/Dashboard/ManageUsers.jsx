import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <div className='flex justify-between gap-52 my-5'>
                <h2 className='text-3xl font-bold'>Manage Users</h2>
                <h2 className='text-3xl font-bold'>Total Users: </h2>
            </div>
        </div>
    );
};

export default ManageUsers;