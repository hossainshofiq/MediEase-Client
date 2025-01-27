import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLottie from '../assets/Lottie/login.json'
import Lottie from 'lottie-react';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import GoogleLogin from './GoogleLogin';

const Login = () => {

    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <>
            <Helmet>
                <title>MediEase | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={loginLottie} loop={true} ></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 border shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">

                            <h1 className="text-5xl font-bold text-center mb-5">Login now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                                <div className='divider'>Or continue with</div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <p className='text-center'>New here? <Link className='text-red-600 underline' to="/signUP">Sign UP</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;