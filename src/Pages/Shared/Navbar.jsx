import React from 'react';
import logo from '../../assets/Logo/Website_logo_fabicon.png'
import { Link, NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {

    const navOptions = <>
        <div className='flex gap-2'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Shop</NavLink></li>
            <li><NavLink to="/">Cart</NavLink></li>
            <li><NavLink to="/">Languages</NavLink></li>

            {/* <li><NavLink to="/"><FaCartPlus></FaCartPlus></NavLink></li>
            <li><NavLink to="/">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-xs">Languages</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>English</a></li>
                        <li><a>Bangla</a></li>
                    </ul>
                </div>
            </NavLink></li> */}
            {/* <li><NavLink to="/">Join US</NavLink></li> */}
        </div>
    </>
    return (
        <div className="navbar fixed z-50 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                    MediEase
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

            {/* <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div> */}

            <div className="navbar-end">
                <Link to="/login" className="btn">Join US</Link>
            </div>
        </div>
    );
};

export default Navbar;