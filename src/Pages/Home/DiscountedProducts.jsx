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


{/* <SwiperSlide>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/371973368/PF/YZ/ZC/143694138/2d9fab708db2e913a0c44441f0b49c2c.jpg" alt="" />
                    <h4 className='text-3xl font-semibold uppercase text-center text-black -mt-16 pb-16'>10%</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.chaldn.com/_mpimage/vital-d-capsule-40000iu-7-capsules?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129302&q=low&v=1" alt="" />
                    <h4 className='text-3xl font-semibold uppercase text-center text-black -mt-16 pb-16'>10%</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.consumerlab.com/images/review/357_image_hires_vitamin-k-supplements-reviewed-by-consumerlab-hires-2022-v2.jpg" alt="" />
                    <h4 className='text-3xl font-semibold uppercase text-center text-black -mt-16 pb-16'>10%</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/371973368/PF/YZ/ZC/143694138/2d9fab708db2e913a0c44441f0b49c2c.jpg" alt="" />
                    <h4 className='text-3xl font-semibold uppercase text-center text-black -mt-16 pb-16'>10%</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.chaldn.com/_mpimage/vital-d-capsule-40000iu-7-capsules?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129302&q=low&v=1" alt="" />
                    <h4 className='text-3xl font-semibold uppercase text-center text-black -mt-16 pb-16'>10%</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.consumerlab.com/images/review/357_image_hires_vitamin-k-supplements-reviewed-by-consumerlab-hires-2022-v2.jpg" alt="" />
                    <h4 className='text-3xl font-semibold uppercase text-center text-black -mt-16 pb-16'>10%</h4>
                </SwiperSlide> */}