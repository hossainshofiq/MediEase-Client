import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useSeller = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const { data: isSeller, isPending: isSellerLoading } = useQuery({
        queryKey: [user?.email, 'isSeller'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/seller/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isSeller, isSellerLoading];
};

export default useSeller;