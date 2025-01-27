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

    const testimonials = [
        {
            name: 'John Doe',
            feedback: 'The delivery was super fast, and the medicines were authentic. Highly recommend this platform!',
            image: 'https://via.placeholder.com/100',
        },
        {
            name: 'Emily Smith',
            feedback: 'Their customer service is top-notch. They guided me with my prescription and ensured everything was smooth.',
            image: 'https://via.placeholder.com/100',
        },
        {
            name: 'Michael Brown',
            feedback: 'Wide range of medicines and reasonable prices. I found all the items I needed in one place!',
            image: 'https://via.placeholder.com/100',
        },
    ];

    return (
        <div className="bg-gray-100 py-10 px-4 sm:px-6 md:px-10 lg:px-16">
            {/* Our Services Section */}
            <SectionTitle heading="Why Choose Us" subHeading="Providing the best and authentic medicines" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white"
                    >
                        <div className="p-4 bg-gray-100 rounded-full">{service.icon}</div>
                        <div>
                            <h4 className="text-lg font-bold">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className='text-2xl font-semibold mt-5'>Customer Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                    >
                        <div className="relative mb-4">
                            <img
                                src={testimonial.image}
                                alt={`${testimonial.name}'s photo`}
                                className="w-20 h-20 rounded-full border-2 border-blue-500"
                            />
                            <FaQuoteLeft className="text-blue-500 text-3xl absolute -top-2 -left-2" />
                        </div>
                        <p className="text-sm text-gray-600 italic">"{testimonial.feedback}"</p>
                        <h4 className="text-lg font-semibold mt-4">{testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
