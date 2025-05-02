import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import PrivateRoute from './PrivateRoute';
import Shop from '../Pages/Shop/Shop';
import DashboardLayout from '../Layouts/DashboardLayout';
import Cart from '../Pages/Cart/Cart';
import ManageUsers from '../Pages/Dashboard/Admin/ManageUsers';
import ManageCategory from '../Pages/Dashboard/Admin/ManageCategory';
import AdminRoute from './AdminRoute';
import SpecificMedicine from '../Pages/Shared/SpecificMedicine/SpecificMedicine';
import SellerRoute from './SellerRoute';
import ManageMedicine from '../Pages/Dashboard/Seller/ManageMedicine';
import AskAdvertisement from '../Pages/Dashboard/Seller/AskAdvertisement';
import UpdateCategory from '../Pages/Dashboard/Admin/UpdateCategory';
import Checkout from '../Components/Checkout';
import SellerPaymentHistory from '../Pages/Dashboard/Seller/SellerPaymentHistory';
import UserPaymentHistory from '../Pages/Dashboard/User/UserPaymentHistory';
import InvoicePage from '../Components/InvoicePage';
import AdminHomePage from '../Pages/Dashboard/Admin/AdminHomePage';
import SellerHomePage from '../Pages/Dashboard/Seller/SellerHomePage';
import ManageAdvertise from '../Pages/Dashboard/Admin/ManageAdvertise';
import PaymentManagement from '../Pages/Dashboard/Admin/PaymentManagement';
import SalesReport from '../Pages/Dashboard/Admin/SalesReport';
import ErrorPage from '../Pages/ErrorPage';
import About from '../Pages/About';
import Faq from '../Pages/FAQ';
import ContactUs from '../Pages/Home/ExtraSections/ContactUs';
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile';
import SellerProfile from '../Pages/Dashboard/Seller/SellerProfile';
import UserProfile from '../Pages/Dashboard/User/UserProfile';
import TermsAndConditions from '../Pages/TermsAndConditions';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import Imprint from '../Pages/Imprint';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'shop',
                element: <Shop></Shop>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'category/:category',
                element: <SpecificMedicine></SpecificMedicine>
            },
            {
                path: 'checkout',
                element: <Checkout></Checkout>
            },
            {
                path: '/invoice',
                element: <InvoicePage></InvoicePage>
            },
            // public routes
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/terms&conditions',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/privacyPolicy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/imprint',
                element: <Imprint></Imprint>
            }
        ]
    },
    // conditional (isAdmin, isSeller, isUser) dashboard
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            // admin dashboard routes
            {
                path: 'adminProfile',
                element: <AdminRoute>
                    <AdminProfile></AdminProfile>
                </AdminRoute>
            },
            {
                path: 'adminHome',
                element: <AdminRoute>
                    <AdminHomePage></AdminHomePage>
                </AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute>
                    <ManageUsers></ManageUsers>
                </AdminRoute>
            },
            {
                path: 'manageCategory',
                element: <AdminRoute>
                    <ManageCategory></ManageCategory>
                </AdminRoute>
            },
            {
                path: 'updateMedicine/:id',
                element: <AdminRoute>
                    <UpdateCategory></UpdateCategory>
                </AdminRoute>,
                loader: ({ params }) => fetch(`https://mediease-server-side.vercel.app/categories/${params.id}`)
            },
            {
                path: 'paymentManagement',
                element: <AdminRoute>
                    <PaymentManagement></PaymentManagement>
                </AdminRoute>
            },
            {
                path: 'salesReport',
                element: <AdminRoute>
                    <SalesReport></SalesReport>
                </AdminRoute>
            },
            {
                path: 'manageAdvertisement',
                element: <AdminRoute>
                    <ManageAdvertise></ManageAdvertise>
                </AdminRoute>
            },
            // seller dashboard routes
            {
                path: 'sellerProfile',
                element: <SellerRoute>
                    <SellerProfile></SellerProfile>
                </SellerRoute>
            },
            {
                path: 'sellerHome',
                element: <SellerRoute>
                    <SellerHomePage></SellerHomePage>
                </SellerRoute>
            },
            {
                path: 'manageMedicine',
                element: <SellerRoute>
                    <ManageMedicine></ManageMedicine>
                </SellerRoute>
            },
            {
                path: 'sellerPaymentHistory',
                element: <SellerRoute>
                    <SellerPaymentHistory></SellerPaymentHistory>
                </SellerRoute>
            },
            {
                path: 'requestAdvertisement',
                element: <SellerRoute>
                    <AskAdvertisement></AskAdvertisement>
                </SellerRoute>
            },
            // user dashboard routes
            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'userPaymentHistory',
                element: <UserPaymentHistory></UserPaymentHistory>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;