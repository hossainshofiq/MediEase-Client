import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const SalesReport = () => {
    const axiosSecure = useAxiosSecure();

    const { data: salesReport = [] } = useQuery({
        queryKey: ['salesReport'],
        queryFn: async () => {
            const res = await axiosSecure.get('/sellsInfo');
            // console.log(res.data);
            return res.data;
        },
    });

    const totalPrice = salesReport.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <SectionTitle heading="All Sales Report" subHeading="Manage your company sales report"></SectionTitle>

            <div className="overflow-x-auto border my-10">
                <table className="table border">
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>#</th>
                            <th>Medicine Name</th>
                            <th>Buyer Email</th>
                            <th>Seller Email</th>
                            <th>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesReport.map((report, index) => (
                            <tr key={index} className='hover:bg-gray-100 hover:text-black'>
                                <th>{index + 1}</th>
                                <td>{report.medicineName}</td>
                                <td>{report.buyerEmail}</td>
                                <td>{report.sellerEmail}</td>
                                <td>${report.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h1 className='text-xl font-bold text-right my-3 border-t'>Total Price: {totalPrice.toFixed(2)}</h1>
            </div>
        </div>
    );
};

export default SalesReport;
