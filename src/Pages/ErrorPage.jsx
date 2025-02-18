import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import errorImage from '../assets/error_page.png'

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-3">
        <img className="w-[400px] md:w-[500px] h-auto" src={errorImage} alt="Error" />
        <Link to="/">
            <button className="btn btn-primary rounded-md text-xl text-white flex items-center gap-2">
                <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back to Home
            </button>
        </Link>
    </div>
    );
};

export default ErrorPage;