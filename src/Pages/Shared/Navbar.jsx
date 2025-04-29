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
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {

    const { user, logout, loading } = useAuth();
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

    // NavOptions for mobile and desktop
    const navOptions = <>
        <div className='lg:flex gap-2'>
            {
                user ? <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>

                    <li>
                        <NavLink className="" to={'/cart'}>
                            <button className="flex gap-2">
                                <FaShoppingCart className='text-lg'></FaShoppingCart>
                                <div className="badge  badge-success">+{cart.length}</div>
                            </button>
                        </NavLink>
                    </li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/faq">FAQ</NavLink></li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                </> : <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>

                    <li>
                        <NavLink className="" to={'/cart'}>
                            <button className="flex gap-2">
                                <FaShoppingCart className='text-lg'></FaShoppingCart>
                                <div className="badge badge-success">+{cart.length}</div>
                            </button>
                        </NavLink>
                    </li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </>
            }
        </div>
    </>
    return (
        <div className="navbar bg-primary bg-opacity-90 text-white px-2 md:px-10 lg:px-20 fixed top-0 z-50">
            <div className="navbar-start">
                {/* Hamburger menu for mobile & Tablet view */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FiMenu className='h-6 w-6'></FiMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary rounded-box z-[50] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-md lg:text-xl">
                    <img src={logo} alt="Website Logo" />
                    MediEase
                </Link>
            </div>

            {/* Navbar for Desktop view */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end gap-3">

                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input onChange={toggleTheme} type="checkbox" className="theme-controller" value="synthwave" />
                    {/* sun icon */}
                    <FiSun className='swap-on h-7 w-7 md:w-8 md:h-8'></FiSun>
                    {/* moon icon */}
                    <FiMoon className='swap-off h-7 w-7 md:w-8 md:h-8'></FiMoon>

                </label>

                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div className="flex items-center gap-3">
                                {/* showing Admin, Seller, or User */}
                                {
                                    loading ? <span className="loading loading-ring loading-lg"></span>
                                        :
                                        <span className="text-sm font-bold">
                                            {isAdmin ? "Admin" : isSeller ? "Seller" : "User"}
                                        </span>
                                }

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex">
                                    {
                                        loading ? <span className="loading loading-ring loading-lg"></span>
                                            :
                                            <div className="w-12 h-12 border-2 border-black rounded-full z-50">
                                                <img
                                                    data-tooltip-id="my-tooltip"
                                                    data-tooltip-content={user?.displayName}
                                                    src={user?.photoURL}
                                                    alt="User Avatar" />
                                                <Tooltip id="my-tooltip"></Tooltip>
                                            </div>
                                    }
                                </div>
                            </div>

                            {/* profile dropdown */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-gray-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
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