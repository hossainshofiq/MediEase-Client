import React from 'react';

const TermsAndConditions = () => {
    return (
        <div>
            {/* Header Banner Section */}
            <div
                style={{ backgroundImage: "url('https://medicana.co.in/assets/img/slider1.jpg')" }}
                className="relative w-full h-64 flex items-center justify-center text-center text-white bg-cover bg-center mt-[64px] lg:mt-[68px]"
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2 z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Terms & Conditions</h1>
                    <p className="font-semibold bg-gray-300 px-3 py-1 rounded-md text-black">MediEase / Terms & Conditions</p>
                </div>
            </div>

            {/* Terms Content Section */}
            <div className="w-11/12 mx-auto p-6 mt-16 mb-10 rounded-lg border shadow-md">
                <h1 className="text-3xl font-bold text-primary mb-6 text-center">Terms and Conditions</h1>
                
                <p className="mb-4">
                    Welcome to <strong>MediEase</strong>. These Terms and Conditions outline the rules and regulations for the use of our platform.
                </p>

                <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing and using MediEase, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree, please do not use our service.
                </p>

                <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>You must be at least 18 years old to use this platform.</li>
                    <li>You agree to provide accurate and complete information.</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">3. Product Information</h2>
                <p className="mb-4">
                    While we strive to provide accurate medical product details, MediEase does not guarantee the completeness or reliability of product information. Always consult a qualified healthcare provider before use.
                </p>

                <h2 className="text-xl font-semibold mb-2">4. Orders and Payments</h2>
                <p className="mb-4">
                    All orders are subject to availability and approval. Payment must be made securely through our platform before order confirmation.
                </p>

                <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
                <p className="mb-4">
                    MediEase shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of our platform or products.
                </p>

                <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
                <p className="mb-4">
                    We reserve the right to update these Terms and Conditions at any time. Continued use of MediEase implies acceptance of any changes.
                </p>

                <p className="mt-6">
                    If you have any questions about our Terms and Conditions, please contact our support team.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
