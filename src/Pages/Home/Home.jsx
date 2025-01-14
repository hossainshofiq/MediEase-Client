import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediEase | Home</title>
            </Helmet>

            <Slider></Slider>
            <Category></Category>

            <h1 className='text-5xl font-bold'>This is home</h1>
        </div>
    );
};

export default Home;