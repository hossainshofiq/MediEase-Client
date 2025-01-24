import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import SectionTitle from '../../../Components/SectionTitle';

const SellerPaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle heading="Payment History" subHeading="Find your all payments history is here"></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table border">
                    <thead>
                        <tr className='bg-blue-500 text-white'>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) =>
                                <tr key={payment._id} className='hover:bg-gray-100'>
                                    <th>{index + 1}</th>
                                    <td>${payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.status}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellerPaymentHistory;