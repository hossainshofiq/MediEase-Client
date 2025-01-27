import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUpLottie from '../assets/Lottie/signUp.json'
import Lottie from 'lottie-react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import GoogleLogin from './GoogleLogin';

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logout } = useAuth();
    const axiosPublic = useAxiosPublic();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // console.log(location);

    const onSubmit = (data) => {
        // console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile info updated');
                        // create user registration send to database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: data.role
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // console.log("user added to the database");
                                    reset();
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sign Up successful",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
            
                                    navigate(from, { replace: true });
                                }
                            })
                    })
                    .catch(error => {
                        // console.log(error);
                    })
            })
    }

    return (
        <>
            <Helmet>
                <title>MediEase | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie className='' animationData={signUpLottie} loop={true} ></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 border shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold text-center mb-5">SignUp now!</h1>
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input  {...register("name", { required: true })} name='name' type="text" placeholder="enter your name" className="input input-bordered" required />
                                {errors.name && <span className='text-red-600'>User Name is required</span>}
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input  {...register("email", { required: true })} name='email' type="email" placeholder="enter your email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-600'>User Email is required</span>}
                            </div>
                            {/* photoURL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input  {...register("photoURL", { required: true })} name='photoURL' type="url" placeholder="enter your photo url" className="input input-bordered" required />
                                {errors.photoURL && <span className='text-red-600'>User photoURL is required</span>}
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })
                                } name='password' type="password" placeholder="enter a password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less then 16 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one uppercase, one lowercase, one number and one special Character</span>}
                            </div>
                            {/* role select */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Select Your Role</span>
                                </div>
                                <select {...register("role", { required: true })} defaultValue={"Select a Role"} name='role' className="select select-bordered">
                                    <option disabled>Select a Role</option>
                                    <option>user</option>
                                    <option>seller</option>
                                </select>
                                {errors.role && <span className='text-red-600'>Role is required</span>}
                            </label>
                            {/* button */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                                <div className='divider'>Or continue with</div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <p className='text-center'>Already have an account? <Link className='text-blue-700 underline' to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;