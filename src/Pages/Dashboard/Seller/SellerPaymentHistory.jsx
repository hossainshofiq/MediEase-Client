import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import SectionTitle from '../../../Components/SectionTitle';

const SellerPaymentHistory = () => {

    const {user} = useAuth();
const axiosSecure = useAxiosSecure();

    const {data: payments} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle heading="Payment History" subHeading="Find your all payments history is here"></SectionTitle>
        </div>
    );
};

export default SellerPaymentHistory;