import React from 'react';
import { FaTruck, FaRegClock, FaPrescriptionBottleAlt, FaHandsHelping, FaDollarSign, FaHeadset, FaCertificate, FaShieldAlt, FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle';

const OurServices = () => {
    const services = [
        {
            title: 'Lowest Price Guarantee',
            description: 'We ensure the best price for all your medicine needs.',
            icon: <FaDollarSign className="text-blue-500 text-3xl" />,
        },
        {
            title: 'Exceptional Customer Service',
            description: '24/7 support for all your queries and assistance.',
            icon: <FaHeadset className="text-blue-500 text-3xl" />,
        },
        {
            title: 'Certified International Pharmacies',
            description: 'All medicines are sourced from certified suppliers.',
            icon: <FaCertificate className="text-blue-500 text-3xl" />,
        },
        {
            title: '100% Secure Transactions',
            description: 'Your information and payments are fully protected.',
            icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
        },
    ];

    return (
        <div className="w-11/12 mx-auto my-10">
            {/* Our Services Section */}
            <SectionTitle heading="Our Service" subHeading="Committed to Your Wellness with Authentic Products"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-4 border rounded-md shadow-lg hover:shadow-xl transition duration-300 bg-white"
                    >
                        <div className="p-4 bg-gray-100 rounded-full">{service.icon}</div>
                        <div>
                            <h4 className="text-lg font-bold">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
