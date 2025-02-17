import React from 'react';
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
                    <li><NavLink to="/about">About Us</NavLink></li>
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
                </>
            }
        </div>
    </>
    return (
        // <div className="navbar fixed z-50 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
        // <div className="navbar bg-green-300 fixed top-0 z-50 px-2 md:px-12 lg:px-20">
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
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                    MediEase
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end">
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
                                            (<NavLink to="/dashboard/adminHome">Dashboard</NavLink>)
                                            :
                                            !isAdmin && isSeller ?
                                                (<NavLink to="/dashboard/sellerHome">Dashboard</NavLink>)
                                                :
                                                (<NavLink to="/dashboard/userHome">Dashboard</NavLink>)
                                    }
                                </li>

                                {/* <li><NavLink to="/dashboard">Dashboard</NavLink></li> */}
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <Link to="/login" className="btn">Join US</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;