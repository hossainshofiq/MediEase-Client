import React from 'react';

const Imprint = () => {
    return (
        <div>
            {/* Header Banner Section */}
            <div
                style={{ backgroundImage: "url('https://medicana.co.in/assets/img/slider1.jpg')" }}
                className="relative w-full h-64 flex items-center justify-center text-center text-white bg-cover bg-center mt-[64px] lg:mt-[68px]"
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2 z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Imprint</h1>
                    <p className="font-semibold bg-gray-300 px-3 py-1 rounded-md text-black">MediEase / Imprint</p>
                </div>
            </div>

            {/* Imprint Content */}
            <div className="w-11/12 mx-auto p-6 mt-16 mb-10 rounded-lg border shadow-md">
                <h1 className="text-3xl font-bold text-primary mb-6 text-center">Imprint</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="mb-4">This website is operated by:</p>

                        <div className="mb-6">
                            <p><strong>MediEase Ltd.</strong></p>
                            <p>123 Health Avenue</p>
                            <p>Dhaka, Bangladesh</p>
                            <p>Phone: +880 1234 567890</p>
                            <p>Email: contact@mediease.com</p>
                        </div>

                        <h2 className="text-xl font-semibold mb-2">Managing Director:</h2>
                        <p className="mb-4">Md. Ali Hossain Shofiq</p>

                        <h2 className="text-xl font-semibold mb-2">Commercial Register Information:</h2>
                        <p>
                            Company Registration Number: 987654321<br />
                            VAT ID: BD123456789
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Regulatory Authority:</h2>
                        <p className="mb-4">
                            Directorate General of Drug Administration (DGDA)<br />
                            Ministry of Health and Family Welfare, Bangladesh
                        </p>

                        <h2 className="text-xl font-semibold mb-2">Disclaimer:</h2>
                        <p className="mb-4">
                            Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
                        </p>
                    </div>
                </div>

                <p className="mt-6 text-sm text-center">
                    © {new Date().getFullYear()} MediEase Industries Ltd. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Imprint;
