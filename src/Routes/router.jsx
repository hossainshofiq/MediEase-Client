import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../Pages/Shared/Secret';
import Shop from '../Pages/Shop/Shop';
import DashboardLayout from '../Layouts/DashboardLayout';
import Cart from '../Pages/Cart/Cart';
import ManageUsers from '../Pages/Dashboard/Admin/ManageUsers';
import ManageCategory from '../Pages/Dashboard/Admin/ManageCategory';
import AdminRoute from './AdminRoute';
import SpecificMedicine from '../Pages/Shared/SpecificMedicine/SpecificMedicine';

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
            //
            {
                path: 'secret',
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>
            },
            {
                path: 'specificMedicine/:category',
                element: <SpecificMedicine></SpecificMedicine>
            }
        ]
    },
    // dashboard
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            // admin dashboard routes
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
            }
        ]
    }
])

export default router;