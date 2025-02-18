import React from 'react';
import { FaCartPlus, FaHome, FaList, FaUsers } from 'react-icons/fa';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiEntryDoor, GiKnightBanner } from 'react-icons/gi';
import { MdAdminPanelSettings, MdOutlinePayment } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar';
import { AiFillMedicineBox } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';
import useSeller from '../Hooks/useSeller';
import useAuth from '../Hooks/useAuth';
import { FaShopSlash } from 'react-icons/fa6';


const DashboardLayout = () => {

    const { user } = useAuth();
    // to do: get isAdmin from the database
    const [isAdmin] = useAdmin();
    // const isAdmin = true;

    // to do: get isSeller from the database
    const [isSeller] = useSeller();
    // const isSeller = false;

    // or: get isUser from the database

    return (
        <>
            <Helmet>
                <title>MediEase | Dashboard</title>
            </Helmet>
            {/* <Navbar></Navbar> */}

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col lg:items-center lg:justify-center p-4">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden fixed top-4 left-4 z-50"
                    >
                        {/* Open drawer */}
                        <GiEntryDoor className='text-3xl'></GiEntryDoor>
                    </label>
                    <div className="mt-8 lg:mt-0 w-full">
                        {/* <div>Welcome, {user.displayName} </div> */}
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay lg:hidden"></label>

                    <ul className="menu bg-primary text-white min-h-screen w-64 lg:w-80 p-4">
                        <div className='ml-5  my-5'>
                            <h1 className='text-3xl font-bold'>MediEase</h1>
                            <h5 className='text-xl font-semibold'>Health Care Products</h5>
                        </div>
                        <div className='divider'></div>
                        {
                            isAdmin ? (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/adminHome">
                                            <MdAdminPanelSettings></MdAdminPanelSettings> Admin Home
                                        </NavLink>
                                    </li>
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
                                        <NavLink to="/dashboard/manageAdvertisement">
                                            <GiKnightBanner></GiKnightBanner> Manage Banner Advertise
                                        </NavLink>
                                    </li>
                                    <div className="divider"></div>
                                </>
                            ) : !isAdmin && isSeller ? (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/sellerHome">
                                            <FaShopSlash></FaShopSlash> Seller Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageMedicine">
                                            <AiFillMedicineBox></AiFillMedicineBox> Manage Medicines
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/sellerPaymentHistory">
                                            <MdOutlinePayment></MdOutlinePayment> Payment History
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/requestAdvertisement">
                                            <GiKnightBanner></GiKnightBanner> Ask For Advertisement
                                        </NavLink>
                                    </li>
                                    <div className="divider"></div>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userPaymentHistory">
                                            <MdOutlinePayment></MdOutlinePayment> Payment History
                                        </NavLink>
                                    </li>
                                    <div className='divider'></div>
                                </>
                            )
                        }

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
            </div>


        </>

    );
};

export default DashboardLayout;