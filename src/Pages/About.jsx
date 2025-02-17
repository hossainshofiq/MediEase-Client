import React from "react";

const About = () => {
    return (
        <div>
            <div style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_1280.jpg')" }} className="relative w-full h-64 flex items-center justify-center text-center text-white bg-cover bg-center mt-[68px]">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2">
                    <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-bold">About</h1>
                    <p className="font-semibold bg-gray-400 px-3 py-1 rounded-md text-black">MadeEase / About</p>
                </div>
            </div>

            {/* About Section */}
            <div className="w-11/12 mx-auto my-12 p-6 shadow-lg rounded-lg border">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">What is MadeEase?</h2>
                <p className="leading-relaxed">
                    MadeEase is a multi-vendor e-commerce platform designed for buying and selling medicines and healthcare products. 
                    Built using the MERN stack, it provides a seamless experience for users, sellers, and admins to manage and purchase 
                    healthcare essentials efficiently.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">Why Choose MadeEase?</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>🛒 <strong>Wide Range of Products:</strong> Browse and purchase medicines, healthcare products, and wellness essentials.</li>
                    <li>🔐 <strong>Secure & Reliable:</strong> Ensures safe transactions with user authentication and role-based dashboards.</li>
                    <li>🚀 <strong>Easy Order Management:</strong> Seamless order processing for both buyers and sellers.</li>
                    <li>💬 <strong>Customer Reviews:</strong> Read and share feedback to ensure quality healthcare solutions.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">How It Works?</h2>
                <p className="leading-relaxed">
                    Getting started with MadeEase is simple! Users can sign up, browse products, add items to the cart, and complete 
                    their purchases securely. Sellers can list their products, manage inventory, and fulfill orders effortlessly.
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">Join MadeEase Today!</h2>
                <p className="leading-relaxed">
                    Whether you're a customer looking for healthcare products or a seller aiming to reach more customers, MadeEase 
                    provides the perfect platform to connect. Sign up now and experience seamless online healthcare shopping!
                </p>
            </div>
        </div>
    );
};

export default About;
