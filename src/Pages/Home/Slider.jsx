import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <Carousel autoPlay={Boolean} interval={3000} infiniteLoop={Boolean} showStatus={false}>
                <div>
                    <img src="https://medicana.co.in/assets/img/slider1.jpg" />
                </div>
                <div>
                    <img src="https://images.vexels.com/content/202422/preview/fullscreen-pharmacy-business-slider-design-07900f.png" />
                </div>
                <div>
                    <img src="https://st5.depositphotos.com/1049680/66376/i/450/depositphotos_663765204-stock-photo-young-blonde-woman-pharmacist-smiling.jpg" />
                </div>
            </Carousel>
    );
};

export default Slider;