import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='my-96 text-center text-red-600 space-y-5'>
            <h1 className='font-bold text-7xl'>Hey Developer</h1>
            <h1 className='font-bold text-6xl'>Site Not Found</h1>
            <h3 className='font-bold text-4xl'>Status 404</h3>
            <Link to="/">
                <button className='btn btn-info mt-5 text-xl text-white'><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;