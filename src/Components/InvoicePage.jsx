import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import websiteLogo from '../assets/Logo/Footer_logo.png'
import { Helmet } from 'react-helmet-async';

const InvoicePage = () => {
    const location = useLocation();
    const { transactionId, cart, totalPrice, date, userName, userEmail } = location.state || {};
    const invoiceRef = useRef();

    return (
        <div className="p-10">
            <Helmet>
                <title>MediEase | Invoice</title>
            </Helmet>

            <div ref={invoiceRef} className="bg-white border rounded-lg p-6 shadow-md">

                <div className="flex justify-between items-center mb-5">
                    <img
                        src={websiteLogo}
                        alt="Website Logo"
                        className="w-24"
                    />
                    <h1 className="text-2xl font-bold">Invoice</h1>
                </div>

                <div className="mb-5">
                    <p>
                        <strong>Transaction ID:</strong> {transactionId}
                    </p>
                    <p>
                        <strong>Date:</strong> {date}
                    </p>
                    <p>
                        <strong>User:</strong> {location.state?.userName || 'N/A'}
                    </p>
                    <p>
                        <strong>Email:</strong> {location.state?.userEmail || 'N/A'}
                    </p>
                </div>

                <h2 className="text-xl font-bold mb-3">Purchase Details</h2>
                <table className="table-auto w-full mb-5 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left">#</th>
                            <th className="border border-gray-300 p-2 text-left">Item Name</th>
                            <th className="border border-gray-300 p-2 text-left">Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2">{index + 1}</td>
                                <td className="border border-gray-300 p-2">{item.name}</td>
                                <td className="border border-gray-300 p-2">${item.unit_price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-right">
                    <p className="font-bold">Total: ${totalPrice}</p>
                </div>
            </div>

            <div className="mt-5 text-center">
                <button className="btn btn-primary px-4 py-2 text-white rounded">Download Invoice PDF</button>
            </div>
        </div>
    );
};

export default InvoicePage;
