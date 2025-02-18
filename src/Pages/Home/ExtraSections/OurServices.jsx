// import React from 'react';
// import { FaDollarSign, FaHeadset, FaCertificate, FaShieldAlt } from 'react-icons/fa';
// import SectionTitle from '../../../Components/SectionTitle';

// const OurServices = () => {
//     const services = [
//         {
//             title: 'Lowest Price Guarantee',
//             description: 'We ensure the best price for all your medicine needs.',
//             icon: <FaDollarSign className="text-blue-500 text-3xl" />,
//         },
//         {
//             title: 'Exceptional Customer Service',
//             description: '24/7 support for all your queries and assistance.',
//             icon: <FaHeadset className="text-blue-500 text-3xl" />,
//         },
//         {
//             title: 'Certified International Pharmacies',
//             description: 'All medicines are sourced from certified suppliers.',
//             icon: <FaCertificate className="text-blue-500 text-3xl" />,
//         },
//         {
//             title: '100% Secure Transactions',
//             description: 'Your information and payments are fully protected.',
//             icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
//         },
//     ];

//     return (
//         <div className="w-11/12 mx-auto my-10">
//             {/* Our Services Section */}
//             <SectionTitle heading="Our Service" subHeading="Committed to Your Wellness with Authentic Products"></SectionTitle>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="flex items-center gap-4 p-4 border rounded-md shadow-lg hover:shadow-xl transition duration-300 bg-white"
//                     >
//                         <div className="p-4 bg-gray-100 rounded-full">{service.icon}</div>
//                         <div>
//                             <h4 className="text-lg font-bold">{service.title}</h4>
//                             <p className="text-sm text-gray-600">{service.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurServices;

import React from 'react';
import { FaShippingFast, FaUserMd, FaMedkit, FaRegThumbsUp, FaClock, FaFileMedical, FaPrescriptionBottleAlt, FaHeartbeat } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle';

const OurServices = () => {
    const services = [
        {
            title: 'Fast & Reliable Delivery',
            description: 'Get your medicines delivered quickly & safely to your doorstep.',
            icon: <FaShippingFast className="text-blue-500 text-4xl" />,
        },
        {
            title: 'Expert Medical Consultation',
            description: 'Connect with licensed pharmacists & doctors anytime.',
            icon: <FaUserMd className="text-blue-500 text-4xl" />,
        },
        {
            title: 'Wide Range of Medicines',
            description: 'We offer a vast selection of authentic medicines & healthcare products.',
            icon: <FaMedkit className="text-blue-500 text-4xl" />,
        },
        {
            title: 'Trusted by Millions',
            description: 'Providing top-quality healthcare services with customer satisfaction.',
            icon: <FaRegThumbsUp className="text-blue-500 text-4xl" />,
        },
        {
            title: '24/7 Availability',
            description: 'Order medicines anytime, anywhere, with round-the-clock support.',
            icon: <FaClock className="text-blue-500 text-4xl" />,
        },
        {
            title: 'E-Prescriptions',
            description: 'Upload prescriptions and get medicines delivered hassle-free.',
            icon: <FaFileMedical className="text-blue-500 text-4xl" />,
        },
        {
            title: 'Discounted Medicines',
            description: 'Save money with amazing discounts & offers on healthcare essentials.',
            icon: <FaPrescriptionBottleAlt className="text-blue-500 text-4xl" />,
        },
        {
            title: 'Health & Wellness Support',
            description: 'Get expert guidance on nutrition, fitness, and preventive healthcare.',
            icon: <FaHeartbeat className="text-blue-500 text-4xl" />,
        },
    ];

    return (
        <div className="w-11/12 mx-auto my-10">
            {/* Section Title */}
            <SectionTitle heading="Our Services" subHeading="Providing You with the Best Healthcare Solutions"></SectionTitle>

            {/* Services Grid with Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 text-center border rounded-md shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div className="p-4 bg-base-200 rounded-full inline-block mb-4">{service.icon}</div>
                        <h4 className="text-lg font-semibold text-gray-800">{service.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;

