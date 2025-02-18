import React, { useEffect, useState } from 'react';
import logo from '../../assets/Logo/Website_logo_fabicon.png'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';

const Navbar = () => {

    const { user, logout } = useAuth();
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
    const [isSeller] = useSeller();

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logout Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                // console.log(error);
            })
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const navOptions = <>
        <div className='lg:flex font-semibold gap-2'>
            {/* <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>

            <li>
                <NavLink className="" to={'/cart'}>
                    <button className="flex gap-2">
                        <FaShoppingCart className='text-lg'></FaShoppingCart>
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </NavLink>
            </li> */}
            {
                user ? <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>

                    <li>
                        <NavLink className="" to={'/cart'}>
                            <button className="flex gap-2">
                                <FaShoppingCart className='text-lg'></FaShoppingCart>
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </button>
                        </NavLink>
                    </li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                    <li><NavLink to="/faq">FAQ</NavLink></li>
                </> : <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>

                    <li>
                        <NavLink className="" to={'/cart'}>
                            <button className="flex gap-2">
                                <FaShoppingCart className='text-lg'></FaShoppingCart>
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </button>
                        </NavLink>
                    </li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </>
            }
        </div>
    </>
    return (
        <div className="navbar bg-primary text-white px-2 md:px-12 lg:px-20 fixed top-0 z-50">
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
                        className="menu menu-sm dropdown-content bg-primary rounded-box z-[50] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-md lg:text-xl">
                    <img src={logo} alt="" />
                    MediEase
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end gap-2">

                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input onChange={toggleTheme} type="checkbox" className="theme-controller" value="synthwave" />

                    {/* sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>

                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold">
                                    {isAdmin ? "Admin" : isSeller ? "Seller" : "User"}
                                </span>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex">
                                    <div className="w-12 h-12 border-2 border-black rounded-full z-50">
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={user?.displayName}
                                            src={user?.photoURL}
                                            alt="User Avatar" />
                                        <Tooltip id="my-tooltip"></Tooltip>
                                    </div>
                                </div>

                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-gray-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Update Profile
                                    </a>
                                </li>

                                <li>
                                    {
                                        isAdmin ?
                                            (<NavLink to="/dashboard/adminProfile">Dashboard</NavLink>)
                                            :
                                            !isAdmin && isSeller ?
                                                (<NavLink to="/dashboard/sellerProfile">Dashboard</NavLink>)
                                                :
                                                (<NavLink to="/dashboard/userProfile">Dashboard</NavLink>)
                                    }
                                </li>

                                {/* <li><NavLink to="/dashboard">Dashboard</NavLink></li> */}
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <Link to="/login" className="btn btn-outline text-white">Join US</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;