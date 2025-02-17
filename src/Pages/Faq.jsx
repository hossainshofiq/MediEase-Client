import React from 'react';

const Faq = () => {
    return (
        <div className=''>
            <div style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_1280.jpg')" }} className="relative w-full h-64 flex items-center justify-center text-center text-white bg-cover bg-center mt-[68px]">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2">
                    <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-bold">FAQ</h1>
                    <p className="font-semibold bg-gray-400 px-3 py-1 rounded-md text-black">MadeEase / FAQ</p>
                </div>
            </div>

            <div className='w-11/12 mx-auto mt-6 pb-8 space-y-1'>
                {/* <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center py-6">FAQ</h3> */}

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">What is MadeEase?</div>
                    <div className="collapse-content text-sm">
                        MadeEase is a multi-vendor e-commerce platform for buying and selling medicines and healthcare products securely and efficiently.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I purchase a product?</div>
                    <div className="collapse-content text-sm">
                        Simply browse the categories, select your desired products, add them to the cart, and proceed to checkout for secure payment.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Can I sell products on MadeEase?</div>
                    <div className="collapse-content text-sm">
                        Yes! Sellers can register, list their products, manage inventory, and fulfill orders through their dedicated dashboard.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">What payment methods are available?</div>
                    <div className="collapse-content text-sm">
                        We support multiple payment options, including credit/debit cards, mobile banking, and cash on delivery (COD).
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Is my personal information secure?</div>
                    <div className="collapse-content text-sm">
                        Absolutely! We prioritize user privacy and ensure all transactions and data are securely protected.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
