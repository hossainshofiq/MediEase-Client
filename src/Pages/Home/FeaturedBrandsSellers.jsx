import React from "react";
import SectionTitle from "../../Components/SectionTitle";

const brands = [
    { id: 1, name: "Beximco Pharma", logo: "https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2023/12/28/beximco-logo-tbs.jpg" },
    { id: 2, name: "Square Pharmaceuticals", logo: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/05/05/square_pharma.jpg" },
    { id: 3, name: "Renata Limited", logo: "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2023/04/29/renata.jpg" },
    { id: 4, name: "ACI Pharmaceuticals", logo: "https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2023/03/15/unnamed-1550074311993.jpg" },
];


const sellers = [
    { id: 1, name: "Lazz Pharma", logo: "https://www.contactdetails.info/admin/managebussinesscards/bussinesscardlogos/450932blob" },
    { id: 2, name: "Healthcare Pharma", logo: "https://www.tbsnews.net/sites/default/files/styles/author/public/organization/logo/healthcare_pharmaceuticals_limited.png" },
    { id: 3, name: "Arogya Pharmacy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJM46fjPty9xld8HbjWGvsw_5jIajlMXxxw&s" },
    { id: 4, name: "Unimart Pharmacy", logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/ba/e7/b2/bae7b241-e402-32fc-73f9-8d8a16638134/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg" },
];

const FeaturedBrandsSellers = () => {
    return (
        <div className="py-10">
            <div className="w-11/12 mx-auto text-center">

                <SectionTitle heading="Featured Brands & Seller" subHeading="Top Trusted Brands & Verified Sellers for Quality Healthcare"></SectionTitle>

                <div className="mt-6">
                    <div className="mb-6">
                        <h3 className="text-xl font-medium mb-4">Top Brands</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {brands.map((brand) => (
                                <div key={brand.id} className="p-4 bg-white shadow rounded-md border">
                                    <img src={brand.logo} alt={brand.name} className="h-16 mx-auto mb-2" />
                                    <p className="text-gray-700 font-medium">{brand.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-4">Trusted Sellers</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {sellers.map((seller) => (
                                <div key={seller.id} className="p-4 bg-white shadow rounded-md border">
                                    <img src={seller.logo} alt={seller.name} className="h-16 mx-auto mb-2" />
                                    <p className="text-gray-700 font-medium">{seller.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedBrandsSellers;
