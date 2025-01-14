import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>MediEase | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="enter your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="enter a password" className="input input-bordered" required />
                        </div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Select Your Role</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>Select a Role</option>
                                <option>User</option>
                                <option>Seller</option>
                            </select>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <div className='divider'>Or continue with</div>
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className='text-center'>Already have an account? <Link className='text-blue-700 underline' to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;