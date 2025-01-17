import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading';

const AdminRoute = ({ children }) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user || isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;