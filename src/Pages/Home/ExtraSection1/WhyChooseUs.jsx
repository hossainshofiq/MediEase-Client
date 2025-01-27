import React from 'react';
import { FaDollarSign, FaHeadset, FaCertificate, FaShieldAlt } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle';

const WhyChooseUs = () => {
    const features = [
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
            title: 'Certified by PharmacyChecker',
            description: 'We meet the highest standards of safety and quality.',
            icon: <FaCertificate className="text-blue-500 text-3xl" />,
        },
        {
            title: '100% Secure Transactions',
            description: 'Your information and payments are fully protected.',
            icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
        },
    ];

    return (
        <div className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-16">
            <SectionTitle heading="Why Choose Us" subHeading="Provide best and authentic medicines" />

            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16">
                {/* Left Section - Features */}
                <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                            >
                                <div className="p-3 bg-gray-100 rounded-full">{feature.icon}</div>
                                <div>
                                    <h4 className="text-base md:text-lg font-semibold">{feature.title}</h4>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex-1 w-full flex justify-center">
                    <img
                        src="https://img.freepik.com/free-photo/smiling-doctor-offering-medicines_329181-619.jpg"
                        alt="Doctor holding medicine"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg border shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;


