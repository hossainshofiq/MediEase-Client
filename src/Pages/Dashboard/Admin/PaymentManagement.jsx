import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const PaymentManagement = () => {
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`);
            return res.data;
        }
    });

    const handleStatusPaid = async (paymentId) => {
        const res = await axiosSecure.patch(`/payments/${paymentId}`);
        if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment paid successful",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div>
            <SectionTitle
                heading="Payment Management System"
                subHeading="All payments here; you can accept to be paid"
            ></SectionTitle>

            <div className="overflow-x-auto border my-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.price}</td>
                                <td>{payment.email}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.status}</td>
                                <td>
                                    {payment.status !== 'paid' ? (
                                        <button
                                            onClick={() => handleStatusPaid(payment._id)}
                                            className="btn btn-accent btn-sm"
                                        >
                                            Accept Payment
                                        </button>
                                    ) : (
                                        <span className="text-green-500 font-semibold">Paid</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentManagement;
