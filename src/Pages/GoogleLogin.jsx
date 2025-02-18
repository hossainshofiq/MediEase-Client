import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const GoogleLogin = () => {

    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                // console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: "user",
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        // console.log(res.data);
                        navigate(from, { replace: true });
                    })

            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn btn-primary w-full'><FaGoogle></FaGoogle>Google</button>
        </div>
    );
};

export default GoogleLogin;