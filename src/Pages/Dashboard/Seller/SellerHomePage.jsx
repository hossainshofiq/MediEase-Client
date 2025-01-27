import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaDollarSign } from 'react-icons/fa';
import { MdPaid, MdPendingActions } from 'react-icons/md';
import { FcPaid } from 'react-icons/fc';

const SellerHomePage = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['seller-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/seller-stats');
            return res.data
        }
    })

    return (
        <div className="px-4 sm:px-8 lg:px-16 py-10">
            <h2 className='text-3xl font-semibold my-10'>
                <span>Hi, Welcome </span>
                {user?.displayName ? <span className='text-blue-500'>Mr. {user?.displayName}</span> : "Back"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="stat card shadow border bg-white p-5 rounded-lg">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className='text-4xl' />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat card shadow border bg-white p-5 rounded-lg">
                    <div className="stat-figure text-secondary">
                        <FcPaid className='text-5xl' />
                    </div>
                    <div className="stat-title">Paid Total</div>
                    <div className="stat-value">{stats.paidStatus}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat card shadow border bg-white p-5 rounded-lg">
                    <div className="stat-figure text-secondary">
                        <MdPendingActions className='text-5xl' />
                    </div>
                    <div className="stat-title">Pending Total</div>
                    <div className="stat-value">{stats.pendingStatus}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default SellerHomePage;
