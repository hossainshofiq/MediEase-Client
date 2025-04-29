import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../Components/SectionTitle';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const DiscountedProducts = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: discountedMedicine = [], isLoading } = useQuery({
        queryKey: ['discounted_medicines'],
        queryFn: async () => {
            const res = await axiosPublic.get('/discounted_medicines');
            return res.data;
        }
    });

    // Filter only discounted medicines
    const filteredDiscountedMedicines = discountedMedicine.filter(
        (medicine) => parseFloat(medicine.discount_percentage) > 0
    );

    return (
        <div className='w-11/12 mx-auto my-10'>
            <SectionTitle heading="Discounted product" subHeading="Best Deals—Hurry Before Stock Runs Out!"></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                {filteredDiscountedMedicines.map((medicine, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className='max-w-full max-h-[300px] lg:w-full lg:h-96 rounded-md border object-cover'
                            src={medicine.image}
                            alt={medicine.name || 'Discounted Product'}
                        />
                        <h4 className="text-xs md:text-md lg:text-xl p-1 rounded-md font-bold bg-slate-900 text-white absolute right-0 mr-4 -mt-24 md:mr-4 md:-mt-16 lg:mr-12 lg:-mt-16">
                            {medicine.discount_percentage}%
                        </h4>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiscountedProducts;