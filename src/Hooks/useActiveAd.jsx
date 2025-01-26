import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useActiveAd = () => {
    
    const axiosSecure = useAxiosSecure();

    const { data: activeAdvertise = [], isLoading, refetch } = useQuery({
        queryKey: ['activeAdvertise'],
        queryFn: async () => {
            const res = await axiosSecure.get('/activeAdvertisements');
            console.log(res.data);
            return res.data;
        }
    })

    return [activeAdvertise, isLoading, refetch]

};

export default useActiveAd;