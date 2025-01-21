import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { FaCartPlus, FaHome, FaList, FaUsers } from 'react-icons/fa';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiKnightBanner } from 'react-icons/gi';
import { MdOutlinePayment } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar';
import { AiFillMedicineBox } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';


const DashboardLayout = () => {

    // to do: get isAdmin from the database
    const [isAdmin] = useAdmin();
    // const isAdmin = true;

    // to do: get isSeller from the database
    // const [isSeller] = useSeller();
    const isSeller = true;

    // to do: get user from the database

    return (
        <>
        <Helmet>
            <title>MediEase | Dashboard</title>
        </Helmet>
            <Navbar></Navbar>
            <div className='flex gap-10'>
                {/* conditional dashboard sidebar */}
                <div className='w-80 min-h-screen bg-green-300'>
                    <div className='ml-5  my-5'>
                        <h1 className='text-3xl font-semibold'>MediEase</h1>
                        <h5 className='text-xl font-semibold'>Health Care Products</h5>
                    </div>
                    <div className='divider'></div>


                    <ul className='menu'>

                        {
                            isAdmin ? <>
                                {/* Admin Menu */}
                                <li>
                                    <NavLink to="/dashboard/manageUsers">
                                        <FaUsers></FaUsers> Manage Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageCategory">
                                        <FaList></FaList> Manage Category
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentManagement">
                                        <MdOutlinePayment></MdOutlinePayment> Payment Management
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/salesReport">
                                        <FcSalesPerformance></FcSalesPerformance> Sales Report
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageBanner">
                                        <GiKnightBanner></GiKnightBanner> Manage Banner Advertise
                                    </NavLink>
                                </li>
                                <div className='divider'></div>
                            </> : <>
                                {/* Seller Menu */}
                                {
                                    isSeller ? <>
                                        <li>
                                            <NavLink to="/dashboard/manageMedicines">
                                                <AiFillMedicineBox></AiFillMedicineBox> Manage Medicines
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/paymentHistory">
                                                <MdOutlinePayment></MdOutlinePayment> Payment History
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/requestAd">
                                                <GiKnightBanner></GiKnightBanner> Ask For Advertisement
                                            </NavLink>
                                        </li>
                                        <div className="divider"></div>
                                    </> : <>
                                        <li>
                                            <NavLink to="/dashboard/paymentHistory">
                                                <GiKnightBanner></GiKnightBanner> Payment History
                                            </NavLink>
                                        </li>
                                    </>
                                }
                            </>
                        }

                        {/* User Menu */}
                        {/* <li>
                            <NavLink to="/dashboard/paymentHistory">
                                <GiKnightBanner /> Payment History
                            </NavLink>
                        </li> */}
                        <div className="divider"></div>



                        {/* Shared Menu */}
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">
                                <FaCartPlus></FaCartPlus> Shop
                            </NavLink>
                        </li>
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