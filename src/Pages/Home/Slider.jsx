import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import userAdvertisement from '../../Hooks/userAdvertisement';
import useActiveAd from '../../Hooks/useActiveAd';

const Slider = () => {

    const [activeAdvertise] = useActiveAd();

    return (

        <div className='mt-[64px] lg:mt-[68px] '>
            <Carousel autoPlay={Boolean} interval={3000} infiniteLoop={true} showStatus={false}>
                {activeAdvertise.map((ad) => (
                    <div key={ad._id} className="text-center">
                        <img src={ad.image} alt="Advertisement" className="object-cover max-h-[200px] md:max-h-[300px] lg:max-h-[500px] w-full" />
                        <p className="text-md absolute right-0 mr-8 -mt-12 bg-slate-800 p-2 text-white rounded-md">{ad.medicine_name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;