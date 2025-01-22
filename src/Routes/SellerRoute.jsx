// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useSeller from '../Hooks/useSeller';
// import useAuth from '../Hooks/useAuth';
// import Loading from '../Pages/Shared/Loading';

// const SellerRoute = ({ children }) => {

//     const [isSeller, isSellerLoading] = useSeller();
//     const [user, loading] = useAuth();
//     const location = useLocation();

//     if (loading || isSellerLoading) {
//         return <Loading></Loading>
//     }

//     if (user && isSeller) {
//         return children;
//     }
//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>
// };

// export default SellerRoute;

import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading';

const AdminRoute = ({ children }) => {

    const [isSeller, isSellerLoading] = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (user || isSeller) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;