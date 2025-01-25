import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    // tanstack query
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    
    const { data: cart = [], isLoading, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    });
    return [cart, refetch, isLoading];
};

export default useCart;