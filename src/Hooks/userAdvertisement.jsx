import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const userAdvertisement = () => {
    const axiosSecure = useAxiosSecure();

    const { data: advertise = [], isLoading, refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await axiosSecure.get('/advertisements');
            // console.log(res.data);
            return res.data;
        }
    })

    return [advertise, isLoading, refetch]
};

export default userAdvertisement;