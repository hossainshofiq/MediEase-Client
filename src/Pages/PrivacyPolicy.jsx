import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div>
            {/* Header Banner Section */}
            <div
                style={{ backgroundImage: "url('https://medicana.co.in/assets/img/slider1.jpg')" }}
                className="relative w-full h-64 flex items-center justify-center text-center text-white bg-cover bg-center mt-[64px] lg:mt-[68px]"
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2 z-10">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Privacy Policy</h1>
                    <p className="font-semibold bg-gray-300 px-3 py-1 rounded-md text-black">MediEase / Privacy Policy</p>
                </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="w-11/12 mx-auto p-6 mt-16 mb-10 rounded-lg border shadow-md">
                <h1 className="text-3xl font-bold text-primary mb-6 text-center">Privacy Policy</h1>

                <p className="mb-4">
                    At <strong>MediEase</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our platform.
                </p>

                <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Personal Information:</strong> Name, email, address, phone number, etc.</li>
                    <li><strong>Health-related Information:</strong> When relevant to your product searches or purchases.</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent, device info, etc.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Provide and maintain our services</li>
                    <li>Process transactions securely</li>
                    <li>Improve user experience and customer support</li>
                    <li>Send updates, offers, and marketing communications (with your consent)</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
                <p className="mb-4">
                    We implement industry-standard security measures to protect your data. However, no method of transmission or storage is 100% secure.
                </p>

                <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
                <p className="mb-4">
                    We do not sell your personal information. We may share your data with trusted third parties who assist us in operating our platform, conducting business, or servicing you—provided they agree to keep your information confidential.
                </p>

                <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, correct, or delete your personal data. You can also withdraw consent or opt out of marketing communications at any time.
                </p>

                <h2 className="text-xl font-semibold mb-2">6. Policy Updates</h2>
                <p className="mb-4">
                    We may update this Privacy Policy occasionally. All changes will be posted on this page with the updated revision date.
                </p>

                <p className="text-gray-600 mt-6">
                    If you have questions about this Privacy Policy, please contact our support team.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
