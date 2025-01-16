import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAuth = () => {
    
    const context = useContext(AuthContext);
    return context;
};

export default useAuth;