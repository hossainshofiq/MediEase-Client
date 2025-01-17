import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { FaCartPlus, FaHome, FaList, FaUsers } from 'react-icons/fa';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiKnightBanner } from 'react-icons/gi';
import { MdOutlinePayment } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {

    // to do

    // to do: get isAdmin from the database
    const [isAdmin] = useAdmin();

    // to do: get isSeller from the database
    const isSeller = false;

    // to do: get user from the database

    return (
        <>
            <Navbar></Navbar>
            <div className='flex gap-10'>
                {/* conditional dashboard sidebar */}
                <div className='w-80 min-h-screen bg-green-300'>
                    <div className='ml-5  my-5'>
                        <h1 className='text-3xl font-semibold'>MediEase</h1>
                        <h5 className='text-xl font-semibold'>Health Corner</h5>
                    </div>
                    <div className='divider'></div>
                    <ul className='menu'>
                        {/* admin dashboard */}
                        {
                            isAdmin ?
                                <>
                                    {/* <li><NavLink><FaHome></FaHome> Admin Home</NavLink></li> */}
                                    <li><NavLink to="/dashboard/users">
                                        <FaUsers></FaUsers> Manage Users
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/manageCategory">
                                        <FaList></FaList> Manage Category
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/paymentManagement">
                                        <MdOutlinePayment></MdOutlinePayment> Payment Management
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/salesReport">
                                        <FcSalesPerformance></FcSalesPerformance> Sales Report
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/manageBanner">
                                        <GiKnightBanner></GiKnightBanner> Manage Banner Advertise
                                    </NavLink></li>
                                </>
                                :
                                <>
                                    {/* <li><NavLink><FaHome></FaHome> Admin Home</NavLink></li> */}
                                    <li><NavLink to="/"><FaUsers></FaUsers> Manage Medicines</NavLink></li>
                                    <li><NavLink to="/"><MdOutlinePayment></MdOutlinePayment> Payment History</NavLink></li>
                                    <li><NavLink to="/"><GiKnightBanner></GiKnightBanner> Ask For Advertisement</NavLink></li>
                                    <div className='divider'></div>

                                    {/* <li><NavLink to="/"><GiKnightBanner></GiKnightBanner> Payment History</NavLink></li> */}
                                </>
                        }
                        {/* {
                            isSeller ?
                                <>
                                    <li><NavLink to="/"><FaUsers></FaUsers> Manage Medicines</NavLink></li>
                                    <li><NavLink to="/"><MdOutlinePayment></MdOutlinePayment> Payment History</NavLink></li>
                                    <li><NavLink to="/"><GiKnightBanner></GiKnightBanner> Ask For Advertisement</NavLink></li>
                                    <div className='divider'></div>
                                </> : <>
                                    <li><NavLink to="/"><GiKnightBanner></GiKnightBanner> Payment History</NavLink></li>
                                </>
                        } */}
                        {/* <div className='divider'></div> */}

                        {/* seller dashboard */}
                        {/* <li><NavLink><FaHome></FaHome> Seller Home</NavLink></li> */}
                        {/* <li><NavLink to="/"><FaUsers></FaUsers> Manage Medicines</NavLink></li>
                    <li><NavLink to="/"><MdOutlinePayment></MdOutlinePayment> Payment History</NavLink></li>
                    <li><NavLink to="/"><GiKnightBanner></GiKnightBanner> Ask For Advertisement</NavLink></li>
                    <div className='divider'></div> */}

                        {/* user dashboard */}
                        {/* <li><NavLink to="/"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/"><MdOutlinePayment></MdOutlinePayment> Payment History</NavLink></li> */}

                        {/* shared menu */}
                        <div className='divider'></div>
                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to="/shop"><FaCartPlus></FaCartPlus> Shop</NavLink></li>
                    </ul>
                </div>

                {/* conditional dashboard content */}
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>

    );
};

export default DashboardLayout;