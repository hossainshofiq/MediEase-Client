import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';

const InvoicePage = () => {

    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments= []} = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${_id}`);
            return res.data
        }
    })

    return (
        <div>
            Invoice page

            {
                payments.map( payment => 
                    <h1>{payment.price}</h1>
                )
            }
        </div>
    );
};

export default InvoicePage;