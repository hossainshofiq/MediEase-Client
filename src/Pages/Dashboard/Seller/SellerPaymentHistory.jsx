import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import usePayments from '../../../Hooks/usePayments';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const SellerPaymentHistory = () => {

    const {user} = useAuth();
    // const [payments] = usePayments();

    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            // console.log(res.data);
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle heading="Payment History" subHeading="Find your all payments history is here from user"></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table border">
                    <thead>
                        <tr className='bg-blue-500 text-white'>
                            <th>#</th>
                            <th>Price</th>
                            <th>User</th>
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
                                    <td>{payment.email}</td>
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