import React from 'react';
import logo from '../../assets/Logo/Website_logo_fabicon.png'
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import useCart from '../../Hooks/useCart';

const Navbar = () => {

    const { user, logout } = useAuth();
    const [cart] = useCart();

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
                console.log(error);
            })
    }

    const navOptions = <>
        <div className='lg:flex gap-2'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            {/* for checking route */}
            <li><NavLink to="/secret">Secret</NavLink></li>

            <li>
                <NavLink className="" to={'/cart'}>
                    <button className="flex gap-2">
                        <FaShoppingCart className='text-lg'></FaShoppingCart>
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </NavLink>
            </li>

            <li>
                <details className="dropdown">
                    <summary className="">Languages</summary>
                    <ul className="menu dropdown-content bg-gray-500 text-white rounded-box z-[50] p-2">
                        <li><a>English</a></li>
                        <li><a>Bangla</a></li>
                    </ul>
                </details>
            </li>
        </div>
    </>
    return (
        // <div className="navbar fixed z-50 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
        <div className="navbar bg-green-300 max-w-screen-xl mx-auto">
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

            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 h-12 border-2 border-black rounded-full z-50">
                                    <img
                                        data-tooltip-id='my-tooltip'
                                        data-tooltip-content={user?.displayName}
                                        src={user?.photoURL}
                                        alt="User Avatar" />
                                    <Tooltip id='my-tooltip'></Tooltip>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-gray-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Update Profile
                                        {/* <span className="badge">New</span> */}
                                    </a>
                                </li>
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
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

{/* <li>
    <div className="flex-none">
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle">
                <div className="indicator">
                    <FaCartPlus className='text-2xl'></FaCartPlus>
                    <span className="badge badge-xs indicator-item">+0</span>
                </div>
            </div>
            <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</li> */}