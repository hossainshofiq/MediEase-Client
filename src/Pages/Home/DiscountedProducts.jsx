import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../Components/SectionTitle';

const DiscountedProducts = () => {
    return (
        <div>
            <SectionTitle heading="Discounted product" subHeading="Grab it fast"></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
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
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DiscountedProducts;